import Image from 'next/image';
import { FadeIn, FadeInStagger } from '../FadeIn/FadeIn';
import {
    LogoCloudBlockFragment,
    LogoCloudSectionFragment,
} from '@/types/types';

export default function LogoCloud({ data }: LogoCloudSectionFragment) {
    // const countries = [
    //     ['U.A.E', uaeFlag],
    //     ['Malta', maltaFlag],
    //     ['Qatar', qatarFlag],
    //     ['Poland', polandFlag],
    //     ['Portugal', portugalFlag],
    //     ['Romania', romaniaFlag],
    //     ['Serbia', serbiaFlag],
    //     ['Slovania', slovaniaFlag],
    //     ['Kingdom of Saudi Arabia', ksaFlag],
    //     ['Malaysia', malaysiaFlag],
    //     ['Kuwait', kuwaitFlag],
    //     ['Japan', japanFlag],
    //     ['Bahrain', bahrainFlag],
    //     ['Bulgaria', bulgariaFlag],
    //     ['Croatia', croatiaFlag],
    //     ['Cyprus', cyprusFlag],
    //     ['Hungary', hungaryFlag],
    // ];
    return (
        <div className="px-3 py-24 lg:px-8 lg:py-32 bg-neutral-950">
            <div className="mx-auto px-10 lg:px-20">
                <FadeIn className="flex items-center gap-x-8">
                    <h2 className="text-center text-base text-slate-100 font-display font-semibold tracking-wider sm:text-left">
                        {data.description}
                    </h2>
                    <div className="h-px flex-auto bg-slate-100" />
                </FadeIn>
                <FadeInStagger faster>
                    <ul
                        role="list"
                        className="mt-5 grid grid-cols-3 justify-items-center gap-2 lg:grid-cols-5">
                        {data.countries.map(
                            (countries: LogoCloudBlockFragment) => (
                                <li key={countries.image?.id}>
                                    <FadeIn>
                                        <Image
                                            src={countries.image?.url}
                                            alt={countries.country}
                                            width={countries.image.width}
                                            height={countries.image.height}
                                        />
                                    </FadeIn>
                                </li>
                            )
                        )}
                    </ul>
                </FadeInStagger>
            </div>
        </div>
    );
}
