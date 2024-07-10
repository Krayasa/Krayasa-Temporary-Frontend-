import ApplicantList from '@/components/ApplicantList/ApplicantList';
import React from 'react';
import { auth } from '../../../../auth';

interface CustomSession {
    expires: string;
    sessionToken: string;
}

export default async function ApplicantListView() {
    const session = await auth();

    return (
        <ApplicantList
            token={(session as CustomSession)?.sessionToken}
            apiLink="employer/applicants/"
        />
    );
}
