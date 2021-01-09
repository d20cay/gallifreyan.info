<script>
	import {currentPage, Page} from "../../stores";
	import {PageName} from "../../global";

	currentPage.set(Page.GUIDES);
</script>

<svelte:head>
	<title>{PageName.get($currentPage)}</title>
</svelte:head>

<h1>{PageName.get($currentPage)}</h1>

<ul class="uk-list">
	<li>
		<a href="guides/scg/">{PageName.get(Page.SCG)}</a>
	</li>
</ul>