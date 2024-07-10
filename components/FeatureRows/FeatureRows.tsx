import Image from 'next/image';
import { FadeIn, FadeInStagger } from '../FadeIn/FadeIn';
import {
    FeatureRowSectionFragment,
    FeatureBlockFragment,
} from '../../types/types_old';

export default function FeatureRow({ data }: FeatureRowSectionFragment) {
    const imgUrl = data.image?.url;

    return (
        <div className="lg:py-24 lg:px-20 py-10 px-10">
            <FadeIn className="max-w-8xl mx-auto lg:flex lg:gap-5 gap-10 lg:flex-row lg:justify-between lg:items-center">
                <div className="mx-auto align-center max-w-xl">
                    <div className="mx-auto max-w-5xl sm:text-center">
                        <h2 className="mt-30 text-base text-center font-semibold leading-7">
                            {data.heading}
                        </h2>

                        <p className="mt-2 text-3xl text-center font-bold tracking-tight sm:text-4xl">
                            {data.description}
                        </p>

                        <p className="mt-6 text-lg text-justify leading-8">
                            {data.longdescription}
                        </p>
                    </div>
                </div>
                <div className="relative mt-10 overflow-hidden">
                    <div className="mx-auto max-w-5xl px-6 lg:px-8">
                        <Image
                            src={imgUrl}
                            // src={data.image.file}
                            alt={
                                data.image?.title ??
                                'SpeedWings Human Resource- Best Recruitment agency for blue collar manpower supply in Middle East and Europe'
                            }
                            className="rounded-xl"
                            width={data.image?.width}
                            height={data.image?.height}
                        />
                    </div>
                </div>
            </FadeIn>

            {data && (
                <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                    <FadeInStagger>
                        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-6 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-10 lg:gap-y-10">
                            {data.features?.map(
                                (
                                    feature: FeatureBlockFragment,
                                    index: number
                                ) => (
                                    <FadeIn
                                        key={index}
                                        className="relative flex flex-col rounded-2xl p-5 bg-neutral-50 shadow-md dark:bg-gray-800">
                                        <dt className="text-left font-semibold dark:text-slate-50 ">
                                            <Image
                                                src={feature.image?.url}
                                                // src={feature.image.file}
                                                alt={
                                                    feature.image?.title ??
                                                    'SpeedWings Human Resource- Best Recruitment agency for blue collar manpower supply'
                                                }
                                                className="left-1 top-1 h-13 w-13 mb-2 "
                                                width={data.image?.width}
                                                height={data.image?.height}
                                            />
                                            {feature.heading}
                                        </dt>
                                        <dd className="mt-1 text-base text-justify leading-7 text-gray-400">
                                            {feature.description}
                                        </dd>
                                    </FadeIn>
                                )
                            )}
                        </dl>
                    </FadeInStagger>
                </div>
            )}
        </div>
    );
}
