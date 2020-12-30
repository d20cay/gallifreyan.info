<script>
	import {Page} from "../stores";

	export let currentPage;
</script>

<div class="uk-visible@m">
	<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
		<nav class="uk-navbar-container uk-margin" uk-navbar>
			<div class="uk-navbar-left">
				<a class="uk-navbar-item uk-logo" href="/">
					<img data-src="img/global/favicon.svg"
					     height="50"
					     width="50"
					     alt="Gallifreyan logo"
					     uk-img>
				</a>

				<ul class="uk-navbar-nav">
					<li>
						<a href="#">Guides <span uk-icon="chevron-down"></span></a>
						<div class="uk-navbar-dropdown uk-width-auto">
							<ul class="uk-nav uk-navbar-dropdown-nav">
								<li class="uk-nav-header">Guides</li>
								<li class:uk-active={currentPage === Page.SCG}>
									<a href="guide/scg/">Sherman's Circular Gallifreyan</a>
								</li>
								<li class="uk-nav-divider"></li>
								<li class:uk-active={currentPage === Page.DOWNLOAD}>
									<a href="download/">Downloads</a>
								</li>
							</ul>
						</div>
					</li>
					<li class:uk-active={currentPage === Page.DESIGNS}>
						<a href="designs/">Designs</a>
					</li>
				</ul>
			</div>
			<div class="uk-navbar-right">
				<ul class="uk-navbar-nav">
					<li class:uk-active={currentPage === Page.CONTACT}>
						<a href="contact/">
							<span class="uk-margin-small-right" uk-icon="icon: mail"></span>
							Contact me
						</a>
					</li>
				</ul>
			</div>
		</nav>
	</div>
</div>

<div class="uk-hidden@m">
	<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
		<nav class="uk-navbar-container uk-margin" uk-navbar>
			<div class="uk-navbar-left">
				<button uk-toggle="target: #sidenav;"
				        class="uk-button uk-button-text uk-navbar-toggle"
				        type="button">
					<span uk-navbar-toggle-icon></span>
					<span class="uk-margin-small-left">Menu</span>
				</button>
			</div>
			<div class="uk-navbar-center">
				<a class="uk-navbar-item uk-logo" href="/">
					<img data-src="img/global/favicon.svg"
					     height="50"
					     width="50"
					     alt="Gallifreyan logo"
					     uk-img></a>
			</div>
			<div id="sidenav" uk-offcanvas="overlay: true">
				<div class="uk-offcanvas-bar uk-flex uk-flex-column">
					<button class="uk-offcanvas-close" type="button" uk-close></button>

					<ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
						<li class="uk-parent">
							<a>Guides</a>
							<ul class="uk-nav-sub">
								<li class:uk-active={currentPage === Page.SCG}>
									<a href="guide/scg/">Sherman's Circular Gallifreyan</a>
								</li>
							</ul>
						</li>
						<li class="uk-parent">
							<a>Resources</a>
							<ul class="uk-nav-sub">
								<li class:uk-active={currentPage === Page.DOWNLOAD}>
									<a href="download/">Guide Download</a>
								</li>
								<li class:uk-active={currentPage === Page.DESIGNS}>
									<a href="designs/">Designs</a>
								</li>
							</ul>
						</li>
						<li class="uk-parent">
							<a>Me</a>
							<ul class="uk-nav-sub">
								<li class:uk-active={currentPage === Page.ABOUT_ME}>
									<a href="about/">About me</a>
								</li>
								<li class:uk-active={currentPage === Page.CONTACT}>
									<a href="contact/">Contact</a>
								</li>
							</ul>
						</li>
						<li class="uk-nav-divider"></li>
						<li class:uk-active={currentPage === Page.CONTACT}>
							<a href="../../contact/">
								<span class="uk-margin-small-right" uk-icon="icon: mail"></span>
								Contact me
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</div>