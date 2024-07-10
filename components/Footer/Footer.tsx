'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import classNames from 'classnames';

import {
    AiFillFacebook,
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiFillYoutube,
} from 'react-icons/ai';
import Logo from '../Logo/Logo';

import LinkedInAnalytics from '../LinkedInAnalytics/LinkedInAnalytics';

interface FooterLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
    social?: string;
}

interface LegalLink {
    id: number;
    url: string;
    newTab: boolean;
    text: string;
}

interface CategoryLink {
    id: string;
    attributes: {
        name: string;
        slug: string;
    };
}

function FooterLink({ url, text }: FooterLink) {
    const path = usePathname();
    return (
        <li className="flex">
            <Link
                href={`/${url}`}
                className={`hover:dark:text-sky-400 ${
                    path === url && 'dark:text-sky-400 dark:border-sky-400'
                }}`}>
                {text}
            </Link>
        </li>
    );
}

function CategoryLink({ attributes }: CategoryLink) {
    return (
        <li className="flex">
            <Link
                href={`/${attributes.slug}`}
                className="text-md text-gray-900 leading-6 hover:text-sky-400">
                {attributes.name}
            </Link>
        </li>
    );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
    switch (social) {
        case 'TWITTER':
            return <AiFillTwitterCircle className="h-8 w-8" />;
        case 'YOUTUBE':
            return <AiFillYoutube className="h-8 w-8" />;
        case 'LINKEDIN':
            return <AiFillLinkedin className="h-8 w-8" />;
        case 'FACEBOOK':
            return <AiFillFacebook className="h-8 w-8" />;

        default:
            return null;
    }
}

export default function Footer({
    logoUrl,
    logoText,
    menuLinks,
    categoryLinks,
    legalLinks,
    socialLinks,
}: {
    logoUrl: string | null;
    logoText: string | null;
    menuLinks: Array<FooterLink>;
    categoryLinks: Array<CategoryLink>;
    legalLinks: Array<FooterLink>;
    socialLinks: Array<FooterLink>;
}) {
    return (
        <footer className="bg-zinc-50 text-gray-900 dark:text-white dark:bg-gray-900">
            <LinkedInAnalytics partnerId="5257964" />
            <div className=" lg:px-44 px-5 w-auto py-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="space-y-6">
                        <Logo src="public/img/logo.svg" />
                        <p className="text-md leading-6">
                            Bridging Talent to Opportunity: Let's Write Your
                            Success Story!
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    title={link.text}
                                    target={link.newTab ? '_blank' : '_self'}
                                    rel="noopener noreferrer"
                                    className="hover:text-sky-400 h-5 w-5 ">
                                    <RenderSocialIcon social={link.social} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="lg:ml-16">
                        <div className="mt-8 md:mt-0">
                            <h4 className="text-lg font-semibold">
                                Sectors we serve
                            </h4>

                            <ul role="list" className="mt-6 space-y-4">
                                {categoryLinks.map((link: CategoryLink) => (
                                    <CategoryLink key={link.id} {...link} />
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="mt-8 md:mt-0">
                            <h4 className="text-lg font-semibold">
                                Legal link
                            </h4>

                            <ul role="list" className="mt-6  space-y-4">
                                {legalLinks.map((item: LegalLink) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.url}
                                            className="text-md leading-6 dark:text-gray-300 hover:text-sky-400 dark:text-white-400">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <h4 className=" text-lg font-semibold">
                                Nepalese Embassies in Europe
                            </h4>

                            <ul role="list" className="mt-3  space-y-4">
                                {menuLinks.map((item: FooterLink) => (
                                    <li key={item.id}>
                                        <Link
                                            href={item.url}
                                            className="text-md leading-6 dark:text-gray-300 hover:text-sky-400 dark:text-white-400">
                                            {item.text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dark:bg-gray-800 bg-gray-300 text-gray-800 w-full">
                <div className=" py-5 text-md  text-center">
                    © {new Date().getFullYear()} Speed Wings Human Resource.
                    All rights reserved.
                </div>
            </div>
        </footer>
    );
}
