<script context="module">
	export async function preload({params}) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return {post: data};
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import {
		DOCTOR_WHO_KEYWORDS,
		PageName
	} from "../../global";
	import {currentPage, Page} from "../../stores";

	export let post;

	currentPage.set(Page.BLOGPOST);
</script>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content="Find out a bit about the person behind gallifreyan.info.">
	<meta name="keywords" content={post.keywords + DOCTOR_WHO_KEYWORDS}>
	{@html `
		<script type="application/ld+json">
		{
		  "@context": "https://schema.org",
		  "@type": "BreadcrumbList",
		  "itemListElement": [
		    {
		      "@type": "ListItem",
		      "position": 1,
		      "name": "${PageName.BLOG}",
		      "item": "https://gallifreyan.info/blog/"
		    },
		    {
		      "@type": "ListItem",
		      "position": 2,
		      "name": "${post.title}",
		      "item": "https://gallifreyan.info/blog/${post.slug}/"
		    }
		  ]
		}
		</script>
		`}
</svelte:head>

<h1>{post.title}</h1>

<div class="content">
	{@html post.html}
</div>
