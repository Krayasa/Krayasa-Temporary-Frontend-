import { fetchArticleContent } from '@/utils/fetchPages';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import parse, { domToReact } from 'html-react-parser';
import CustomErrorMessage from '@/components/CustomErrorMessage';

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

    console.log(data.component_props.body);

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
                </div>
            ) : (
                <CustomErrorMessage message="Failed to load article" />
            )}
        </section>
    );
}
