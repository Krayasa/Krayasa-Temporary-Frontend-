import React from 'react';
import { sectionRenderer } from '@/utils/sectionRenderer';
import { fetchHomeContent, fetchPageContent } from '@/utils/fetchPages';
import Link from 'next/link';
import CustomErrorMessage from '@/components/CustomErrorMessage';


const CatchingAllPage = async ({ params }) => {
    try {
        let contentSections;

        if (!params || !params.category) {
            contentSections = await fetchHomeContent();
        } else {
            contentSections = await fetchPageContent(params.category);
        }

        return (
            <div className="">
                {contentSections.component_props.body.map((section, index) =>
                    sectionRenderer(contentSections, section, index)
                )}
            </div>
        );
    } catch (error) {
        return(
            <CustomErrorMessage message={error.message}/>
        )
    }
};

export default CatchingAllPage;
