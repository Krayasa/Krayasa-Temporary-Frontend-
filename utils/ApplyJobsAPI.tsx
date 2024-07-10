'use server';

import { auth } from '@/auth';
import Swal from 'sweetalert2';

interface CustomSession {
    user: { email: string; role: string };
    expires: string;
    sessionToken: string;
}

const ApplyJobClick = async (job_id: number) => {
    try {
        const session = await auth();

        const token = (session as CustomSession)?.sessionToken;
        const role = (session as CustomSession)?.user.role;

        if (!session) {
            throw new Error('No Session');
        } else if (session && role === 'employee') {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/applied-for-job/${job_id}/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const check = await res.json();
            if (check.is_applied) {
                throw new Error('Already Applied');
            } else {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/apply-job/${job_id}/`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${token}`,
                        },
                        body: JSON.stringify({ job: job_id }),
                    }
                );

                if (!response.ok) {
                    throw new Error('Failed to apply');
                }
                const data = await response.json();
                console.log('Applied data:', data);

                return 'applied';
            }
        } else {
            throw new Error('Not an Employee');
        }
    } catch (error) {
        console.error('Error applying for jobs');
        return `${error.message}`;
    }
};

const JobsFetch = async () => {
    try {
        const session = await auth();
        const token = (session as CustomSession)?.sessionToken;
        const role = (session as CustomSession)?.user.role;

        let response;

        if (!session || role === 'employee') {
            response = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/jobs/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
        } else {
            response = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/employer/dashboard/`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
        }

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data', error);
    }
};

export { ApplyJobClick, JobsFetch };
