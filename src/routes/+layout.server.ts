import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		sections: [
			{ slug: '/', title: 'Home' },
			{ slug: '/blog/about', title: 'About' },
			{ slug: '/blog/get-involved', title: 'Get Involved' }
		]
	};
};