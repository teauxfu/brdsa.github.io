<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import {
		Chart,
		BarController,
		BarElement,
		CategoryScale,
		LinearScale,
		Tooltip,
		Legend,
		Title,
		Colors
	} from 'chart.js';

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

	const chartId = 'chart';

	const loadChart: Attachment = (element) => {
		const scores = [
			{
				page: 'about',
				build: 'jekyll',
				seo: 78,
				bestPractices: 18,
				accessibility: 40,
				performance: 90
			},
			{
				page: 'fite',
				build: 'jekyll',
				seo: 68,
				bestPractices: 78,
				accessibility: 80,
				performance: 55
			},
			{
				page: 'fite',
				build: 'sveltekit',
				seo: 55,
				bestPractices: 68,
				accessibility: 66,
				performance: 45
			},
			{
				page: 'fite',
				build: 'sveltekit',
				seo: 32,
				bestPractices: 99,
				accessibility: 53,
				performance: 12
			}
		];

		const canvasElement = element as HTMLCanvasElement;
		let chart: Chart;
		if (canvasElement) {
			chart = new Chart(canvasElement, {
				type: 'bar',
				data: {
					labels: ['Accessibility', 'Performance', 'Best practices', 'SEO'],
					datasets: [
						{
							label: 'Jekyll',
							data: [15, 45, 75, 98]
						},
						{
							label: 'SvelteKit',
							data: [15, 45, 75, 98]
						},
					]
				}
			});
		}

		return () => {
			console.log('cleaning up');
			chart.destroy();
		};
	};
</script>

<div class="bg-white">
	<canvas id={chartId} {@attach loadChart} style="w-sm h-sm"></canvas>
</div>
