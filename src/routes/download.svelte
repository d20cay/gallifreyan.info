<script>
	import {currentPage, Page} from "../stores";

	currentPage.set(Page.DOWNLOAD);
</script>

<style>
    .lvl-one-bullet {
        list-style-type: disc;
    }
</style>

<svelte:head>
	<title>Download Resources</title>
</svelte:head>

<h1>Download Resources</h1>

<p>Download the guides and possibly additional documents to learn and write offline.</p>

<ul uk-accordion>
	<li class="uk-open">
		<a class="uk-accordion-title" href="#">Sherman's Circular Gallifreyan</a>
		<div class="uk-accordion-content">
			<p>The guides from this section are specific to the <a href="guide/scg/">guide for
				Sherman's Circular Gallifreyan</a>.</p>
			<h4>Guides</h4>
			<p>The following downloads are the guides, in full (HTML), pocket (PDF) and compact
				(PDF) form.</p>
			<ul class="lvl-one-bullet">
				<li><a href="pdf/scg/scg-full-guide.pdf">Full Guide</a></li>
				<li><a href="pdf/scg/scg-pocket-guide.pdf">Pocket Guide</a></li>
				<li><a href="pdf/scg/scg-compact-guide.pdf">Compact Guide</a></li>
			</ul>

			<h4>Extras</h4>
			<p>These are some additional guides created by
				<a href="https://reddit.com/u/TalkingScribe">u/TalkingScribe</a>.</p>
			<ul class="lvl-one-bullet">
				<li><a href="pdf/scg/extra/letter_order.pdf">The Order of the Letters</a></li>
				<li><a href="pdf/scg/extra/lines.pdf">All About Lines</a></li>
				<li>
					<a href="pdf/scg/extra/punctuation_circles.pdf">Punctuation and the Circles that
						Love Them</a>
				</li>
				<li>
					<a href="pdf/scg/extra/vowels_good-bad-confusing.pdf">Vowels: The Good, The Bad
						and The Confusing</a>
				</li>
			</ul>
		</div>
	</li>
</ul>