<script>
	import {onMount} from "svelte";
	import {doubleLetters, andVariations, numbers, sentences, wordParts} from "./data";
	import {currentPage, Page} from "../../../stores";
	import Image from "../../../components/Image.svelte";
	import HelpOverlay from "../../../components/HelpOverlay.svelte";
	import {LANGUAGE, LANGUAGE_NAME_MAP} from "../../../global";

	currentPage.set(Page.SCG);

	const lang = LANGUAGE_NAME_MAP.get(LANGUAGE.SCG)
	let counter = 0;

	onMount(() => {
		document.querySelectorAll("a").forEach(a => {
			if (!a.hash || !document.querySelectorAll(a.hash).length) return;
			a.href = window.location.origin + window.location.pathname + a.hash;
		});
	});

	function altFromDesc(desc, lang) {
		return `"${desc}" in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}

	function captionFromDesc(desc, lang) {
		return `<q>${desc}</q> written in ${LANGUAGE_NAME_MAP.get(lang)}`;
	}

	function figRef(n) {
		return `<a href="#fig${n}">Fig. ${n}</a>`;
	}
</script>

<svelte:head>
	<title>{lang} Guide</title>
</svelte:head>

<HelpOverlay/>

<h1>
	How to write {lang}
</h1>

<div class="uk-grid">
	<div class="uk-width-4-5@l uk-width-3-4@m uk-width-1-2@s">
		{lang}, sometimes also called Circular Gallifreyan, short CG or SCG, is a writing system /
		alphabet invented by Loren Sherman back in 2011. Since then it has gained popularity and
		even made its way onto the Doctor Who show. I'll cover everything that Sherman covers in his
		guide and maybe even a bit more. Bear in mind that this is only a writing system. You can't
		speak {lang}, you can only write it. So {lang} is only a writing system and not a language.
	</div>
	<div class="uk-width-1-5@l uk-width-1-4@m uk-width-1-2@s">
		<Image src={wordParts.intro.src}
		       alt={altFromDesc(wordParts.intro.desc, wordParts.intro.lang)}
		       desc={captionFromDesc(wordParts.intro.desc, wordParts.intro.lang)}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>

<h2>Introduction</h2>
<p>
	Gallifreyan is a made up writing system used by the Time Lords of Gallifrey, from the BBC series
	Doctor Who. This writing system was created by Loren Sherman and is free for anyone to use.
	Thanks a lot Loren!<br>
	This guide deals with Circular Gallifreyan. To clarify, this is not a language - it's just a way
	to write words and sentences in languages like English that use the latin alphabet.
</p>

<h2>The Alphabet</h2>

<h3>The Consonants</h3>
<div class="uk-child-width-expand@m" uk-grid>
	<div>
		<p>
			Each word has its own word circle, that the consonants attach to. This circle is called
			the word circle. {@html figRef(2)} shows the consonant stems and the additional
			modifiers.<br>
			One can refer to the stems by naming each stem by the first letter in the row. Thus, the
			uppermost stem is the b-stem, the second stem from the top the j-stem, and so on.
		</p>
		<p>
			The left-most column shows all the consonant stems. The upper-most row shows the
			decoration. These two combined form a consonant.
		</p>
	</div>
	<div>
		<Image src="img/guide/scg/letters/consonants.svg"
		       alt="Consonant table"
		       desc={`The ${lang} consonants`}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>
<div class="uk-child-width-expand@m" uk-grid>
	<div>
		<p>
			{@html figRef(3)} is an example of how to apply all of the consonant stems
			from {@html figRef(2)} to a so-called word circle. {@html figRef(3)} does not really
			correspond to and english word, but spells out <q>bjtth</q>.
		</p>
	</div>
	<div>
		<Image src="img/guide/scg/letters/stems.svg"
		       alt="Consonant stems applied to a word circle"
		       desc={`All ${lang} consonant stems applied to a word circle`}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>

<h3>The Vowels</h3>
<p>
	In Circular Gallifreyan you attach your vowels to the consonant which came before the vowel
	whenever possible. If the first letter of a word is a vowel, you can write the vowel without a
	consonant preceding it. Separating a vowel from its preceding consonant can also be done to
	improve visual appearance.
</p>
<div class="uk-child-width-expand@m" uk-grid>
	<div>
		<p>
			The curved black path represents a fragment of a word circle. Don't worry, we will take
			a look at these very soon. The grey circles are the<q>th-stems</q>, as seen
			in {@html figRef(2)}. The most important part are the violet elements. These are the
			vowels which are attached to their preceding consonant, here always <q>th</q>.
			This again, is not an English word; it spells out <q>thathethithothu</q>.
		</p>
		<Image src="img/guide/scg/letters/vowels.svg"
		       alt="Vowels"
		       desc="All vowels attached to part of a word circle"
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
	<div>
		<p>
			In {@html figRef(3)} you saw all of the consonant stems applied to a word circle. In
			this figure I have added the vowels so that you have an idea where to put the vowels on
			the preceding consonant. The violet objects are the vowels.
		</p>
		<p>
			These words would spell out (left to right, top to bottom) <q>bajatatha</q>,
			<q>bojototho</q>, <q>bijitithi</q>, <q>bujututhu</q> and <q>bojototho</q>.
		</p>
		<Image src="img/guide/scg/letters/stems-vowels.svg"
		       alt="Vowels on consonant stems"
		       desc="All vowels attached to each of the consonant stems"
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>

<h2>The Words</h2>

<p>
	To read a word in Gallifreyan, start with the letter that is the furthest at the bottom of the
	word circle, then read counterclockwise. Let’s write some example words.
</p>
<p>Flip through the images elements to see how to build a word.</p>

<h3>Doctor</h3>
<div class="uk-position-relative uk-visible-toggle"
     tabindex="-1"
     uk-slider="finite: true;">
	<ul class="uk-slider-items uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-3@m">
		<li>
			<h4>D</h4>
			<Image src={wordParts.d.src}
			       alt={altFromDesc(wordParts.d.desc, wordParts.d.lang)}
			       desc={captionFromDesc(wordParts.d.desc, wordParts.d.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				To construct the first letter of our word (<q>Doctor</q>), we draw the <q>b-stem</q>,
				which is a big divot. Then we attach three dots. We choose that stem and decoration
				because that is where the <q>d</q> lies in the consonant table. The dots can
				be
				placed anywhere, and can be as large or small as you wish, as long as as it's clear
				that
				they belong to the <q>b-stem</q>.
			</p>
		</li>
		<li>
			<h4>O</h4>
			<Image src={wordParts.o.src}
			       alt={altFromDesc(wordParts.o.desc, wordParts.o.lang)}
			       desc={captionFromDesc(wordParts.o.desc, wordParts.o.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				Let's first write each letter by themselves and then attach them to the previous
				letters. We just add the letter <q>o</q> as it's used in {@html figRef(4)}.
			</p>
		</li>
		<li>
			<h4>Do</h4>
			<Image src={wordParts.do.src}
			       alt={altFromDesc(wordParts.do.desc, wordParts.do.lang)}
			       desc={captionFromDesc(wordParts.do.desc, wordParts.do.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				{@html figRef(5)} shows us how to combine the <q>b-stem</q>, which was used to
				create <q>d</q> ({@html figRef(6)}), with the vowel <q>o</q>
				({@html figRef(7)}), to form <q>do</q>. As long as it conforms with the rules
				of the vowel, we could put it anywhere. Use the placement to create a unique version
				of your design!
			</p>
		</li>
		<li>
			<h4>K</h4>
			<Image src={wordParts.c.src}
			       alt={altFromDesc(wordParts.c.desc, wordParts.c.lang)}
			       desc={captionFromDesc(wordParts.c.desc, wordParts.c.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				The <q>c</q> is tricky. As can see if you check the consonant table above, the
				<q>c</q> is greyed out, that's intentional. You are only supposed to use the
				<q>c</q> , and <q>q</q> that is also greyed out, in proper names.
				Instead use their phonetic equivalents <q>s</q> and <q>k</q>. We are
				trying to achieve the sound of a <q>k</q> so we will use the
				<q>j-stem</q> with two dots.
			</p>
		</li>
		<li>
			<h4>Dok</h4>
			<Image src={wordParts.doc.src}
			       alt={altFromDesc(wordParts.doc.desc, wordParts.doc.lang)}
			       desc={captionFromDesc(wordParts.doc.desc, wordParts.doc.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				Since words are read counterclockwise, we add the <q>c</q> in counterclockwise
				direction from <q>do</q>.
			</p>
		</li>
		<li>
			<h4>T</h4>
			<Image src={wordParts.t.src}
			       alt={altFromDesc(wordParts.t.desc, wordParts.t.lang)}
			       desc={captionFromDesc(wordParts.t.desc, wordParts.t.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				Now we need a <q>t</q>, so we just use the <q>t-stem</q> without any
				decoration.
			</p>
		</li>
		<li>
			<h4>Dokt</h4>
			<Image src={wordParts.doct.src}
			       alt={altFromDesc(wordParts.doct.desc, wordParts.doct.lang)}
			       desc={captionFromDesc(wordParts.doct.desc, wordParts.doct.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				And now attach the <q>t</q> in counterclockwise direction from the existing
				letters. I think you get the gist. Let me finish the word for you.
			</p>
		</li>
		<li>
			<h4>O</h4>
			<Image src={wordParts.o.src}
			       alt={altFromDesc(wordParts.o.desc, wordParts.o.lang)}
			       desc={captionFromDesc(wordParts.o.desc, wordParts.o.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
		</li>
		<li>
			<h4>Dokto</h4>
			<Image src={wordParts.docto.src}
			       alt={altFromDesc(wordParts.docto.desc, wordParts.docto.lang)}
			       desc={captionFromDesc(wordParts.docto.desc, wordParts.docto.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
		</li>
		<li>
			<h4>R</h4>
			<Image src={wordParts.r.src}
			       alt={altFromDesc(wordParts.r.desc, wordParts.r.lang)}
			       desc={captionFromDesc(wordParts.r.desc, wordParts.r.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
		</li>
		<li>
			<h4>Doktor</h4>
			<Image src={wordParts.doctor.src}
			       alt={altFromDesc(wordParts.doctor.desc, wordParts.doctor.lang)}
			       desc={captionFromDesc(wordParts.doctor.desc, wordParts.doctor.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
		</li>
	</ul>

	<ul class="uk-slider-nav uk-dotnav uk-flex-center"></ul>

	<a class="uk-position-center-left uk-position-small uk-light uk-background-secondary uk-border-rounded"
	   href="#"
	   uk-slidenav-previous
	   uk-slider-item="previous"></a>
	<a class="uk-position-center-right uk-position-small uk-light uk-background-secondary uk-border-rounded"
	   href="#"
	   uk-slidenav-next
	   uk-slider-item="next"></a>
</div>

<h3>Who</h3>
<div class="uk-position-relative uk-visible-toggle"
     tabindex="-1"
     uk-slider="finite: true;">
	<ul class="uk-slider-items uk-grid uk-grid-small uk-child-width-1-1 uk-child-width-1-3@m">
		<li>
			<h4>Wh</h4>
			<Image src={wordParts.wh.src}
			       alt={altFromDesc(wordParts.wh.desc, wordParts.wh.lang)}
			       desc={captionFromDesc(wordParts.wh.desc, wordParts.wh.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				You can write <q>wh</q> either as one letter, as seen in this image, or as two
				separate letters. The result is the exact same but you might want to choose one over
				the other for aesthetic reasons. The other way of doing this is illustrated
				in {@html figRef(18)}, {@html figRef(19)} and {@html figRef(20)}.
			</p>
		</li>
		<li>
			<h4>W</h4>
			<Image src={wordParts.w.src}
			       alt={altFromDesc(wordParts.w.desc, wordParts.w.lang)}
			       desc={captionFromDesc(wordParts.w.desc, wordParts.w.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				To write <q>wh</q> as two separate letters, you would first use the letter
				<q>w</q>.
			</p>
		</li>
		<li>
			<h4>H</h4>
			<Image src={wordParts.h.src}
			       alt={altFromDesc(wordParts.h.desc, wordParts.h.lang)}
			       desc={captionFromDesc(wordParts.h.desc, wordParts.h.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				Then you'll need the letter <q>h</q> to complete <q>wh</q>.
			</p>
		</li>
		<li>
			<h4>Wh</h4>
			<Image src={wordParts.wh2.src}
			       alt={altFromDesc(wordParts.wh2.desc, wordParts.wh2.lang)}
			       desc={captionFromDesc(wordParts.wh2.desc, wordParts.wh2.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				Now that we have both <q>w</q> and <q>h</q> we can combine them, as we
				learned before when writing <q>doctor</q>.
			</p>
		</li>
		<li>
			<h4>O</h4>
			<Image src={wordParts.o2.src}
			       alt={altFromDesc(wordParts.o2.desc, wordParts.o2.lang)}
			       desc={captionFromDesc(wordParts.o2.desc, wordParts.o2.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				To complete <q>who</q> we're just missing the <q>o</q>, which is exactly
				the same as we used in <q>doctor</q>.
			</p>
		</li>
		<li>
			<h4>Who</h4>
			<Image src={wordParts.who.src}
			       alt={altFromDesc(wordParts.who.desc, wordParts.who.lang)}
			       desc={captionFromDesc(wordParts.who.desc, wordParts.who.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				In the end <q>who</q> can be composed in two ways. One way is to combine the
				<q>o</q> with the "single" consonant <q>wh</q> ({@html figRef(17)}) like
				this.
			</p>
		</li>
		<li>
			<h4>Who</h4>
			<Image src={wordParts.who2.src}
			       alt={altFromDesc(wordParts.who2.desc, wordParts.who2.lang)}
			       desc={captionFromDesc(wordParts.who2.desc, wordParts.who2.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
			<p>
				We can also combine the <q>o</q> with the letters <q>w</q> and
				<q>h</q> written separately ({@html figRef(20)}).
			</p>
		</li>
	</ul>

	<ul class="uk-slider-nav uk-dotnav uk-flex-center"></ul>

	<a class="uk-position-center-left uk-position-small uk-light uk-background-secondary uk-border-rounded"
	   href="#"
	   uk-slidenav-previous
	   uk-slider-item="previous"></a>
	<a class="uk-position-center-right uk-position-small uk-light uk-background-secondary uk-border-rounded"
	   href="#"
	   uk-slidenav-next
	   uk-slider-item="next"></a>
</div>

<h3>Double Letters</h3>
<div uk-grid>
	<div class="uk-width-3-4@m">
		<p>
			Double letters, such as the <q>oo</q> in <q>cool</q> or the <q>ll</q>
			in <q>all</q> can be denoted by another circle of the same thickness.
			So<q>all</q> and<q>cool</q> could be written like this:
		</p>
	</div>
	<div class="uk-width-1-4@m">
		<div class="uk-child-width-expand" uk-grid>
			<div>
				<Image src={doubleLetters.all.src}
				       alt={altFromDesc(doubleLetters.all.desc, doubleLetters.all.lang)}
				       desc={captionFromDesc(doubleLetters.all.desc, doubleLetters.all.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
			<div>
				<Image src={doubleLetters.cool.src}
				       alt={altFromDesc(doubleLetters.cool.desc, doubleLetters.cool.lang)}
				       desc={captionFromDesc(doubleLetters.cool.desc, doubleLetters.cool.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
		</div>
	</div>
</div>

<h3>And and Ampersand</h3>
<div uk-grid>
	<div class="uk-width-3-4@m">
		<p>
			{@html figRef(26)} shows you how you would write the <q>and</q>. Once you start
			writing a bit of CG, you'll realize that it doesn't look that good. Since it's used
			quite often in the english language, the Gallifreyan community on Reddit had a
			discussion about the matter and decided to substitute <q>and</q> with a newly
			created character, the ampersand. Feel free to substitute <q>and</q> for
			<q>&</q>. The ampersand is just the letter e with a line across it, as seen
			in {@html figRef(27)}.
		</p>
	</div>
	<div class="uk-width-1-4@m">
		<div class="uk-child-width-expand" uk-grid>
			<div>
				<Image src={andVariations.and.src}
				       alt={altFromDesc(andVariations.and.desc, andVariations.and.lang)}
				       desc={captionFromDesc(andVariations.and.desc, andVariations.and.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
			<div>
				<Image src={andVariations.ampersand.src}
				       alt={altFromDesc(andVariations.ampersand.desc, andVariations.ampersand.lang)}
				       desc={captionFromDesc(andVariations.ampersand.desc, andVariations.ampersand.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
		</div>
	</div>
</div>

<h2>The Sentences</h2>

<div uk-grid>
	<div class="uk-width-1-3@m">
		<p>
			Words are good alright, but sentences are even better! Like words, they're read
			counterclockwise starting from the bottom. The letters <q>T</q>,
			<q>WH</q>,<q>SH</q>, <q>R</q>, <q>V</q>, <q>W</q> and
			<q>S</q> can be used to interconnect letters by interlocking them. This convention
			exists purely to improve visual appearance. It gives a sentence more coherence. The
			words in {@html figRef(28)} say <q>Bow ties are cool</q>.
		</p>
		<Image src={sentences.bowties.src}
		       alt={altFromDesc(sentences.bowties.desc, sentences.bowties.lang)}
		       desc={captionFromDesc(sentences.bowties.desc, sentences.bowties.lang)}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
	<div class="uk-width-2-3@m">
		<p>
			Next we'll add two circles around all of the words. The inner circle has multiple divots
			to fill the space that the letter circles don't cover. This helps eliminate dead space,
			is purely aesthetic and doesn't change the meaning at all. The outer circle is a little
			bit bigger than the inner one and has no divots, unless there is more than one sentence,
			but we'll get to that later.
		</p>
		<p>
			Now it’s time to extend the lines. For the meaning of any one letter, all that matters
			is that the right number of lines terminate at that letter. It doesn't matter to which
			other object these lines connect.<br>One exception is that the lines from the letters
			<q>i</q> and <q>u</q>should face in the approximately right direction. E.g.
			a line starting out from the letter <q>i</q> must roughly go inwards and a line
			starting out from the letter <q>u</q> must rougly go outwards. Lines can be used
			to create an even better appearance of harmony by interconnecting.
		</p>
		<div class="uk-flex uk-flex-center">
			<div class="uk-width-1-2@m">
				<Image src={sentences.bowtiesSentence.src}
				       alt={altFromDesc(sentences.bowtiesSentence.desc, sentences.bowtiesSentence.lang)}
				       desc={captionFromDesc(sentences.bowtiesSentence.desc, sentences.bowtiesSentence.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
		</div>
	</div>
</div>

<h3>The Punctuation</h3>
<div class="uk-flex uk-flex-center">
	<div class="uk-width-1-2@m">
		<Image src="img/guide/scg/sentences/punctuation/punctuation.svg"
		       alt="Gallifreyan punctuation"
		       desc={`The ${lang} punctuation`}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>
<p>
	In {@html figRef(29)} there are two sentence circles. The inner sentence circle, with the
	divots, and the outer sentence circle which just wraps everything up. The punctuation of a
	sentence is always placed on the inner sentence circle. The <q>?</q>, <q>!</q> and
	<q>;</q> can be situated on the inside or outside of the inner circle. All other
	punctuation marks should stay on the inner circle.<br>The <q>'</q> is a special case. The
	two lines that designate an <q>'</q>, must not start on the inner circle and end on the
	outer circle. Instead they must start or end in between the two letter/consonant stems, and
	start/end on the inner sentence circle. The following examples show good and bad practice.
</p>
<div class="uk-child-width-1-2" uk-grid>
	<div class="uk-flex uk-flex-center">
		<div class="uk-width-1-2@m">
			<h4>Good Practice</h4>
			<Image src={sentences.iver.src}
			       alt={altFromDesc(sentences.iver.desc, sentences.iver.lang)}
			       desc={captionFromDesc(sentences.iver.desc, sentences.iver.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
		</div>
	</div>
	<div class="uk-flex uk-flex-center">
		<div class="uk-width-1-2@m">
			<h4>Bad Practice</h4>
			<Image src={sentences.ivew.src}
			       alt={altFromDesc(sentences.ivew.desc, sentences.ivew.lang)}
			       desc={captionFromDesc(sentences.ivew.desc, sentences.ivew.lang)}
			       imageCounter={counter += 1}
			       annotateFigure={true}
			       addAnchor={true}/>
		</div>
	</div>
</div>

<h3>Connected Sentences</h3>
<div uk-grid>
	<div class="uk-width-3-4@m">
		Sentences are connected by interlocking them with the use of the divots on the inner
		sentence circle. In this way the sentences form chains like shown in {@html figRef(33)}.
		These chains are generally read from left to right, but you might want to add your own
		touch and rearrange them differently. The order of the sentences should at least be
		guessable from context.
	</div>
	<div class="uk-width-1-4@m">
		<Image src={sentences.fearHate.src}
		       alt={altFromDesc(sentences.fearHate.desc, sentences.fearHate.lang)}
		       desc={captionFromDesc(sentences.fearHate.desc, sentences.fearHate.lang)}
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>

<h2>The Numbers</h2>

<div class="uk-child-width-1-2@m" uk-grid>
	<div>
		<p>
			Numbers can be written as concentric circles. The area between two adjacent circles is
			called a ring and represents a digit. The number of lines inside a ring specifies the
			value of that digit. Small circles inscribed into a ring denote the value of five. The
			numbers in {@html figRef(34)} and {@html figRef(35)} are <q>1048</q> and <q>-13.37</q>.
		</p>
		<p>
			Numbers are read from the outermost to the innermost ring. If one circle is thicker than
			the others, it specifies the decimal point. If there is no thickest circle, the number
			is not a decimal number. Negative numbers are recognisable by a line that is drawn
			across the innermost circle.
		</p>
	</div>
	<div>
		<div class="uk-child-width-1-2" uk-grid>
			<div>
				<Image src={numbers.onek.src}
				       alt={altFromDesc(numbers.onek.desc, numbers.onek.lang)}
				       desc={captionFromDesc(numbers.onek.desc, numbers.onek.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
			<div>
				<Image src={numbers.thirteen.src}
				       alt={altFromDesc(numbers.thirteen.desc, numbers.thirteen.lang)}
				       desc={captionFromDesc(numbers.thirteen.desc, numbers.thirteen.lang)}
				       imageCounter={counter += 1}
				       annotateFigure={true}
				       addAnchor={true}/>
			</div>
		</div>
	</div>
</div>

<h2>The Final Test</h2>
<p>
	Gallifreyan sentences are read from outermost to innermost word. Translate this sentence to know
	if you're a real Gallifreyan pro!
</p>
<div class="uk-flex uk-flex-center">
	<div class="uk-width-1-2@m">
		<Image src="img/guide/scg/test/everyones_important.svg"
		       alt="Final test of the Gallifreyan guide"
		       desc="Final test"
		       imageCounter={counter += 1}
		       annotateFigure={true}
		       addAnchor={true}/>
	</div>
</div>

<h2>FAQ</h2>

<dl class="uk-description-list">
	<dt>I'm not sure I understand how to read/write Gallifreyan. Do you have some more designs where
		I can practice?
	</dt>
	<dd>
		I sure do. Just head on over to <a href="designs/">gallifreyan.info/designs</a> and take a
		look at those. Don't look at the page and try to blindly click on an image. It will enlarge
		the image and hide the caption. Now you can try to read what it says and look at the caption
		once you think you have the right answer. If you are ready to start writing Gallifreyan,
		read one of the captions without looking at the design too much, make your own design and
		then check what I made to compare them.
	</dd>
</dl>
<dl class="uk-description-list">
	<dt>What editor an you recommend to start writing SCG?</dt>
	<dd>
		A popular and free choice is to write Circular Gallifreyan
		is <a href="https://inkscape.org/">Inkscape</a>. However <a href="https://inkscape.org/">Inkscape</a>
		is quite advanced and hard to get into. To get started I can recommend the free version of
		<a href="https://www.designer.io/">Gravit Designer</a>. Because of how
		<a href="https://www.designer.io/">Gravit Designer</a> is written you might have a hard
		time stretching your legs and getting more creative with your designs so it might be a good
		idea to start looking for something more suitable at that point.<br>
		Personally I use <a href="https://affinity.serif.com/en-us/designer/">Affinity Designer</a>because
		it's only a one-time payment and it gives me all I need. Some people that don't feel
		comfortable switching also write Gallifreyan in
		<a href="https://www.adobe.com/products/photoshop.html">Photoshop</a>.
	</dd>
</dl>
<dl class="uk-description-list">
	<dt>Can I download this guide somehow?</dt>
	<dd>
		You can. I have a list of downloads that can help you to remember the letters
		and some additional files if you're not sure on the specifics.
	</dd>
</dl>
<dl class="uk-description-list">
	<dt>Can you translate something for me?</dt>
	<dd>
		I will for a fee. <a href="contact/">Contact me</a> so we can get you a cool design!
	</dd>
</dl>
<dl class="uk-description-list">
	<dt>Is it possible to combine two consonants or vowels that aren't the same?</dt>
	<dd>
		Yes, but it's a little more complicated. To find out more about advanced techniques, check
		out the <a href="download/">downloads section</a>.
	</dd>
</dl>
<dl class="uk-description-list">
	<dt>How do I write the letter <q>U</q> if it's just one word?</dt>
	<dd>
		Either make the line which originates from the <q>U</q> circle back to the word
		circle, or make another circle around the word which would be the sentence circle for the
		line of the <q>U</q> to go.
	</dd>
</dl>
<div class="uk-margin">
	<a href="contact/">Ask some more questions</a>
</div>