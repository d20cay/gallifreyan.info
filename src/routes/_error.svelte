<script>
	import SiteStructure from "../components/SiteStructure.svelte";
	import {currentPage, Page} from "../stores";

	export let status;
	export let error;

	currentPage.set(Page.NOT_FOUND);

	const dev = process.env.NODE_ENV === 'development';
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>

<p>{error.message}</p>
{#if status === 404}
	<p>This page doesn't exist. You can pick any one of the existing pages from the list below, the
		navbar up top or the footer further down.</p>
{:else}
	<p>Something went wrong. Please <a href="contact/">send me a message</a> so that I can figure out what went wrong to
		fix this issue.</p>
{/if}

<h2>gallifreyan.info Pages</h2>
<SiteStructure/>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if}
