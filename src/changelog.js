export const Type = {
	ADDED: 0,
	CHANGED: 1,
	FIXED: 2
}

const LabelType = {
	DEFAULT: 'default',
	SUCCESS: 'success',
	WARNING: 'warning',
	DANGER: 'danger'
}

export const TypeMap = new Map([
	[Type.ADDED, LabelType.SUCCESS],
	[Type.CHANGED, LabelType.DEFAULT],
	[Type.FIXED, LabelType.DANGER]
]);

export const TypeTextMap = new Map([
	[Type.ADDED, 'ADDED'],
	[Type.CHANGED, 'CHANGED'],
	[Type.FIXED, 'FIXED']
]);

export const changelog = [
	{
		date: '2020-12-29',
		version: '1.2.3',
		changes: [
			{
				text: 'Structured data markup to SCG guide.',
				type: Type.ADDED
			},
			{
				text: 'Invisible breadcrumbs in structured data markup for SEO.',
				type: Type.ADDED
			},
			{
				text: 'More consistency in page names.',
				type: Type.ADDED
			},
			{
				text: 'Error page to include navbar and structure of pages.',
				type: Type.CHANGED
			},
			{
				text: 'Structure page with [well] a structure of all pages.',
				type: Type.ADDED
			},
		]
	},
	{
		date: '2020-12-28',
		version: '1.2.2',
		changes: [
			{
				text: 'Author through meta tag on each page.',
				type: Type.ADDED
			},
			{
				text: 'Keywords through meta tag on each page.',
				type: Type.ADDED
			},
			{
				text: 'Description through meta tag on each page.',
				type: Type.ADDED
			},
			{
				text: 'Page titles in <title> tag to be more descriptive where needed.',
				type: Type.CHANGED
			},
		]
	},
	{
		date: '2020-12-28',
		version: '1.2.1',
		changes: [
			{
				text: 'Footer visibility to show up on landing page too.',
				type: Type.CHANGED
			},
			{
				text: 'Footer to show links to external guides without having to open accordion.',
				type: Type.CHANGED
			},
			{
				text: 'Some spacing mistakes leftover from the conversion to sapper.',
				type: Type.FIXED
			},
			{
				text: 'crosslinks between pages to build a more close-knit net.',
				type: Type.CHANGED
			},
			{
				text: 'Gallifreyan discord link to footer.',
				type: Type.ADDED
			},
			{
				text: 'Month in translation feedback.',
				type: Type.FIXED
			},
			{
				text: 'Title of SCG guide to reflect a Guide or How-To.',
				type: Type.CHANGED
			},
			{
				text: 'More specificity to SCG intro.',
				type: Type.ADDED
			},
			{
				text: 'A lot more consistency and specificity overall by specifying what type of Gallifreyan and referring to the exact language name instead of just using Gallifreyan generally. This change also includes adding more specific and consistent alt and caption texts for images.',
				type: Type.ADDED
			},
		]
	},
	{
		date: '2020-12-22',
		version: '1.2.0',
		changes: [
			{
				text: 'sitemap.xml.',
				type: Type.ADDED
			},
		]
	},
	{
		date: '2020-12-19',
		version: '1.1.0',
		changes: [
			{
				text: 'Imprint page for better legal compliance.',
				type: Type.ADDED
			},
			{
				text: 'Privacy policy page for better legal compliance.',
				type: Type.ADDED
			},
			{
				text: 'Cookie modal that has to be accepted to use the website.',
				type: Type.ADDED
			},
		]
	},
	{
		date: '2020-09-20',
		version: '1.0.1',
		changes: [
			{
				text: 'Date and version of first changelog entry.',
				type: Type.FIXED
			},
			{
				text: 'Lightbox functionality to most images.',
				type: Type.ADDED
			},
		]
	},
	{
		date: '2020-09-19',
		version: '1.0.0',
		changes: [
			{
				text: 'Updated gallifreyan.info to uikit.',
				type: Type.CHANGED
			},
			{
				text: 'Updated gallifreyan.info to sapper.',
				type: Type.CHANGED
			},
		]
	},
]