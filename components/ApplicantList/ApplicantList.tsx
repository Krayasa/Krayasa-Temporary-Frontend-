import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';
// import { Card, CardContent } from '../Card/Card';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from '../DropDownMenu/DropDownMenu';
import { FadeIn } from '../FadeIn/FadeIn';

interface ApplicantListProps {
    token: string;
    apiLink: string;
}

interface Applicant {
    id: number;
    status: string;
    job: {
        title: string;
    };
    applied_user: {
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        date_joined: string;
    };
}

export default async function ApplicantList({
    token,
    apiLink,
}: ApplicantListProps) {
    const fetchApplicationDeets = async () => {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/` + apiLink,

                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching applicants', error);
        }
    };

    const applicants = await fetchApplicationDeets();
    console.log(applicants);

    return (
        <div className="d">
            <div className=" mx-auto py-12 px-4 md:px-6 lg:px-32">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">Applicants</h1>
                    <div className="flex items-center gap-4">
                        <Button variant="outline">
                            <FilterIcon className="w-5 h-5 mr-2" />
                            Filter
                        </Button>
                        <Button variant="default">
                            <PlusIcon className="w-5 h-5 mr-2" />
                            Add Applicant
                        </Button>
                    </div>
                </div>
                <div className="grid gap-8">
                    {applicants.map((applicant, index: number) => (
                        <div
                            key={index}
                            className=" bg-stone-50 dark:bg-gray-950  rounded-lg shadow-md overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                                <div className="flex-shrink-0">
                                    <img
                                        alt="Applicant Avatar"
                                        className="rounded-full"
                                        height={80}
                                        src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                                        style={{
                                            aspectRatio: '80/80',
                                            objectFit: 'cover',
                                        }}
                                        width={80}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl font-semibold">
                                            {applicant.applied_user.first_name}
                                            {applicant.applied_user.last_name}
                                        </h3>
                                        <Badge
                                            className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                                            variant="outline">
                                            {applicant.status}
                                        </Badge>
                                    </div>
                                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                                        {applicant.job.title}
                                    </p>

                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-2">
                                        <MailIcon className="w-4 h-4" />
                                        <span>
                                            {applicant.applied_user.email}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                                        <CalendarIcon className="w-4 h-4" />
                                        <span>
                                            This is date joined:
                                            {applicant.applied_user.date_joined}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row items-end md:items-center">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <MoreHorizontalIcon className="w-5 h-5" />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            className="bg-white w-64  justify-center"
                                            align="center">
                                            <DropdownMenuItem className=" justify-center ">
                                                <Badge className="mr-2 w-full  lg:hover:bg-stone-50 bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                                                    Accepted
                                                </Badge>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Badge className="mr-2 w-full lg:hover:bg-stone-50 bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400">
                                                    Pending
                                                </Badge>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Badge className="mr-2 w-full lg:hover:bg-stone-50 bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400">
                                                    Rejected
                                                </Badge>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function CalendarIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
    );
}

function FilterIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
    );
}

function MailIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function MoreHorizontalIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
        </svg>
    );
}

function PlusIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    );
}
