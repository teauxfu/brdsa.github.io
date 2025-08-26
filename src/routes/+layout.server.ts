import type { LayoutServerLoad } from './$types';
import {config} from '$lib/config'

export const load: LayoutServerLoad = () => {
	return {
		title: config.title,
		description: config.description,
		sections: config.headerLinks
	};
};