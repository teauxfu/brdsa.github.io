import { getPosts } from '$lib/utils';
import {config} from '$lib/config';

export async function GET() {
	const posts = await getPosts();
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
            ${posts
                .map(
                (post) => `<item>
                    <title>${post.title}</title>
                    <link href="${config.location}/blog/${post.slug}/"/>
                    <id>${config.location}/blog/${post.slug}/</id>
                    <updated>${new Date(post.date).toISOString()}</updated>
                    <published>${new Date(post.date).toISOString()}</published>
                </item>`
                )
                .join('\n')}
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
