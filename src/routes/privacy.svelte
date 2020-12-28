<script>
	import {currentPage, Page} from "../stores";
	import {DOCTOR_WHO_KEYWORDS} from "../global";
	import Privacy from "../components/Privacy.svelte";

	currentPage.set(Page.PRIVACY);
</script>

<svelte:head>
	<title>Privacy Policy</title>
	<meta name="description"
	      content="This page lists privacy related services that are in operation on gallifreyan.info.">
	<meta name="keywords" content={"privacy,security,legal," + DOCTOR_WHO_KEYWORDS}>
</svelte:head>


<div class="uk-container uk-container-small uk-margin">
	<h1>Privacy Policy</h1>

	<Privacy/>
</div>