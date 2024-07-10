import React from 'react';
import JobView from '@/components/JobView/JobView';
import MobileJobView from '@/components/MobileJobView';
import { JobsFetch } from '@/utils/ApplyJobsAPI';

// interface CustomSession {
//     user: { email: string; role: string };
//     expires: string;
//     sessionToken: string;
// }

// fetchJobsDeets();

export default async function JobViews() {
    const viewData = await JobsFetch();
    return (
        <>
            <div className="hidden md:block lg:py-24 lg:px-20 py-10 px-10 ">
                <JobView jobs={viewData} />
            </div>

            <div className="block lg:hidden">
                <MobileJobView jobs={viewData} />
            </div>
        </>
    );
}
