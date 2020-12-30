<script>
	import {currentPage, Page} from "../stores";
	import {DOCTOR_WHO_KEYWORDS, LANGUAGE, LANGUAGE_NAME_MAP, PageName} from "../global";
	import {aboutBreadcrumb} from "../breadcrumb";
	import Image from "../components/Image.svelte";

	currentPage.set(Page.ABOUT_ME);

	function altFromDesc(desc, lang) {
		return `"${desc}" in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}
</script>

<svelte:head>
	<title>{PageName.get($currentPage)}</title>
	<meta name="description" content="Find out a bit about the person behind gallifreyan.info.">
	<meta name="keywords" content={"about,author,acquaintance,me," + DOCTOR_WHO_KEYWORDS}>
	{@html aboutBreadcrumb}
</svelte:head>

<h1>{PageName.get($currentPage)}</h1>

<h2>Author</h2>
<div uk-grid>
	<div class="uk-width-1-4@l uk-width-1-3@m uk-width-1-1@s">
		<Image src="img/about/come_along_pond.svg"
		       alt={altFromDesc('Come along Pond', LANGUAGE.SCG)}
		       desc="Come along Pond"/>
	</div>
	<div class="uk-width-3-4@l uk-width-2-3@m uk-width-1-1@s">
		<p>
			Hi, my name is d20cay and I love Doctor Who, probably more than anything yet, well
			except my best friends of course. Since I'm currently doing an apprenticeship as a
			software engineer, I thought it would be a good idea to unify as many Gallifreyan guides
			as possible in a website. In my free time, I like to program, watch Netflix and hang out
			with friends. Basically the typical nerd hobbies.
		</p>
		<p>
			I'm generally very interested in languages. I've already been learning Esperanto for a
			year and started learning Japanese and Klingon from Star Trek a while ago. So as I one
			day stumbled upon a Gallifreyan tutorial on YouTube I was instantly hooked, since it had
			to do with my favourite show, Doctor Who, and looked really intriguing. I always had to
			remember what the different names and addresses for the writing types were. At which
			point I realized it might be cool to create a website that brings together as many
			writing systems as possible and add missing content that might help with understanding
			the writing system, which other guides might not have provided, based on my time spent
			in the community.
		</p>
	</div>

	<h2>Content Provider & Publisher</h2>
	<p>
		All of the content on this page (<a href="https://gallifreyan.info">gallifreyan.info</a>) is
		written and published by myself. I hope to get some help with the writing of guides soon
		because I'm very busy but for now it's just me. The website and the server that all of this
		runs on is operated by <a href="https://ovh.com">OVH</a>.
	</p>

	<h2>Goals</h2>
	<p>
		My main goal with this website is to spread the word about the amazing possibilities,
		flexibility and versatility of Gallifreyan by providing comprehensive guides that anyone can
		understand and apply. This was the goal when I started and will hopefully stay that way
		until I'm unable to entertain this website by my financial means. <br>
		Secondarily I also hope get enough traction through this site that I can use the commissions
		that people send me as a serious side hustle. If this page gets enough traction and gets
		enough traffic at some point I would like to use the contact form to allow other Gallifreyan
		artists to get more commissions.
	</p>
</div>