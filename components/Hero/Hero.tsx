import Link from 'next/link';
import Image from 'next/image';

import { FadeIn } from '../FadeIn/FadeIn';
//  import { FadeIn, FadeInStagger } from "./FadeIn";
import { HeroSectionFragment } from '../../types/types_old';
import { Button } from '../Button/Button';
// import CreateJobForm from '../CreateJob/CreateJob';

interface HeroProps {
    data: HeroSectionFragment;
    // session: any;
}

export default function Hero({ data }: HeroProps) {
    const imgUrl = data?.image?.url;
    const alternativeText = data?.image?.title;

    return (
        <>
            {/* {session?.user?.role == 'employer' ? (
                <CreateJobForm token={''} />
            ) : ( */}
            <div className="py-24 px-10 relative  overflow-hidden lg:px-0">
                <Image
                    src={imgUrl}
                    alt={
                        alternativeText ??
                        'SpeedWings Human Resource- Best Recruitment agency for blue collar jobs'
                    }
                    className="absolute inset-0 -z-10 h-full w-full object-cover "
                    width="1920"
                    height="1080"
                    priority
                />
                {(data?.heading?.length ?? 0) > 1 && (
                    <div
                        className="absolute inset-x-0 top-10 -z-10 transform-gpu overflow-hidden sm:-top-80"
                        aria-hidden="true">
                        <div className="relative right-[calc(10%)] aspect-[1000/1090] opacity-80 bg-gradient-to-r from-black via-gray-600 to-transparent" />
                    </div>
                )}

                <div className="mx-baseline max-w-3xl py-42 sm:py-48 lg:py-56 lg:ml-40">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
                    {/* {data?.title.length>1 && ( */}
                    <FadeIn>
                        <div className="text-center">
                            <h1 className="text-3xl font-bold leading-8 tracking-wide text-left lg:text-5xl text-orange-500">
                                {data?.heading}
                            </h1>
                            <p className="mt-6 text-lg text-left leading-8 text-gray-300 lg:text-3xl">
                                {data?.description}
                            </p>
                        </div>

                        <FadeIn>
                            <Link href="">
                                <Button
                                    className="mt-10 ml-2 text-white hover:bg-blue-400 bg-blue-500"
                                    variant="default"
                                    size="lg">
                                    {data?.button?.text}
                                    {/* Hello */}
                                </Button>
                            </Link>
                        </FadeIn>
                    </FadeIn>
                </div>
            </div>
            {/* )} */}
        </>
    );
}
