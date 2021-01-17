import {writable} from 'svelte/store';

export const Page = {
	UNKNOWN: 0,
	DOWNLOAD: 1,
	DESIGNS: 2,
	SCG: 3,
	ABOUT: 4,
	CONTACT: 5,
	HOME: 6,
	CHANGELOG: 7,
	IMPRINT: 8,
	PRIVACY: 9,
	STRUCTURE: 10,
	NOT_FOUND: 11,
	GUIDES: 12,
	BLOG: 13,
	BLOGPOST: 14
};

export const currentPage = writable(Page.UNKNOWN);