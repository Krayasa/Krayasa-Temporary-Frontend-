import EmployeeProfile from '@/components/EmployeeProfile/EmployeeProfile';
import React from 'react';
import { auth } from '@/auth';

interface CustomSession {
    user: { email: string; role: string };
    expires: string;
    sessionToken: string;
}

export default async function JobViews() {
    const session = await auth();

    return <EmployeeProfile token={(session as CustomSession)?.sessionToken} />;
}
