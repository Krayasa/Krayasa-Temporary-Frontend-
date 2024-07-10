'use client';

import Link from 'next/link';
import { Button } from '../Button/Button';

import { FadeIn } from '../FadeIn/FadeIn';
import { JobsFetch } from '@/utils/ApplyJobsAPI';

import {
    DrawerTrigger,
    DrawerTitle,
    DrawerDescription,
    DrawerHeader,
    DrawerClose,
    DrawerFooter,
    DrawerContent,
    Drawer,
} from '../Drawer/Drawer';

import { ApplyJobClick } from '@/utils/ApplyJobsAPI';

import { useState } from 'react';
import { JobViewProps } from '@/types/types_old';
import CustomErrorMessage from '@/components/CustomErrorMessage/CustomErrorMessage';
import Swal from 'sweetalert2';

// const result_per_page = 6;
// let offset = 0;

// const nextPage = async (totalJobs) => {
//     if (offset < totalJobs) {
//         offset += result_per_page;
//     }
// };

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
});

const checkApply = async (job_id: number) => {
    const res = await ApplyJobClick(job_id);

    if (res === 'No Session') {
        Toast.fire({
            icon: 'error',
            title: 'Login First!',
            text: 'You need to log in first to apply for jobs',
        });
    } else if (res === 'Already Applied') {
        Toast.fire({
            icon: 'error',
            title: 'Already Applied',
            text: "You've already applied for this job",
        });
    } else if (res === 'Not an Employee') {
        Toast.fire({
            title: 'You are not an Employee',
            text: 'You need to be logged in as an Employee to apply for jobs',
            icon: 'error',
        });
    } else if (res === 'applied') {
        Toast.fire({
            title: 'Applied! 12345',
            text: 'You have applied for the job.',
            icon: 'success',
        });
    } else {
        Toast.fire({
            title: 'Error',
            text: 'There was an error applying for the job',
            icon: 'error',
        });
    }
};

export default function JobView({jobs}:JobViewProps) {
    return (
        <>
            {jobs ? (
                <div className="div">
                    <div className="lg:px-32 p-4 md:p-6">
                        <p className="font-bold text-black tracking-normal text-3xl text-center">
                            Search Jobs
                        </p>
                        <p className="text-center mt-2 mb-6 text-lg leading-8 text-gray-600">
                            Explore available opportunities tailored to your
                            skills and preferences. Find your next career move
                            with ease.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 gap-10">
                        {jobs.map((jobData) => (
                            <FadeIn key={jobData.id}>
                                <div className="bg-stone-100 p-2 border border-white hover:border-blue-400 hover:border-solid rounded-lg overflow-hidden dark:bg-gray-950">
                                    <Link
                                        className="block relative group"
                                        href="#">
                                        <img
                                            alt="Job Cover"
                                            className="w-full h-48 object-cover group-hover:opacity-80 rounded-md transition-opacity"
                                            height={400}
                                            src="http://static.vecteezy.com/system/resources/previews/006/418/714/original/flat-design-job-vacancy-background-we-are-hiring-recruitment-illustration-with-silhouette-of-businessman-free-vector.jpg"
                                            style={{
                                                aspectRatio: '600/400',
                                                objectFit: 'cover',
                                            }}
                                            width={600}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                            <h3 className="text-lg text-white font-semibold">
                                                {jobData.title}
                                            </h3>
                                            <p className="text-sm">
                                                {jobData.company_name}
                                            </p>
                                        </div>
                                    </Link>
                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <LocateIcon className="w-4 h-4" />
                                                <span>{jobData.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <BriefcaseIcon className="w-4 h-4" />
                                                <span>{jobData.type}</span>
                                            </div>
                                        </div>
                                        <h4 className="text-lg text-gray-600 font-semibold">
                                            {jobData.title}
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                                            {jobData.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <CalendarIcon className="w-4 h-4" />
                                                <span>
                                                    Posted on{' '}
                                                    {jobData.created_at}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                                <DollarSignIcon className="w-4 h-4" />
                                                <span>{jobData.salary}</span>
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <Drawer>
                                                <div className="flex gap-2 justify-around">
                                                    <Button
                                                        size="lg"
                                                        variant="outline"
                                                        onClick={() =>
                                                            checkApply(
                                                                jobData.id
                                                            )
                                                        }
                                                        className="bg-green-500 w-full text-white hover:bg-green-400">
                                                        Apply Now
                                                    </Button>
                                                    <DrawerTrigger asChild>
                                                        <Button
                                                            className="w-full bg-blue-500 text-white hover:bg-blue-400"
                                                            size="lg"
                                                            variant="outline">
                                                            View Details
                                                        </Button>
                                                    </DrawerTrigger>
                                                </div>
                                                <DrawerContent className="w-full bg-white md:left-0 md:right-auto">
                                                    <div className="mx-auto mt-[-0.8rem] h-2 w-[100px] rounded-full bg-stone-300 shadow-md"></div>
                                                    <p className="p-4 flex justify-end mr-5 text-gray-500 ">
                                                        Posted by {': '}{' '}
                                                        {
                                                            jobData.user
                                                                .first_name
                                                        }{' '}
                                                        {jobData.user.last_name}
                                                    </p>
                                                    <DrawerHeader>
                                                        <DrawerTitle className="text-blue-500">
                                                            {jobData.title}
                                                        </DrawerTitle>
                                                        <DrawerDescription className="text-orange-500">
                                                            {
                                                                jobData.company_name
                                                            }
                                                        </DrawerDescription>
                                                    </DrawerHeader>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
                                                        <div className="flex gap-5 flex-col">
                                                            <div>
                                                                <p className="text-gray-900 font-medium dark:text-gray-400 mb-2">
                                                                    Job
                                                                    Description
                                                                </p>
                                                                <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                    {
                                                                        jobData.description
                                                                    }
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-gray-900 font-medium dark:text-gray-400 mb-2">
                                                                    Company
                                                                    Description
                                                                </p>
                                                                <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                    {
                                                                        jobData.company_description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-900 font-semibold dark:text-gray-400 mb-2">
                                                                Details
                                                            </p>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Location
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.location
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Category
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.category
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Company
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.company_name
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Website
                                                                    </p>
                                                                    <Link
                                                                        className="hover:underline"
                                                                        href="#">
                                                                        {
                                                                            jobData.website
                                                                        }
                                                                    </Link>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Posted
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.created_at
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Filled
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.filled
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Salary
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.salary
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Vacancy
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.vacancy
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Job Type
                                                                    </p>
                                                                    <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.type
                                                                        }
                                                                    </p>
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                                        Last
                                                                        Date
                                                                    </p>
                                                                    <p className="text-red-500 dark:text-gray-400 line-clamp-4">
                                                                        {
                                                                            jobData.last_date
                                                                        }
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <DrawerFooter className="justify-center lg:justify-end">
                                                        <Button
                                                            size="lg"
                                                            className="w-full lg:w-[8rem] bg-blue-600 text-white hover:bg-blue-400"
                                                            onClick={() =>
                                                                checkApply(
                                                                    jobData.id
                                                                )
                                                            }>
                                                            Apply Now
                                                        </Button>
                                                        <DrawerClose asChild>
                                                            <Button
                                                                size="lg"
                                                                className="hidden lg:block bg-gray-300 hover:bg-slate-100"
                                                                variant="destructive">
                                                                Close
                                                            </Button>
                                                        </DrawerClose>
                                                    </DrawerFooter>
                                                </DrawerContent>
                                            </Drawer>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                    {/* <Pagination className="mt-8">
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious onClick={() => prevPage(totalJobs)} className="text-lg hover:text-blue-500" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext onClick={() => nextPage(totalJobs)} className="text-lg hover:text-blue-500" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination> */}
                </div>
            ) : (
                <CustomErrorMessage message="No Jobs Available" />
            )}
        </>
    );
}

export function JobViewMobile({ job }: JobViewProps) {
    const [isPending] = useState<boolean>(false);

    return (
        <div className="div">
            <FadeIn>
                <div
                    key={job.id}
                    className=" bg-stone-100 p-2 border border-white hover:border-blue-400 hover:border-solid rounded-lg overflow-hidden dark:bg-gray-950">
                    <Link className="block relative group" href="#">
                        <img
                            alt="Job Cover"
                            className="w-full h-48 object-cover group-hover:opacity-80 rounded-md transition-opacity"
                            height={400}
                            src="http://static.vecteezy.com/system/resources/previews/006/418/714/original/flat-design-job-vacancy-background-we-are-hiring-recruitment-illustration-with-silhouette-of-businessman-free-vector.jpg"
                            style={{
                                aspectRatio: '600/400',
                                objectFit: 'cover',
                            }}
                            width={600}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                            <h3 className="text-lg text-white font-semibold">
                                {job.title}
                            </h3>
                            <p className="text-sm">{job.company_name}</p>
                        </div>
                    </Link>
                    <div className="p-4 space-y-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <LocateIcon className="w-4 h-4" />
                                <span>{job.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <BriefcaseIcon className="w-4 h-4" />
                                <span>{job.type}</span>
                            </div>
                        </div>
                        <h4 className="text-lg text-gray-600 font-semibold">
                            {job.title}{' '}
                        </h4>
                        <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
                            {job.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <CalendarIcon className="w-4 h-4" />
                                <span>Posted on {job.created_at}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                <DollarSignIcon className="w-4 h-4" />
                                <span>{job.salary}</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Drawer>
                                <div className="flex mt-8 gap-2 justify-around">
                                    <Button
                                        className="bg-green-500 w-full text-white hover:bg-green-400"
                                        size="lg"
                                        variant="outline"
                                        onClick={() =>
                                            checkApply(
                                                job.id
                                                // Button
                                            )
                                        }>
                                        Apply Now
                                    </Button>
                                    <DrawerTrigger asChild>
                                        <Button
                                            className="w-full bg-blue-500 text-white hover:bg-blue-400"
                                            size="lg"
                                            variant="outline">
                                            View Details
                                        </Button>
                                    </DrawerTrigger>
                                </div>

                                <DrawerContent className="w-full mt-0 bg-white md:left-0 md:right-auto">
                                    <div className="mx-auto mt-[-0.8rem] h-2 w-[100px] rounded-full bg-stone-300 shadow-md"></div>

                                    <p className="p-4 flex justify-end mr-5 text-gray-500 ">
                                        Posted by {': '} {job.user.first_name}{' '}
                                        {job.user.last_name}
                                    </p>
                                    <DrawerHeader>
                                        <DrawerTitle className="text-blue-500">
                                            {job.title}
                                        </DrawerTitle>
                                        <DrawerDescription className="text-orange-500">
                                            {job.company_name}
                                        </DrawerDescription>
                                    </DrawerHeader>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
                                        <div className="flex gap-5 flex-col">
                                            <div>
                                                <p className="text-gray-900 font-medium dark:text-gray-400 mb-2">
                                                    job Description
                                                </p>
                                                <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
                                                    {job.description}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-gray-900 font-medium dark:text-gray-400 mb-2">
                                                    Company Description
                                                </p>
                                                <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                    {job.company_description}
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-gray-900 font-semibold dark:text-gray-400 mb-2">
                                                Details
                                            </p>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Location
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.location}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Category
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.category}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Company
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.company_name}
                                                    </p>
                                                </div>

                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Website
                                                    </p>
                                                    <Link
                                                        className="hover:underline"
                                                        href="#">
                                                        {job.website}
                                                    </Link>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Posted
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.created_at}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Filled
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.filled}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Salary
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.salary}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Vacancy
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.vacancy}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        job Type
                                                    </p>
                                                    <p className="text-gray-500  dark:text-gray-400 line-clamp-4">
                                                        {job.type}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-900 font-medium dark:text-gray-400">
                                                        Last Date
                                                    </p>
                                                    <p className="text-red-500  dark:text-gray-400 line-clamp-4">
                                                        {job.last_date}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <DrawerFooter className="justify-center lg:justify-end">
                                        <Button
                                            size="lg"
                                            className="w-full  lg:w-[8rem] bg-blue-600 text-white hover:bg-blue-400"
                                            onClick={() => checkApply(job.id)}>
                                            Apply Now
                                        </Button>
                                        <DrawerClose className="" asChild>
                                            <Button
                                                size="lg"
                                                className="hidden lg:block bg-gray-300 hover:bg-slate-100"
                                                variant="destructive">
                                                Close
                                            </Button>
                                        </DrawerClose>
                                    </DrawerFooter>
                                    {/* <DrawerFooter className="sm:justify-center">
                                        <div className="sm:w-full">
                                            <Button
                                                size="lg"
                                                className="bg-blue-600 text-white sm:w-full text-center hover:bg-blue-400"
                                                onClick={() =>
                                                    ApplyJobClick(job.id)
                                                }>
                                                // Apply Now
                                            </Button>
                                            <DrawerClose asChild>
                                            <Button
                                                size="lg"
                                                className="bg-gray-300 hover:bg-slate-100"
                                                variant="destructive">
                                                Close
                                            </Button>
                                        </DrawerClose>
                                        </div>
                                    </DrawerFooter> */}
                                </DrawerContent>
                            </Drawer>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}
function BriefcaseIcon(props: any) {
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
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
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

function DollarSignIcon(props: any) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    );
}

function LocateIcon(props: any) {
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
            <line x1="2" x2="5" y1="12" y2="12" />
            <line x1="19" x2="22" y1="12" y2="12" />
            <line x1="12" x2="12" y1="2" y2="5" />
            <line x1="12" x2="12" y1="19" y2="22" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    );
}
