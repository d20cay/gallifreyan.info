<script>
	import {Page} from "../stores";
	import {PageName} from "../global";
</script>

<ul class="uk-list">
	<li>
		<a href="/">{PageName.get(Page.HOME)}</a>
	</li>
	<li>
		<a href="about/">{PageName.get(Page.ABOUT)}</a>
	</li>
	<li>
		<a href="blog/">{PageName.get(Page.BLOG)}</a>
	</li>
	<li>
		<a href="changelog/">{PageName.get(Page.CHANGELOG)}</a>
	</li>
	<li>
		<a href="contact/">{PageName.get(Page.CONTACT)}</a>
	</li>
	<li>
		<a href="designs/">{PageName.get(Page.DESIGNS)}</a>
	</li>
	<li>
		<a href="download/">{PageName.get(Page.DOWNLOAD)}</a>
	</li>
	<li>
		<a href="guide/">Guides</a>
		<ul class="uk-list">
			<li>
				<a href="guide/scg/">{PageName.get(Page.SCG)}</a>
			</li>
		</ul>
	</li>
	<li>
		<a href="imprint/">{PageName.get(Page.IMPRINT)}</a>
	</li>
	<li>
		<a href="privacy/">{PageName.get(Page.PRIVACY)}</a>
	</li>
	<li>
		<a href="structure/">{PageName.get(Page.STRUCTURE)}</a>
	</li>
</ul>