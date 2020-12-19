<script>
	import {currentPage, Page} from "../../stores";
	import {commissionDesigns, personalDesigns} from "./data";
	import Image from "../../components/Image.svelte";

	currentPage.set(Page.DESIGNS);

	let counter = 0;

	function altFromDesc(desc) {
		return `"${desc}" in Gallifreyan`;
	}

	function useCounter() {
		// This is required to count up. Incrementing in svelte's each loop doesn't increase the value on each use.
		return counter += 1;
	}
</script>

<svelte:head>
	<title>Gallifreyan Designs</title>
</svelte:head>

<h1>Gallifreyan Designs</h1>

<p>On this page you'll find the designs I've made, for <a href="contact/">clients</a> and for my
	personal use.</p>

<h2>Commissioned Designs</h2>

<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" uk-grid>
	{#each commissionDesigns as design}
		<div>
			<Image src={design.src}
			       alt={altFromDesc(design.desc)}
			       desc={design.desc}
			       imageCounter={useCounter()}
			       annotateFigure={true}/>
		</div>
	{/each}
</div>

<h2>Personal Designs</h2>

<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" uk-grid>
	{#each personalDesigns as design}
		<div>
			<Image src={design.src}
			       alt={altFromDesc(design.desc)}
			       desc={design.desc}
			       imageCounter={useCounter()}
			       annotateFigure={true}/>
		</div>
	{/each}
</div>