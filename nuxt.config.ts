import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head({ $seo }) {
    return $seo({
      openGraph: {
        image: {
          url: "https://www.begoingto.me/og-image.jpg",
          alt: "ប៊ីហ្គូអុីងធូ",
        },
      },
    });
  },
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "nuxt-seo"],
  seo: {
    baseUrl: 'https://begoingto.me',
    name: 'ប៊ីហ្គូអុីងធូ-begoingto',
    templateTitle: '%name% — %title%',
    description: "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។",
    keywords: 'be-going-to, be going to, begoingto, begoingto.me, ប៊ីហ្គូអុីងធូ-begoingto, begoingto me',
    canonical: 'auto',
    isForcedTrailingSlash: false,
    author: 'Begoingto Me',
    twitter: { 
      site: '@begoingtoMe', 
      creator: '@begoingtoMe',
      card: 'summary',
      type: "blog",
      title: "ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ",
      description:
          "សូមស្វាគមន៍មកាន់វេបសាយ ប៊ីហ្គូអុីងធូ ចែករំលែក-មេរៀន-ស្រាវជ្រាវ-និងចំណេះដឹងថ្មីៗ ជាការជួយលើស្ទួយដល់ភាសាជាតិយើងបានបញ្ចូលអត្ថបទជាភាសាខ្មែរ ដើម្បីឲ្យយុវជន ក្មេងៗ សិស្សានុសិស្ស ប្អូនៗ ដែលខ្សោយខាងផ្នែកភាសាអង់គ្លេសងាយយល់ និងផ្ដល់ជាគ្រឹះមូលដ្ឋាន។",
    },
  },
  /*seo: {
    baseUrl: "https://www.begoingto.me",
    name: "ប៊ីហ្គូអុីងធូ-begoingto",
    title: "<title default>",
    templateTitle: "%name% - %title%",
    description: "<description default>",
    keywords:
      "be-going-to be going to begoingto begoingto.me ប៊ីហ្គូអុីងធូ-begoingto begoingto me",
    canonical: "auto",
    isForcedTrailingSlash: false,
	  author: 'Begoingto Me',
	// openGraph.image: {
	// 	  url: 'https://frostbutter.com/img/nick.jpg',
	// 	},
    openGraph: {
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
  },*/
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
