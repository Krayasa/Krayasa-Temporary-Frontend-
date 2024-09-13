import Link from 'next/link';
import Image from 'next/image';
import { fetchChildrenContent } from '@/utils/fetchPages';
import CustomErrorMessage from '@/components/CustomErrorMessage/CustomErrorMessage';

export default async function ArticleList({ data, category, slug }) {
    const imgDefault = process.env.DEFAULT_ARTICLE_IMAGE_LINK;

    let articles;
    try {
        console.log('slug:', slug);
        articles = await fetchChildrenContent(slug);
        console.log('-------------------------------------------');
        console.log('articles:', articles);
    } catch (error) {
        console.error('Error fetching articles:', error);

    }
    return (
        <>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="font-bold tracking-tight text-4xl">
                            {data.heading}
                        </h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">
                            {data.description}
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {articles?.map((article, index: number) => (
                            <article
                                key={index}
                                className="flex flex-col items-start justify-between">
                                <Link
                                    href={`/${slug}/${article.slug}`}
                                    className="relative z-10 rounded-2xl bg-gray-50 dark:bg-gray-900 p-5 font-medium dark:text-gray-400 ">
                                    {/* <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" /> */}
                                    <div className="relative w-full">
                                        <Image
                                            //   src={article.image.file}
                                            src={
                                                article.seo_image || imgDefault
                                            }
                                            alt={
                                                article.title ||
                                                'Krayasa E commerce platform'
                                            }
                                            width={500}
                                            height={300}
                                            className="aspect-[16/9] w-full object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <div className="mt-8 flex items-center gap-x-4 text-xs">
                                            <h3 className="relativ text-sm e z-10 r.ounded-full px-3 py-1.5 font-medium hover:bg-gray-100">
                                                {category}
                                            </h3>
                                        </div>
                                        <div className="group relative">
                                            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900  group-hover:text-sky-600 dark:text-orange-400">
                                                <span className="absolute inset-0" />
                                                {article.title}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
