<script>
	import {currentPage, Page} from "../stores";
	import {DOCTOR_WHO_KEYWORDS, PageName} from "../global";
	import {structureBreadcrumb} from "../breadcrumb";
	import SiteStructure from "../components/SiteStructure.svelte";

	currentPage.set(Page.STRUCTURE);
</script>

<svelte:head>
	<title>{PageName.get($currentPage)}</title>
	<meta name="description"
	      content="An overview of all pages available on gallifreyan.info.">
	<meta name="keywords"
	      content={"structure,navigation,navigation page,navigational page," + DOCTOR_WHO_KEYWORDS}>
	{@html structureBreadcrumb}
</svelte:head>

<h1>{PageName.get($currentPage)}</h1>
<SiteStructure/>