import { getPosts } from '$lib/postUtils';
import {config} from '$lib/config';
import type { PostMetadata } from '$lib/types';

export const prerender = true;


function getItemsForPost(post: PostMetadata)
{
    const values = ['<item>'];
    values.push(`<title>${post.title}</title>`);
    values.push(`<link href="${config.location}/blog/${post.slug}/"/>`);
    values.push(`<id>${config.location}/blog/${post.slug}/</id>`);
    if(post.date)
    {
        values.push(`<updated>${new Date(post.date).toISOString()}</updated>`);
        values.push(`<published>${new Date(post.date).toISOString()}</published>`);
    }
    values.push('</item>');
    return values.join('\n');
}

export async function GET() {
	const posts = getPosts();
	return new Response(
		`
        <?xml version="1.0" encoding="utf-8"?>
        <rss version="2.0" xmlns="http://www.w3.org/2005/Atom">
            <channel>
                <title>${config.title}</title>
                <link href="${config.location}"/>
                <link href="${config.location}/rss.xml" rel="self"/>
                <description>${config.description}</description>
                <updated>${(new Date()).toISOString()}</updated>
                <author>
                    <name>Baton Rouge DSA</name>
                </author>
                <managingEditor>${config.email}</managingEditor>
                <webMaster>${config.email}</webMaster>
                <generator>JavaScript</generator>             
            ${posts.map((post) => getItemsForPost(post)).join('\n')}
            </channel>
        </rss>
        `.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}
