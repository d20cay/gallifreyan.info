<script>
	import {currentPage, Page} from "../../stores";
	import {comments} from "./data";

	currentPage.set(Page.CONTACT);

	function readableDate(date) {
		const year = date.getUTCFullYear();
		// Months start at 0 so they have to be incremented by 1 to be correct.
		const month = date.getUTCMonth() + 1;
		const day = date.getUTCDate();
		return `${year}-${month}-${day}`;
	}

	function readableTransTexts(texts) {
		if (texts.length === 1) {
			return `"${texts[0]}"`;
		} else if (texts.length === 2) {
			return `"${texts[0]}" and "${texts[1]}"`;
		} else if (texts.length > 2) {
			let displayText = '';
			texts.forEach((text, i) => {
				if (i === texts.length - 1) {
					displayText += ` and "${text}"`;
				} else if (i === texts.length - 2) {
					displayText += `"${text}"`;
				} else {
					displayText += `"${text}", `
				}
			});
			return displayText;
		}
		return '';
	}
</script>

<svelte:head>
	<title>Contact Me</title>
</svelte:head>

<h1>Contact Me</h1>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScS7ci6dFjg1UxoczSpUSAMkPnV0RLKtjkc92SuxjktkDVv3w/viewform?embedded=true"
        width="100%"
        height="700"
        frameborder="0"
        marginheight="0"
        marginwidth="0">
	Loading…
</iframe>

<ul uk-accordion>
	<li>
		<a class="uk-accordion-title" href="#">Translation Feedback</a>
		<div class="uk-accordion-content">
			{#each comments as comment}
				<article class="uk-comment uk-comment-primary uk-border-rounded uk-margin-medium">
					<header class="uk-comment-header uk-margin-remove-bottom">
						<div>
							<h4 class="uk-comment-title uk-margin-remove">
								{comment.name}
							</h4>
							<ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
								<li>{readableDate(comment.date)}</li>
								<li>{readableTransTexts(comment.translationTexts)}</li>
							</ul>
						</div>
					</header>
					<div class="uk-comment-body">
						<p>
							{comment.text}
						</p>
					</div>
				</article>
			{/each}
		</div>
	</li>
</ul>