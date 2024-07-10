import { Inter } from 'next/font/google';
import { headers, draftMode } from 'next/headers';
import TanstackProvider from '../Providers/TanstackProvider';
import EmployerNavBar from '@/components/EmployerNavBar/EmployerNavBar';
import EmployeeNavBar from '@/components/EmployeeNavBar/EmployeeNavBar';

import {
    getPage,
    getPagePreview,
    getRedirect,
    getAllPages,
    WagtailApiResponseError,
} from '../api/wagtail';
import '../index.css';
import './globals.css';
import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { useRouter } from 'next/navigation';
import { auth } from '../auth';
import { Toaster } from '../components/Toaster/Toaster';

const navbarItems = {
    data: [
        {
            id: 1,
            attributes: {
                label: 'Home',
                slug: 'home',
                links: [
                    {
                        title: 'Sub Home 1',
                        slug: 'sub-home-1',
                    },
                    {
                        title: 'Sub Home 2',
                        slug: 'sub-home-2',
                    },
                ],
            },
        },

        {
            id: 2,
            attributes: {
                label: 'About',
                slug: 'about',
                links: [],
            },
        },
        {
            id: 3,
            attributes: {
                label: 'Contact',
                slug: 'contact',
                links: [],
            },
        },
        {
            id: 4,
            attributes: {
                label: 'Register',
                slug: 'register',
                links: [
                    {
                        title: 'Register as Employer',
                        slug: 'custom/auth/EmployerRegister',
                    },
                    {
                        title: 'Register as Employee',
                        slug: 'custom/auth/EmployeeRegister',
                    },
                ],
            },
        },
    ],
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children, ...props }) {
    const pathname = headers().get('x-pathname') || '';

    const session = await auth();

    return (
        <html lang="en">
            <meta
                httpEquiv="Content-Security-Policy"
                content="upgrade-insecure-requests"></meta>
            <body className={inter.className}>
                <TanstackProvider>
                {session ? (
                        session.user.role === "employee" ? (
                            <EmployeeNavBar user={session.user} />
                        ) : (
                            <EmployerNavBar user={session.user} />
                        )
                    ) : (
                        <Navbar />
                    )}                    

                    <div>{children}</div>
                    <Footer
                        logoUrl="/your-logo-url.png"
                        logoText="Your Company"
                        categoryLinks={[
                            {
                                id: 'Agriculture',
                                attributes: {
                                    name: 'Agriculture',
                                    slug: 'agriculture',
                                },
                            },
                            {
                                id: 'Construction',
                                attributes: {
                                    name: 'Construction',
                                    slug: 'construction',
                                },
                            },
                            {
                                id: 'HospitalityAndTourism',
                                attributes: {
                                    name: 'Hospitality And Tourism',
                                    slug: 'hospitality-and-tourism',
                                },
                            },
                            {
                                id: 'RetailAndConsumerGoods',
                                attributes: {
                                    name: 'Retail And Consumer Goods',
                                    slug: 'retail-and-customer',
                                },
                            },
                            {
                                id: 'TransportationAndLogistics',
                                attributes: {
                                    name: 'Transportation And Logistics',
                                    slug: 'logistics-and-transport',
                                },
                            },
                            {
                                id: 'FacilityManagementAndSupportService',
                                attributes: {
                                    name: 'Facility Management And Support Service',
                                    slug: 'facility-management-and-support-services',
                                },
                            },
                            // Add more category links as needed
                        ]}
                        menuLinks={[
                            {
                                id: 1,
                                url: 'https://www.google.com/maps/place/Consulate+of+Nepal/@38.7331008,-9.1655215,12.84z/data=!3m1!5s0xd19330b85cdc369:0xe1e437362d0cde5d!4m6!3m5!1s0xd19330b85d82249:0xbec37868022a98d4!8m2!3d38.7363539!4d-9.1507983!16s%2Fg%2F11dyrc2d7x?entry=ttu',
                                newTab: true,
                                text: 'Portugal',
                            },
                            {
                                id: 2,
                                url: 'https://www.google.com/maps/place/Embassy+of+Nepal/@51.5398161,-4.2482989,6.76z/data=!4m6!3m5!1s0x48760ff8fcf8f9c3:0x52d3d89659fc08e9!8m2!3d51.5074704!4d-0.1907566!16s%2Fm%2F0zm_3bh?entry=ttu',
                                newTab: true,
                                text: 'Poland',
                            },
                            {
                                id: 3,
                                url: 'https:/goo.gl/maps/XyJyEPSrpWQzrTzw9',
                                newTab: true,
                                text: 'Cyprus',
                            },
                            {
                                id: 4,
                                url: 'https://goo.gl/maps/9vEBuHH64qjsh6jGA', 
                                newTab: true,
                                text: 'Malta',
                            },
                            {
                                id: 5,
                                url: 'https://goo.gl/maps/NpDqkKqPM1NNm3uL6', 
                                newTab: true,
                                text: 'Croatia',
                            },
                            {
                                id: 6,
                                url: 'https://goo.gl/maps/XmZuqH7UJJoHVBFRA', 
                                newTab: true,
                                text: 'Slovenia',
                            },
                            {
                                id: 7,
                                url: 'https://goo.gl/maps/ZWNyXEwvowvFyDtRA', 
                                newTab: true,
                                text: 'Romania',
                            },
                            {
                                id: 8,
                                url: 'https://goo.gl/maps/7S7Zc9g7i8M4PCQw8', 
                                newTab: true,
                                text: 'Serbia',
                            },
                            {
                                id: 9,
                                url: 'https://goo.gl/maps/2cSz3Ht7ZKJ2', 
                                newTab: true,
                                text: 'Bulgaria',
                            },
                        ]}
                        legalLinks={[
                            {
                                id: 1,
                                url: 'https://www.iom.int/',
                                newTab: true,
                                text: 'International Migration Organization',
                            },

                            // Add more legal links as needed
                        ]}
                        socialLinks={[
                            {
                                id: 1,
                                url: 'https://facebook.com/yourpage',
                                newTab: true,
                                text: 'Facebook',
                                social: 'FACEBOOK',
                            },
                            {
                                id: 2,
                                url: 'https://twitter.com/youraccount',
                                newTab: true,
                                text: 'Twitter',
                                social: 'TWITTER',
                            },
                            {
                                id: 3,
                                url: 'https://linkedin.com/youraccount',
                                newTab: true,
                                text: 'Linkedin',
                                social: 'LINKEDIN',
                            },
                            {
                                id: 4,
                                url: 'https://youtube.com/youraccount',
                                newTab: true,
                                text: 'Youtube',
                                social: 'YOUTUBE',
                            },
                        ]}
                    />
                    <Toaster />
                </TanstackProvider>
            </body>
        </html>
    );
}
