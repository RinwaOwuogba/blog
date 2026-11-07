import { getCollection, render } from 'astro:content';
import { getImage } from 'astro:assets';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

// Feed readers and importers need absolute URLs, not site-relative ones.
const absolutize = (html, site) =>
	html.replace(/(src|href)="\/(?!\/)/g, `$1="${new URL('/', site).href}`);

export async function GET(context) {
	const container = await AstroContainer.create();
	const posts = (await getCollection('blog'))
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

	const items = await Promise.all(
		posts.map(async (post) => {
			const { Content } = await render(post);
			let html = await container.renderToString(Content);
			if (post.data.heroImage) {
				// JPEG at a capped width keeps the file small (a PNG cover reached 28 MB, over Cloudflare Pages' 25 MiB limit).
				const hero = await getImage({ src: post.data.heroImage, format: 'jpg', width: 1200 });
				html = `<img src="${hero.src}" alt="" />${html}`;
			}
			return {
				title: post.data.title,
				description: post.data.description,
				pubDate: post.data.pubDate,
				link: `/blog/${post.id}/`,
				content: absolutize(html, context.site),
			};
		}),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
