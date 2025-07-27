import { config } from "$lib/config";
import { getPosts } from "$lib/utils";

export const prerender = true;

export async function GET() {

    const posts = await getPosts();

	return new Response(
		`
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			<url>
                <loc>${config.location}</loc>
            </url>
            <url>
                <loc>${config.location}/about</loc>
            </url>
            <url>
                <loc>${config.location}/our-work</loc>
            </url>
            <url>
                <loc>${config.location}/get-involved</loc>
            </url>
            <url>
                <loc>${config.location}/donate</loc>
            </url>
            <url>
                <loc>${config.location}/fite</loc>
            </url>
            <url>
                <loc>${config.location}/blog</loc>
            </url>
            ${posts.map(post => 
                `
                <url>
                    <loc>${config.location}/blog/${post.slug}</loc>
                </url>
                `
            )}
		</urlset>`.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}

