'use client';

import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { FAQPageJsonLd } from 'next-seo';
import { FadeIn, FadeInStagger } from '../FadeIn/FadeIn';
import { FaqSectionFragment, FaqBlockFragment } from '../../types/types_old';

export default function Pricing({ data }: FaqSectionFragment) {
    let questionAnswer: any[] = [];
    const mainEntity = data.faqs?.map((faq) => {
        questionAnswer.push({
            questionName: faq?.question,
            acceptedAnswerText: faq?.answer,
        });
        return questionAnswer;
    });
    return (
        <>
            <FAQPageJsonLd mainEntity={questionAnswer} />

            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-15">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <FadeIn>
                        <h2 className="leading-10 text-4xl font-semibold text-center dark:text-white">
                            {data.heading}
                        </h2>
                    </FadeIn>
                    <dl className="mt-10 space-y-6 divide-y dark:divide-orange/400">
                        {data.faqs?.map((faq, index: number) => (
                            <FadeInStagger key={index}>
                                <Disclosure as="div" className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <dl>
                                                <FadeIn>
                                                    <dt>
                                                        <Disclosure.Button className="flex w-full items-start justify-between text-left dark:text-white">
                                                            <span className="text-base font-semibold leading-7">
                                                                {faq?.question}
                                                            </span>
                                                            <span className="ml-6 flex h-7 items-center">
                                                                {open ? (
                                                                    <MinusSmallIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                ) : (
                                                                    <PlusSmallIcon
                                                                        className="h-6 w-6"
                                                                        aria-hidden="true"
                                                                    />
                                                                )}
                                                            </span>
                                                        </Disclosure.Button>
                                                    </dt>
                                                    <Disclosure.Panel
                                                        as="dd"
                                                        className="mt-2 pr-12">
                                                        <dd className="text-base leading-7 text-gray-700">
                                                            {faq?.answer}
                                                        </dd>
                                                    </Disclosure.Panel>
                                                </FadeIn>
                                            </dl>
                                        </>
                                    )}
                                </Disclosure>
                            </FadeInStagger>
                        ))}
                    </dl>
                </div>
            </div>
        </>
    );
}
