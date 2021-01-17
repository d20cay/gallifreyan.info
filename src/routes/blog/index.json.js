import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug,
		date: post.date,
		text: stripHtml(post.html),
		image: post.image,
		alt: post.alt,
		lang: post.lang,
		author: post.author
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

function stripHtml(htmlString) {
	return htmlString.replace(/<[^>]+>/g, '');
}