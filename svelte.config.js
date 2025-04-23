import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Enable SPA mode with a fallback page for client-side routing
			fallback: 'index.html',
			// Don't be strict about prerendering
			strict: false
		}),
		// Remove the base path for Cloudflare Pages
		paths: {
			base: ''
		}
	}
};

export default config;
