<script context="module">
	export function preload() {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return {posts};
		});
	}
</script>

<script>
	import {currentPage, Page} from "../../stores";
	import {
		daysAgo,
		DOCTOR_WHO_KEYWORDS,
		LANGUAGE_NAME_MAP,
		PageName,
		readableDate
	} from "../../global";
	import {blogBreadcrumb} from "../../breadcrumb";
	import Image from "../../components/Image.svelte";

	export let posts;

	currentPage.set(Page.BLOG);

	function altFromDesc(desc, lang) {
		return `"${desc}" in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}

	function captionFromDesc(desc, lang) {
		return `<q>${desc}</q> written in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}
</script>

<svelte:head>
	<title>{PageName.get($currentPage)}</title>
	<meta name="description"
	      content="Here I post more detailed information on news related to gallifreyan.info and share some of the designs I'm working on in my free time.">
	<meta name="keywords" content={"blog,art,design," + DOCTOR_WHO_KEYWORDS}>
	{@html blogBreadcrumb}
</svelte:head>

<h1 class="uk-margin">{PageName.get($currentPage)}</h1>

{#each posts as post}
	<a rel="prefetch"
	   href="blog/{post.slug}"
	   class="uk-link-toggle">
		<div class="uk-display-block uk-card uk-card-body uk-card-default uk-comment uk-border-rounded uk-margin">
			<header class="uk-comment-header uk-margin-remove-bottom">
				<h4><span class="uk-comment-title uk-link-heading">{post.title}</span></h4>
				<ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
					<li>{readableDate(new Date(post.date))}</li>
					<li>last edited {daysAgo(new Date(post.date))} days ago</li>
					<li>by {post.author}</li>
				</ul>
			</header>
			<p>{`${post.text.substring(0, 150)}...`}</p>
			<Image src={post.image}
			       alt={altFromDesc(post.alt, post.lang)}
			       desc={captionFromDesc(post.alt, post.lang)}
			       lightbox={false}/>
		</div>
	</a>
{/each}
