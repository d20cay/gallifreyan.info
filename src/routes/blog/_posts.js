import {LANGUAGE} from "../../global";

const posts = [
	{
		title: 'Starting this blog',
		slug: 'eat-the-path',
		date: new Date('2021-01-17'),
		html: `
			<p>
				To start this blog off, I would like to share a design with you, that I've been meaning to create, ever since I read the sentence in the book originally. Today I'm going to write the quote <q>Eat the path, or the path will eat you.</q> from the book <i>To Sleep in a Sea of Stars</i> by Christopher Paolini. To me, this quote represents the hardship and decsions we have to make along our journey through life to survive and prosper where possible. We must seize the opportunities and face our challenges to get what we want and sometimes <i>need</i> for survival.
			</p>
			<p>
				The following is my first draft for now and since I'm very strapped for time at the moment, I'll probably update this post by the next weekend.
			</p>
			<!-- TODO(d20cay): Remove this paragraph and update once the design is done. -->
			<Image src="img/blog/2021_q1/eat-the-path.svg"
		       alt={altFromDesc("Eat the path, or the path will eat you.", LANGUAGE.SCG)}
		       desc={captionFromDesc("Eat the path, or the path will eat you.", LANGUAGE.SCG)}/>
		`,
		image: 'img/blog/2021_q1/eat-the-path.svg',
		alt: 'Eat the path, or the path will eat you.',
		lang: LANGUAGE.SCG,
		author: 'd20cay',
		keywords: [
			'Stars',
			'To Sleep in a Sea of Stars',
			'tsiasos',
			'Sea of Stars',
			'Kira Navarez',
			'Inare'
		]
	},
];

export default posts;
