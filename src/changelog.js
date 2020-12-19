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