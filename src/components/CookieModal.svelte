<script>
	import {onMount} from 'svelte';
	import Privacy from "./Privacy.svelte";

	onMount(() => {
		if (!userAgreedToCookies(document.cookie)) {
			UIkit.modal("#cookie-modal").show();
		}
	});

	const CONSENT_COOKIE_NAME = "cookieConsentGallifreyanInfo"

	function saveConsentCookie() {
		document.cookie =
			`${CONSENT_COOKIE_NAME}=true; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`
	}

	function goBack() {
		history.go(-1);
	}

	function userAgreedToCookies(cookieString) {
		let cookies = cookieString.split("; ");
		let consentCookies = cookies.filter(c => c === `${CONSENT_COOKIE_NAME}=true`);
		return consentCookies.length > 0;
	}
</script>

<div id="cookie-modal" uk-modal="esc-close: false; bg-close: false;">
	<div class="uk-modal-dialog uk-margin-auto-vertical">
		<div class="uk-modal-header">
			<h2 class="uk-modal-title">Cookie Disclaimer</h2>
		</div>
		<div class="uk-modal-body">
			<p>
				This page uses cookies to operate properly. You can either use this website with the
				knowledge that you're being tracked or not use the website at all. I don't have the
				time to implement the feature to disable tracking.
			</p>
			<Privacy/>
		</div>
		<div class="uk-modal-footer">
			<button on:click={saveConsentCookie}
			        class="uk-button uk-button-primary uk-modal-close uk-border-rounded">Accept
				Cookies and Continue
			</button>
			<button on:click={goBack} class="uk-button uk-button-default uk-border-rounded">Go
				Back
			</button>
		</div>
	</div>
</div>