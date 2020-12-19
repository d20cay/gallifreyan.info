import {writable} from 'svelte/store';

export const Page = {
	UNKNOWN: 0,
	DOWNLOAD: 1,
	DESIGNS: 2,
	SCG: 3,
	ABOUT_ME: 4,
	CONTACT: 5,
	HOME: 6,
	CHANGELOG: 7,
	IMPRINT: 8,
	PRIVACY: 9
};

export const currentPage = writable(Page.UNKNOWN);