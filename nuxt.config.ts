import { defineNuxtConfig } from "nuxt";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:image', content: 'https://www.begoingto.me/preview.jpg' },
        { property: 'twitter:image', content: 'https://www.begoingto.me/preview.jpg' },
      ],
      link: [
        { rel:'manifest', href: 'https://www.begoingto.me/manifest.json' }
      ],
      
      noscript: [
        { children: 'Javascript is required' }
      ]
    }
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-seo"],
  seo: {
    baseUrl: "https://www.begoingto.me",
    name: "ប៊ីហ្គូអុីងធូ-begoingto",
    title: "<title default>",
    templateTitle: "%name% - %title%",
    description: "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។",
    keywords: 'be-going-to, be going to, begoingto, begoingto.me, ប៊ីហ្គូអុីងធូ-begoingto, begoingto me',
    canonical: "auto",
    isForcedTrailingSlash: false,
	  author: 'Begoingto Me',
    openGraph: {
      image: {
        url: "https://www.begoingto.me/preview.jpg",
        alt: "ប៊ីហ្គូអុីងធូ",
      },
      twitter: {
        site: "@begoingtoMe",
        creator: "@begoingtoMe",
        card: "summary",
        type: "blog",
        title: "ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ",
        description:
          "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។",
      },
      facebook: {
        appId: '1059423371454203',
        pageId: '273531340257037' 
      },
    },
  },
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
});
