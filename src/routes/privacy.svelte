<script>
	import {currentPage, Page} from "../stores";
	import Privacy from "../components/Privacy.svelte";

	currentPage.set(Page.PRIVACY);
</script>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>


<div class="uk-container uk-container-small uk-margin">
	<h1>Privacy Policy</h1>

	<Privacy/>
</div>