<script>
	import {currentPage, Page} from "../stores";
	import {DOCTOR_WHO_KEYWORDS} from "../global";
	import {indexBreadcrumb} from "../breadcrumb";
	import Scg from "../components/script/Scg.svelte";
	import Rasilonian from "../components/script/Rasilonian.svelte";
	import Cc from "../components/script/Cc.svelte";

	currentPage.set(Page.HOME);
</script>

<svelte:head>
	<title>Gallifreyan Guides Overview</title>
	<meta name="description"
	      content="Did you notice the stylistic writing inside the Tardis on an Episode of Doctor Who and you would like to know whether they're a real language? You've come to the right place. This website will answer that question and teach you how to actually use the so-called Gallifreyan language.">
	<meta name="keywords" content={DOCTOR_WHO_KEYWORDS}>
	{@html indexBreadcrumb}
</svelte:head>

<div class="uk-container uk-container-small uk-margin">
	<h1>Gallifreyan - The Script of the Timelords</h1>

	<p>
		In the Doctor Who show Gallifreyan is the fictional language of the Time Lords, which reside
		on Gallifrey. On the show, the constellations of circles usually don't mean anything. Doctor
		Who and the concept of a circular language called Gallifreyan are © BBC. I have no
		affiliation with Doctor Who or the BBC. This guide shows the different ways of writing
		Gallifreyan.
	</p>
	<p>
		For the time being I have only completed the gallifreyan guide for Sherman's Circular
		Gallifreyan. I plan to add more guides but I am really busy attending two schools and
		working for a company at the same time. I hope to someday make this the central place to get
		all of your gallifreyan information, but sadly I really lack the time to do that myself. If
		you're in a position to help me out by writing some guides I urge you to <a href="contact/">contact
		me</a>.
	</p>
	<p>
		Have anything else you want to let me know or ask me? <a href="contact/">Shoot me a
		message</a>!
	</p>
</div>


<div class="uk-child-width-expand@l uk-child-width-1-2@m uk-child-width-1-1@s" uk-grid>
	<div>
		<Rasilonian/>
	</div>
	<div>
		<Scg/>
	</div>
	<div>
		<Cc/>
	</div>
</div>