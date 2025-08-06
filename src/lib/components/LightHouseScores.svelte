<script lang="ts">
	import type { Attachment } from 'svelte/attachments';
	import * as echarts from 'echarts';

	const chartId = 'chart';

	const chartConfig: echarts.EChartsOption = {
		title: {
			text: 'Lighthouse Scores'
		},
		tooltip: {},
		dataset: {
			dimensions: ['build', 'page', 'Accessibility', 'Best Practices', 'Performance', 'SEO'],
			source: [
				{
					build: 'Jekyll',
					page: '/',
					Accessibility: 90,
					'Best Practices': 80,
					Performance: 70,
					SEO: 60
				},
				{
					build: 'Sveltekit',
					page: '/',
					Accessibility: 90,
					'Best Practices': 80,
					Performance: 70,
					SEO: 60
				},
				{
					build: 'Jekyll',
					page: '/about',
					Accessibility: 90,
					'Best Practices': 80,
					Performance: 70,
					SEO: 60
				},
				{
					build: 'Sveltekit',
					page: '/about',
					Accessibility: 90,
					'Best Practices': 80,
					Performance: 70,
					SEO: 60
				}
			]
		},
		// Declare an x-axis (category axis).
		// The category map the first column in the dataset by default.
		xAxis: { type: 'category' },
		// Declare a y-axis (value axis).
		yAxis: {},
		// Declare several 'bar' series,
		// every series will auto-map to each column by default.
		series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
	};

	const myAttachment: Attachment = (element) => {
		console.log('setting the chart options');
		let chart = echarts.init(document.getElementById(chartId));
		chart.setOption(chartConfig);
		console.log('set the chart options');

		return () => {
			console.log('cleaning up');
			chart.dispose();
		};
	};
</script>

<p>Lighthouse graph below</p>
<div id={chartId} {@attach myAttachment} style="width: 600px; height:400px;"></div>
