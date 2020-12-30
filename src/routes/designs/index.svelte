<script>
	import {currentPage, Page} from "../../stores";
	import {DOCTOR_WHO_KEYWORDS, LANGUAGE_NAME_MAP, PageName} from "../../global";
	import {designsBreadcrumb} from "../../breadcrumb";
	import {commissionDesigns, personalDesigns} from "./data";
	import Image from "../../components/Image.svelte";

	currentPage.set(Page.DESIGNS);

	let counter = 0;

	function altFromDesc(desc, lang) {
		return `"${desc}" in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}

	function useCounter() {
		// This is required to count up. Incrementing in svelte's each loop doesn't increase the value on each use.
		return counter += 1;
	}
</script>

<svelte:head>
	<title>{PageName.get($currentPage)}</title>
	<meta name="description"
	      content="Since I've discovered Doctor Who and the Galifreyan scripts I have spent a lot of time producing designs for customers and myself. Take a look at some of my designs on this page.">
	<meta name="keywords"
	      content={"design,photoshop,learn,study,copy,tattoo,vector,image,picture," + DOCTOR_WHO_KEYWORDS}>
	{@html designsBreadcrumb}
</svelte:head>

<h1>{PageName.get($currentPage)}</h1>

<p>On this page you'll find the designs I've made, for clients and for my
	personal use.</p>

<h2>Commissioned Designs</h2>

<div class="uk-child-width-1-2@s uk-child-width-1-3@m uk-child-width-1-4@l" uk-grid>
	{#each commissionDesigns as design}
		<div>
			<Image src={design.src}
			       alt={altFromDesc(design.desc, design.lang)}
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