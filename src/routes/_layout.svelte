<script>
	import {currentPage, Page} from "../stores";
	import {guidePages} from "../global";
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import {onDestroy} from "svelte";
	import CookieModal from "../components/CookieModal.svelte";

	let currentPageValue;

	const unsubscribeCurrentPage = currentPage.subscribe(value => currentPageValue = value);
	onDestroy(() => unsubscribeCurrentPage());
</script>

{#if currentPageValue !== Page.UNKNOWN && currentPageValue !== Page.HOME}
	<Navbar currentPage={currentPageValue}/>
{/if}

<main class="uk-container uk-margin-large-top uk-margin-large-bottom"
      class:uk-container-small={!guidePages.includes(currentPageValue)}>
	<slot></slot>
</main>

{#if currentPageValue !== Page.UNKNOWN}
	<Footer/>
{/if}

<CookieModal/>