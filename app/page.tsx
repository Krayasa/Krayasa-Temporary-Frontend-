import React from 'react';
import { sectionRenderer } from '@/utils/sectionRenderer';
import { fetchHomeContent, fetchPageContent } from '@/utils/fetchPages';
import Link from 'next/link';
import CustomErrorMessage from '@/components/CustomErrorMessage';
import { Metadata } from 'next';

var contentSections;

export async function generateMetadata() {
    try {
        contentSections = await fetchHomeContent();
        return {
            title: contentSections.component_props.seo_title,
            description: contentSections.component_props.search_description,
            metadataBase: new URL('https://krayasa.com'),
            alternates: {
                canonical: '/',
            },
            openGraph: {
                title: contentSections.component_props.seo.seo_og_title,
                description:
                    contentSections.component_props.seo.seo_og_description,
                type: 'website',
                locale: 'en_US',
                images: [
                    {
                        url: contentSections.component_props.seo.seo_og_image,
                        width: 800,
                        height: 600,
                    },
                ],
            },
            // seo_og_url: contentSections.component_props.seo.seo_og_url,
        };
    } catch (error) {
        console.error('Error fetching content', error);
    }
}

// export const metadata: Metadata = {
//     title: 'SpeedwingHR',
//     description: `${contentSections?.seo?.seo_meta_description}`,
// };

const CatchingAllPage = async () => {
    try {
        contentSections = await fetchHomeContent();
        return (
            <div className="">
                {contentSections.component_props.body.map((section, index) =>
                    sectionRenderer(contentSections, section, index)
                )}
            </div>
        );
    } catch (error) {
        return <CustomErrorMessage message={error.message} />;
    }
};

export default CatchingAllPage;
