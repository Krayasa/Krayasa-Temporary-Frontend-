import Link from 'next/link';
import Image from 'next/image';
import { FadeIn, FadeInStagger } from '../FadeIn/FadeIn';
import {
    FeatureSectionFragment,
    FeatureBlockFragment,
} from '../../types/types_old';

export default function Features({ data }: FeatureSectionFragment) {
    const imgUrl = data.image?.url;
    return (
        <div className="dark:bg-gray-900 lg:px-32 py-10 px-5">
            <div className="rounded-2xl dark:bg-gray-900  text-sm leading-6 mx-auto max-w-8xl lg:px-8 flex items-center">
                <div className=" grid  grid-cols-1 gap-x-10 content-center lg:grid-cols-3">
                    <div className="flex justify-center h-full">
                        <h2 className="font-bold text-black tracking-normal text-center text-4xl my-auto">
                            {data.heading}
                        </h2>
                    </div>

                    <dl className="col-span-2  grid grid-cols-1 gap-x-16 gap-y-16 sm:grid-cols-2">
                        {data.features?.map(
                            (feature: FeatureBlockFragment, index: number) => (
                                <FadeIn
                                    key={index}
                                    className="rounded-2xl p-4 bg-neutral-50 shadow-md dark:bg-gray-800">
                                    <dt className="text-base font-semibold leading-7 dark:text-slate-50 ">
                                        <div className="mb-4 mt-5 flex h-50 w-50 items-center justify-center">
                                            <Image
                                                // src={feature.image.file}
                                                src={feature.image?.url}
                                                alt={
                                                    feature.image?.title ??
                                                    'Speed Wings Human Resource'
                                                }
                                                width={feature.image?.width}
                                                height={feature.image?.height}
                                                className="h-100 w-100 mt-10"
                                            />
                                        </div>
                                        {feature.heading}
                                    </dt>
                                    <dd className="mt-1 text-base text-justify leading-7 dark:text-gray-400">
                                        {feature.description}
                                    </dd>
                                    {/* {feature.button?.link &&
                                    feature.button?.text && (
                                        <p className="mt-6">
                                            <Link
                                                href={`${feature.button.link}`}
                                                className="text-sm font-semibold leading-6 text-blue-400">
                                                {feature.button.text}{' '}
                                                <span aria-hidden="true">
                                                    →
                                                </span>
                                            </Link>
                                        </p>
                                    )} */}
                                </FadeIn>
                            )
                        )}
                    </dl>
                </div>
            </div>
        </div>
    );
}
