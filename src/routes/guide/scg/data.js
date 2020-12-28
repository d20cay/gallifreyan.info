import {LANGUAGE} from "../../../global";

export const wordParts = {
	intro: {
		src: 'img/guide/scg/gallifreyan.svg',
		desc: 'Gallifreyan',
		lang: LANGUAGE.SCG
	},
	d: {
		src: 'img/guide/scg/words/doctor/d.svg',
		desc: 'D',
		lang: LANGUAGE.SCG
	},
	o: {
		src: 'img/guide/scg/words/doctor/o.svg',
		desc: 'O',
		lang: LANGUAGE.SCG
	},
	do: {
		src: 'img/guide/scg/words/doctor/do.svg',
		desc: 'Do',
		lang: LANGUAGE.SCG
	},
	c: {
		src: 'img/guide/scg/words/doctor/c.svg',
		desc: 'c',
		lang: LANGUAGE.SCG
	},
	doc: {
		src: 'img/guide/scg/words/doctor/doc.svg',
		desc: 'Doc',
		lang: LANGUAGE.SCG
	},
	t: {
		src: 'img/guide/scg/words/doctor/t.svg',
		desc: 'T',
		lang: LANGUAGE.SCG
	},
	doct: {
		src: 'img/guide/scg/words/doctor/doct.svg',
		desc: 'Doct',
		lang: LANGUAGE.SCG
	},
	docto: {
		src: 'img/guide/scg/words/doctor/docto.svg',
		desc: 'Docto',
		lang: LANGUAGE.SCG
	},
	r: {
		src: 'img/guide/scg/words/doctor/r.svg',
		desc: 'R',
		lang: LANGUAGE.SCG
	},
	doctor: {
		src: 'img/guide/scg/words/doctor/doctor.svg',
		desc: 'Doctor',
		lang: LANGUAGE.SCG
	},
	wh: {
		src: 'img/guide/scg/words/who/wh.svg',
		desc: 'Wh',
		lang: LANGUAGE.SCG
	},
	w: {
		src: 'img/guide/scg/words/who/w.svg',
		desc: 'W',
		lang: LANGUAGE.SCG
	},
	h: {
		src: 'img/guide/scg/words/who/h.svg',
		desc: 'H',
		lang: LANGUAGE.SCG
	},
	wh2: {
		src: 'img/guide/scg/words/who/wh2.svg',
		desc: 'wh2',
		lang: LANGUAGE.SCG
	},
	o2: {
		src: 'img/guide/scg/words/who/o.svg',
		desc: 'O',
		lang: LANGUAGE.SCG
	},
	who: {
		src: 'img/guide/scg/words/who/who.svg',
		desc: 'Who',
		lang: LANGUAGE.SCG
	},
	who2: {
		src: 'img/guide/scg/words/who/who2.svg',
		desc: 'Who',
		lang: LANGUAGE.SCG
	},
};

export const doubleLetters = {
	all: {
		src: 'img/guide/scg/words/all.svg',
		desc: 'All',
		lang: LANGUAGE.SCG
	},
	cool: {
		src: 'img/guide/scg/words/cool.svg',
		desc: 'Cool',
		lang: LANGUAGE.SCG
	},
}

export const andVariations = {
	and: {
		src: 'img/guide/scg/words/and/and.svg',
		desc: 'And',
		lang: LANGUAGE.SCG
	},
	ampersand: {
		src: 'img/guide/scg/words/and/&.svg',
		desc: '&',
		lang: LANGUAGE.SCG
	},
}

export const sentences = {
	bowties: {
		src: 'img/guide/scg/sentences/bowties.svg',
		desc: 'Bowties are cool',
		lang: LANGUAGE.SCG
	},
	bowtiesSentence: {
		src: 'img/guide/scg/sentences/bowties_sentence.svg',
		desc: 'Bowties are cool',
		lang: LANGUAGE.SCG
	},
	punctuation: {
		src: 'img/guide/scg/sentences/punctuation/punctuation.svg',
		desc: 'Bowties are cool',
		lang: LANGUAGE.SCG
	},
	iver: {
		src: 'img/guide/scg/sentences/punctuation/ive-right.svg',
		desc: "I've",
		lang: LANGUAGE.SCG
	},
	ivew: {
		src: 'img/guide/scg/sentences/punctuation/ive-wrong.svg',
		desc: 'Ive',
		lang: LANGUAGE.SCG
	},
	fearHate: {
		src: 'img/designs/personal/fear-hate.svg',
		desc: 'Without Fear. Without Hate.',
		lang: LANGUAGE.SCG
	},
}

export const numbers = {
	onek: {
		src: 'img/guide/scg/numbers/1048.svg',
		desc: '1048',
		lang: LANGUAGE.SCG
	},
	thirteen: {
		src: 'img/guide/scg/numbers/13.svg',
		desc: '-13.37',
		lang: LANGUAGE.SCG
	},
}

export const howToStructuredData = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Write Sherman's Circular Gallifreyan",
  "description": "This quick guide will focus on writing the word 'Who' from the show 'Doctor Who' to simplify matters. To learn how to write Sherman's Circular Gallifreyan for any word, visit https://gallifreyan.info/guide/scg. We go through a few examples and you can also send a message if you're having trouble.",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "minValue": "0",
    "maxValue": "50"
  },
  "totalTime": "PT60M",
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Computer"
    },
    {
      "@type": "HowToTool",
      "name": "Graphics Program"
    }
  ],
  "step": [
    {
      "@type": "HowToSection",
      "name": "Preparation",
      "position": "1",
      "itemListElement": [
        {
          "@type": "HowToStep",
          "position": "1",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "text": "Open your graphics program."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "Some popular programs are PhotoShop (monthly subscription), Affinity Designer (one-time payment 50USD) or Inkscape (free)."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "2",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "text": "Figure out what to write."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "Choose something simple for your first time. A single word is probably best."
            }
          ]
        }
      ]
    },
    {
      "@type": "HowToSection",
      "name": "Write Gallifreyan",
      "position": "2",
      "itemListElement": [
        {
          "@type": "HowToStep",
          "position": "1",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/guide/scg/words/cricle.scg",
              "text": "Add a circle with a border and no fill."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "This circle is going to be the basis for any letters you want to add to your word. It's called the 'word-circle'."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "2",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/howto/scg/w-stem.scg",
              "text": "Pull up the consonant table for Sherman's Circular Gallifreyan."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "You can find the table of consonants at https://gallifreyan.info/guide/scg in figure 2."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "3",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/howto/scg/w-stem.scg",
              "text": "Add the consonant stem at the bottom of the circle for the letter 'w'."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "The decoration doesn't have to touch the consonant stem. It just has to clearly belong to that stem once you're done with the whole word."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "4",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/guide/scg/words/who/w.scg",
              "text": "Add the decoration, if the letter requires it, to transform the stem into the actual letter."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "The decoration doesn't have to touch the consonant stem. It just has to clearly belong to that stem once you're done with the whole word."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "5",
          "itemListElement": [
            {
              "@type": "Add another ",
              "position": "1",
              "duringMedia": "img/guide/scg/words/who/wh2.scg",
              "text": "Repeat the last two steps for any other consonants by adding new modifications around the word circle in counter-clockwise direction."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "6",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/guide/scg/letters/vowels.scg",
              "text": "Pull up the vowels illustration for Sherman's Circular Gallifreyan."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "You can find the illustration at https://gallifreyan.info/guide/scg in figure 4."
            }
          ]
        },
        {
          "@type": "HowToStep",
          "position": "7",
          "itemListElement": [
            {
              "@type": "HowToDirection",
              "position": "1",
              "duringMedia": "img/guide/scg/words/who/who2.scg",
              "text": "Add the vowel."
            },
            {
              "@type": "HowToTip",
              "position": "2",
              "text": "You can either use the vowel in a way that attaches it to the previous consonant or it live on its own."
            }
          ]
        }
      ]
    }
  ]
}
</script>
`