<script>
	import {currentPage, Page} from "../stores";

	currentPage.set(Page.PRIVACY);
</script>

<svelte:head>
	<title>Privacy & Security</title>
</svelte:head>


<div class="uk-container uk-container-small uk-margin">
	<h1>Privacy & Security</h1>

	Personal information from the users of this website is collected through the following list of
	parties unassociated with the webmaster:
	<ul>
		<li>
			<a href="https://support.google.com/analytics/answer/4597324">Google Analytics</a>
			<span class="uk-margin-small-right pointer-cursor"
			      uk-icon="info"
			      uk-tooltip="This external party is used to get an image of the performance and discoverability of this website."></span>
		</li>
		<li>
			<a href="https://www.ovh.com/ca/en/support/privacy-policy.xml">OVH</a>
			<span class="uk-margin-small-right pointer-cursor"
			      uk-icon="info"
			      uk-tooltip="This external party provides the website's contents since they host all of the data on their servers."></span>
		</li>
		<li>
			<a href="https://policies.google.com/privacy">Google Forms</a>
			<span class="uk-margin-small-right pointer-cursor"
			      uk-icon="info"
			      uk-tooltip="This external party provides the form to contact me. While that service is visible it maybe collecting personal data and data transferred through it may be collected as well."></span>
		</li>
	</ul>

	To store data about whether a user has consented to having cookies stored about them a cookie is
	used that purely indicates whether consent was given or not.
</div>