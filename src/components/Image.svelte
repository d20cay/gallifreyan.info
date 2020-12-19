<script>
	export let src;
	export let alt;
	export let desc;
	export let imageCounter;
	export let annotateFigure;
	export let addAnchor;
	export let lightbox = true;

	function computedDesc(desc) {
		if (annotateFigure) {
			return `Fig. ${imageCounter}: ${desc}`;
		} else {
			return desc
		}
	}

	function computedAnchor() {
		if (imageCounter !== undefined) {
			return `fig${imageCounter}`;
		}
		return ``;
	}
</script>

<style>
	.no-mouse-action {
		pointer-events: none;
	}
</style>

<figure>
	{#if addAnchor && lightbox}
		<div uk-lightbox>
			<a id={computedAnchor()} href={src}>
				<img {src} {alt}>
			</a>
		</div>
	{:else if lightbox}
		<div uk-lightbox>
			<a href={src}>
				<img {src} {alt}>
			</a>
		</div>
	{:else if addAnchor}
		<a class="no-mouse-action" id={computedAnchor()}>
			<img {src} {alt}>
		</a>
	{:else}
		<img {src} {alt}>
	{/if}
	{#if desc !== undefined}
		<figcaption class="uk-text-center uk-text-small">
			{@html computedDesc(desc)}
		</figcaption>
	{/if}
</figure>