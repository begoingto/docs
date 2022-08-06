import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
		head: {
		  meta: [
			// <meta name="viewport" content="width=device-width, initial-scale=1">
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'msapplication-TileColor', content: '#ffffff' },
			{ name: 'msapplication-TileImage', content: 'ms-icon-144x144.png' },
			{ name: 'theme-color', content: '#ffffff' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },
			{ name: 'mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
			{ name: 'apple-mobile-web-app-title', content: 'black' },
		  ],
		  script: [
		  ],
		  link: [
			{ rel: 'manifest', href: 'manifest.json' },
			{ rel: 'apple-touch-icon', href: 'apple-touch-icon.png' },
			{ rel: 'apple-touch-icon', sizes:"57x57", href: 'apple-touch-icon-57x57.png' },
			{ rel: 'apple-touch-icon', sizes:"72x72", href: 'apple-touch-icon-72x72.png' },
			{ rel: 'apple-touch-icon', sizes:"76x76", href: 'apple-touch-icon-76x76.png' },
			{ rel: 'apple-touch-icon', sizes:"114x114", href: 'apple-touch-icon-114x114.png' },
			{ rel: 'apple-touch-icon', sizes:"120x120", href: 'apple-touch-icon-120x120.png' },
			{ rel: 'apple-touch-icon', sizes:"144x144", href: 'apple-touch-icon-144x144.png' },
			{ rel: 'apple-touch-icon', sizes:"152x152", href: 'apple-touch-icon-152x152.png' },
			{ rel: 'apple-touch-icon', sizes:"180x180", href: 'apple-touch-icon-180x180.png' },
			{ rel: 'icon',type: "image/png",sizes:"192x192", href: 'android-icon-192x192.png' },
			{ rel: 'icon',type: "image/png",sizes:"32x32", href: 'favicon-32x32.png' },
			{ rel: 'icon',type: "image/png",sizes:"96x96", href: 'favicon-96x96.png' },
			{ rel: 'icon',type: "image/png",sizes:"16x16", href: 'favicon-16x16.png' },
		  ],
		  style: [
			
		  ],
		  noscript: [
			{ children: 'Javascript is required' }
		  ]
		}
	  },
	modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
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
	}
});
