<script lang="ts">
	import type { Attachment } from "svelte/attachments";
	import {
		Chart,
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Title,
		Colors,
		type ChartConfiguration
	} from "chart.js";

	Chart.register([
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Title,
		Colors
	]);

	import { data } from "$lib/data/lighthouse-scores.json";

	const pages = [...new Set(data.map((r) => r.page))];
	let chart: Chart | undefined = $state();
	let currentPage = $state("/");
	let canvasElement: HTMLCanvasElement | undefined = $state();

	const loadChart: Attachment = (element) => {
		canvasElement = element as HTMLCanvasElement;
		if (canvasElement) {
			chart = new Chart(canvasElement, getChartConfigForPage("/"));
		}

		return () => {
			chart?.destroy();
		};
	};

	function getDataForPage(build: "SvelteKit" | "Jekyll", page: string) {
		const item = data.filter((r) => r.build === build && r.page === page).at(0);
		if (!item) return [];
		return [item.accessibility, item.performance, item.bestPractices, item.seo];
	}

	function getChartConfigForPage(page: string) {
		return {
			type: "bar",
			data: {
				labels: ["Accessibility", "Performance", "Best practices", "SEO"],
				datasets: [
					{
						label: "Jekyll",
						data: getDataForPage("Jekyll", page)
					},
					{
						label: "SvelteKit",
						data: getDataForPage("SvelteKit", page)
					}
				]
			},
			options: {
				plugins: {
					title: {
						display: true,
						text: `Results for page ${page}`
					}
				}
			}
		} as ChartConfiguration<"bar", number[], string>;
	}

	function changePage(page: string) {
		currentPage = page;
		if (currentPage && canvasElement) {
			chart?.destroy();
			chart = new Chart(canvasElement, getChartConfigForPage(currentPage));
		}
	}
</script>

<em>click to view results for page</em>
<div class="flex justify-evenly">
	{#each pages as page}
		<button
			class="my-2 rounded-md border-2 border-dsa-red bg-dsa-black2 px-0.5 font-bold dark:text-white"
			onclick={() => changePage(page)}>{page}</button
		>
	{/each}
</div>
<div class="bg-white">
	<canvas {@attach loadChart} style="w-sm h-sm"></canvas>
</div>
