import { fetchArticleContent } from '@/utils/fetchPages';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import parse, { domToReact } from 'html-react-parser';
import CustomErrorMessage from '@/components/CustomErrorMessage';
import { ArticleJsonLd } from 'next-seo';
import Image from 'next/image';

let data = null;

export async function generateMetadata({ params }) {
    try {
        data = await fetchArticleContent(params.category, params.slug);
        return {
            title: data.component_props.seo_title,
            description: data.component_props.search_description,
            metadataBase: new URL('https://krayasa.com'),
            alternates: {
                canonical: `/${params.category}/${params.slug}`,
            },
            openGraph: {
                title: data.component_props.seo.seo_og_title,
                description: data.component_props.seo.seo_og_description,
                type: 'article',
                locale: 'en_US',
                images: [
                    {
                        url: data.component_props.seo.seo_og_image,
                        width: 800,
                        height: 600,
                    },
                ],
            },
            // seo_og_url: data.component_props.seo.seo_og_url,
        };
    } catch (error) {
        console.error('Error fetching content', error);
    }
}

export default async function ArticleView({
    params,
}: {
    params: { category: string; slug: string };
}) {
    let data = null;
    try {
        data = await fetchArticleContent(params.category, params.slug);
    } catch (error) {
        // Handle the error here
        console.error('Error fetching article content:', error);
        // Optionally, you can set a default value for `data` or show an error message to the user
        data = null;
    }

    const options = {
        replace: (domNode) => {
            if (domNode.type === 'tag') {
                const { name, attribs, children } = domNode;
                switch (name) {
                    case 'h1':
                        return (
                            <h1 className="text-4xl font-bold">
                                {domToReact(children, options)}
                            </h1>
                        );
                    case 'h2':
                        return (
                            <h2 className="text-3xl font-bold my-7">
                                {domToReact(children, options)}
                            </h2>
                        );
                    case 'h3':
                        return (
                            <h3 className="text-2xl font-bold my-4">
                                {domToReact(children, options)}
                            </h3>
                        );
                    case 'h4':
                        return (
                            <h4 className="text-xl font-bold">
                                {domToReact(children, options)}
                            </h4>
                        );
                    case 'h5':
                        return (
                            <h5 className="text-lg font-bold">
                                {domToReact(children, options)}
                            </h5>
                        );
                    case 'h6':
                        return (
                            <h6 className="text-base font-bold">
                                {domToReact(children, options)}
                            </h6>
                        );
                    case 'p':
                        return (
                            <p className="my-4">
                                {domToReact(children, options)}
                            </p>
                        );
                    case 'ul':
                        return (
                            <ul className="list-disc pl-6 my-4">
                                {domToReact(children, options)}
                            </ul>
                        );
                    case 'ol':
                        return (
                            <ol className="list-decimal pl-6 my-4">
                                {domToReact(children, options)}
                            </ol>
                        );
                    case 'a':
                        return (
                            <a
                                className="text-blue-500 hover:underline"
                                {...attribs}>
                                {domToReact(children, options)}
                            </a>
                        );
                    case 'img':
                        return (
                            <img
                                className="max-w-full h-auto my-4"
                                {...attribs}
                            />
                        );
                    default:
                        return domToReact(children, options);
                }
            }
        },
    };

    let title = `<h1>${data?.component_props?.title}</h1>`;
    return (
        <section className="px-4 py-6 dark:bg-black dark:text-gray-50">
            {data ? (
                <div className="max-w-3xl mx-auto">
                    {parse(title, options)}
                    {data.component_props.body.map((item, index) => (
                        <div key={index}>{parse(item.value, options)}</div>
                    ))}
                    <Image
                        src="/dot.jpg"
                        alt="Krayasa E commerce platform"
                        height={1}
                        width={1}></Image>
                    <Image
                        src="/dot.jpg"
                        alt="Krayasa E commerce platform"
                        height={1}
                        width={1}></Image>
                    <Image
                        src="/dot.jpg"
                        alt="Krayasa E commerce platform"
                        height={1}
                        width={1}></Image>
                    <Image
                        src="/dot.jpg"
                        alt="Krayasa E commerce platform"
                        height={1}
                        width={1}></Image>
                    <Image
                        src="/dot.jpg"
                        alt="Krayasa E commerce platform"
                        height={1}
                        width={1}></Image>
                    <ArticleJsonLd
                        useAppDir={true}
                        type="BlogPosting"
                        url={`https://krayasa.com/${params.category}/${params.slug}`}
                        title={data.component_props.seo_title}
                        description={data.component_props.search_description}
                        images={[data.component_props.seo.seo_og_image]}
                        datePublished={data.component_props.last_published_at}
                        dateModified={data.component_props.last_published_at}
                        authorName="Aaraj Bhattarai"
                    />
                </div>
            ) : (
                <CustomErrorMessage message="Failed to load article" />
            )}
        </section>
    );
}
