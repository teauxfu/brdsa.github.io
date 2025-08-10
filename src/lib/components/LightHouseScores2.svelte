<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import Chart from 'chart.js/auto';
	const chartId = 'chart';

	const loadChart: Attachment = (element) => {
		const data = [
			{ year: 2010, count: 10 },
			{ year: 2011, count: 20 },
			{ year: 2012, count: 15 },
			{ year: 2013, count: 25 },
			{ year: 2014, count: 22 },
			{ year: 2015, count: 30 },
			{ year: 2016, count: 28 }
		];

		const canvasElement = element as HTMLCanvasElement;
		let chart : Chart;
		if (canvasElement) {
			chart = new Chart(canvasElement, {
				type: 'bar',
				data: {
					labels: data.map((row) => row.year),
					datasets: [
						{
							label: 'Acquisitions by year',
							data: data.map((row) => row.count)
						}
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

<canvas id={chartId} {@attach loadChart} style="w-sm h-sm"></canvas>
