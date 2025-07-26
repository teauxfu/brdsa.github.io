import type { LayoutServerLoad } from './$types';
import {config} from '$lib/config'

export const load: LayoutServerLoad = () => {
	return {
		sections: config.navLinks
	};
};