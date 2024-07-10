// 'use client';

// import Link from 'next/link';
// import { Button } from '../Button/Button';

// import { useEffect, useState } from 'react';
// import { toast } from '../UseToast/UseToast';
// import { FadeIn } from '../FadeIn/FadeIn';

// import {
//     DrawerTrigger,
//     DrawerTitle,
//     DrawerDescription,
//     DrawerHeader,
//     DrawerClose,
//     DrawerFooter,
//     DrawerContent,
//     Drawer,
// } from '../Drawer/Drawer';
// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from '@/components/Pagination/Pagination';

// interface JobsViewProps {
//     token: string;
//     jobData?: JobData[];
//     user?: user;
// }

// interface JobData {
//     user: user;
//     title: string;
//     description: string;
//     location: string;
//     website: string;
//     type: string;
//     category: string;
//     salary: string;
//     vacancy: number;
//     last_date: string;
//     company_name: string;
//     company_description: string;
//     created_at: string;
//     filled: boolean;
//     id: number;
// }

// interface user {
//     first_name: string;
//     last_name: string;
// }

// const jobsPerPage = 6;
// var totalJobs: number;

// export function JobsView({ token }: JobsViewProps) {
//     type Job = /*unresolved*/ any;

//     const [jobs, setjobs] = useState<JobData[]>([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     const nextPage = (size: number) => {
//         if (currentPage < size / jobsPerPage) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const prevPage = (size: number) => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//     // const [jobs, setjobs] = useState<Job[]>([])
//     //     ([]);

//     const ApplyJobClick = async (job_id: any) => {
//         console.log('-----------------------click-------------------');
//         try {
//             const res = await fetch(
//                 `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/applied-for-job/${job_id}/`
//             );
//             const check = await res.json();
//             if (check.is_applied == true) {
//                 return toast({
//                     title: 'Already Applied',
//                     description: "You've already applied for this job",
//                     variant: 'destructive',
//                 });
//             } else {
//                 try {
//                     const response = await fetch(
//                         `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/apply-job/${job_id}/`,
//                         {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                                 Authorization: `Bearer ${token}`,
//                             },
//                             body: JSON.stringify({ job: job_id }),
//                         }
//                     );

//                     if (!response.ok) {
//                         throw new Error('Failed to apply data');
//                     }
//                     const data = (await response.json()) as JobData[];
//                     console.log(
//                         'API response-----------------------------------:',
//                         data
//                     ); // Log the API response
//                     return toast({
//                         title: 'Applied!',
//                         description: 'You have applied for the job.',
//                     });
//                 } catch (error) {
//                     console.error('Error applying for jobs', error);
//                 }
//             }
//         } catch (error) {
//             console.error('Error applying for jobs', error);
//         }
//     };

//     useEffect(() => {
//         const fetchJobsDeets = async () => {
//             try {
//                 const response = await fetch(
//                     `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/employer/dashboard/`,
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }

//                 const data = await response.json();
//                 console.log(
//                     'API response-----------------------------------:',
//                     data
//                 ); // Log the API response
//                 const indexOfLastJob = currentPage * jobsPerPage;
//                 const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//                 const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);
//                 totalJobs = data.length;
//                 setjobs(currentJobs);
//             } catch (error) {
//                 console.error('Error fetching applicants', error);
//             }
//         };

//         fetchJobsDeets();
//     }, [currentPage]);

//     return (
//         <div className="div">
//             <div className="flex lg:px-32 px-6 mt-10 items-center justify-between mb-8">
//                 <h1 className="text-3xl font-bold">My Jobs</h1>
//                 <div className="flex items-center gap-4">
//                     <Button variant="outline">
//                         <FilterIcon className="w-5 h-5 mr-2" />
//                         Filter
//                     </Button>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:px-20 gap-10">
//                 {jobs.map((jobData) => (
//                     <FadeIn>
//                         <div
//                             key={jobData.id}
//                             className="cursor-pointer bg-slate-50 p-2 border border-white hover:border-blue-400 hover:border-solid rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
//                             <Link className="block relative group" href="#">
//                                 <img
//                                     alt="Job Cover"
//                                     className="w-full h-48 object-cover group-hover:opacity-80 rounded-md transition-opacity"
//                                     height={400}
//                                     src="http://static.vecteezy.com/system/resources/previews/006/418/714/original/flat-design-job-vacancy-background-we-are-hiring-recruitment-illustration-with-silhouette-of-businessman-free-vector.jpg"
//                                     style={{
//                                         aspectRatio: '600/400',
//                                         objectFit: 'cover',
//                                     }}
//                                     width={600}
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
//                                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                                     <h3 className="text-lg font-semibold">
//                                         {jobData.title}
//                                     </h3>
//                                     <p className="text-sm">
//                                         {jobData.company_name}
//                                     </p>
//                                 </div>
//                             </Link>
//                             <div className="p-4 space-y-2">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <LocateIcon className="w-4 h-4" />
//                                         <span>{jobData.location}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <BriefcaseIcon className="w-4 h-4" />
//                                         <span>{jobData.type}</span>
//                                     </div>
//                                 </div>
//                                 <h4 className="text-lg font-semibold">
//                                     {jobData.title}{' '}
//                                 </h4>
//                                 <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
//                                     {jobData.description}
//                                 </p>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <CalendarIcon className="w-4 h-4" />
//                                         <span>
//                                             Posted on {jobData.created_at}
//                                         </span>
//                                     </div>
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <DollarSignIcon className="w-4 h-4" />
//                                         <span>{jobData.salary}</span>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4">
//                                     <Drawer>
//                                         <div className="flex gap-2 justify-around">
//                                             <Button
//                                                 onClick={() =>
//                                                     ApplyJobClick(jobData.id)
//                                                 }
//                                                 className="bg-blue-500 w-full text-white hover:bg-blue-400"
//                                                 size="lg"
//                                                 variant="outline">
//                                                 Apply Now
//                                             </Button>
//                                             <DrawerTrigger asChild>
//                                                 <Button
//                                                     className="w-full bg-white hover:bg-slate-200"
//                                                     size="lg"
//                                                     variant="outline">
//                                                     View Details
//                                                 </Button>
//                                             </DrawerTrigger>
//                                         </div>

//                                         <DrawerContent className="w-full bg-white md:left-0 md:right-auto">
//                                             <p className="p-4 flex justify-end mr-5 text-gray-500 ">
//                                                 Posted by {': '}{' '}
//                                                 {jobData.user.first_name}{' '}
//                                                 {jobData.user.last_name}
//                                             </p>
//                                             <DrawerHeader>
//                                                 <DrawerTitle>
//                                                     {jobData.title}
//                                                 </DrawerTitle>
//                                                 <DrawerDescription>
//                                                     {jobData.company_name}
//                                                 </DrawerDescription>
//                                             </DrawerHeader>
//                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
//                                                 <div className="flex gap-5 flex-col">
//                                                     <div>
//                                                         <p className="text-gray-500 dark:text-gray-400 mb-2">
//                                                             JobData Description
//                                                         </p>
//                                                         <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
//                                                             {
//                                                                 jobData.description
//                                                             }
//                                                         </p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500 dark:text-gray-400 mb-2">
//                                                             Company Description
//                                                         </p>
//                                                         <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
//                                                             {
//                                                                 jobData.company_description
//                                                             }
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-gray-500 font-semibold dark:text-gray-400 mb-2">
//                                                         Details
//                                                     </p>
//                                                     <div className="grid grid-cols-2 gap-4">
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Location
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.location
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Category
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.category
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Company
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.company_name
//                                                                 }
//                                                             </p>
//                                                         </div>

//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Website
//                                                             </p>
//                                                             <Link
//                                                                 className="hover:underline"
//                                                                 href="#">
//                                                                 {
//                                                                     jobData.website
//                                                                 }
//                                                             </Link>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Posted
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.created_at
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Filled
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.filled}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Salary
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.salary}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Vacancy
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.vacancy
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 JobData Type
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.type}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Last Date
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.last_date
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <DrawerFooter>
//                                                 <Button
//                                                     size="lg"
//                                                     className="bg-blue-600 text-white hover:bg-blue-400"
//                                                     variant="outline"
//                                                     onClick={() =>
//                                                         ApplyJobClick(
//                                                             jobData.id
//                                                         )
//                                                     }>
//                                                     Apply Now
//                                                 </Button>
//                                                 <DrawerClose asChild>
//                                                     <Button
//                                                         size="lg"
//                                                         className="bg-gray-300 hover:bg-slate-100"
//                                                         variant="destructive">
//                                                         Close
//                                                     </Button>
//                                                 </DrawerClose>
//                                             </DrawerFooter>
//                                         </DrawerContent>
//                                     </Drawer>
//                                 </div>
//                             </div>
//                         </div>
//                     </FadeIn>
//                 ))}
//                 {/* <button onClick={() => prevPage(totalJobs)}>Previous</button> */}
//                 {/* <button onClick={() => nextPage(totalJobs)}>Next</button> */}
//             </div>
//             <Pagination className="mt-8">
//                 <PaginationContent>
//                     <PaginationItem>
//                         <PaginationPrevious
//                             onClick={() => prevPage(totalJobs)}
//                             className="text-lg hover:text-blue-500"
//                         />
//                     </PaginationItem>

//                     <PaginationItem>
//                         <PaginationNext
//                             onClick={() => nextPage(totalJobs)}
//                             className="text-lg hover:text-blue-500"
//                         />
//                     </PaginationItem>
//                 </PaginationContent>
//             </Pagination>
//         </div>
//     );
// }

// export function NoSessionJobsView(token) {
//     const [jobs, setjobs] = useState<any[]>([]);
//     const [currentPage, setCurrentPage] = useState(1);

//     const nextPage = (size: number) => {
//         if (currentPage < size / jobsPerPage) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const prevPage = (size: number) => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const ApplyJobClick = async (job_id: any) => {
//         console.log('-----------------------click-------------------');
//         try {
//             const res = await fetch(
//                 `http://localhost:8083/wt/api/applied-for-job/${job_id}/`,
//                 {
//                     method: 'GET',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${token}`,
//                     },
//                 }
//             );
//             const check = await res.json();
//             if (check.is_applied == true) {
//                 return toast({
//                     title: 'Already Applied',
//                     description: "You've already applied for this job",
//                     variant: 'destructive',
//                 });
//             } else {
//                 try {
//                     const response = await fetch(
//                         `http://localhost:8083/wt/api/apply-job/${job_id}/`,
//                         {
//                             method: 'POST',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                                 Authorization: `Bearer ${token}`,
//                             },
//                             body: JSON.stringify({ job: job_id }),
//                         }
//                     );

//                     if (!response.ok) {
//                         throw new Error('Failed to apply data');
//                     }
//                     const data = await response.json();
//                     console.log(
//                         'API response-----------------------------------:',
//                         data
//                     ); // Log the API response
//                     return toast({
//                         title: 'Applied!',
//                         description: 'You have applied for the job.',
//                     });
//                 } catch (error) {
//                     console.error('Error applying for jobs', error);
//                 }
//             }
//         } catch (error) {
//             console.error('Error applying for jobs', error);
//         }
//     };

//     useEffect(() => {
//         const fetchJobsDeets = async () => {
//             try {
//                 const response = await fetch(
//                     'http://localhost:8083/wt/api/jobs/',
//                     {
//                         method: 'GET',
//                         headers: {
//                             'Content-Type': 'application/json',
//                             // Authorization: `Bearer ${token}`,
//                         },
//                     }
//                 );

//                 if (!response.ok) {
//                     throw new Error('Failed to fetch data');
//                 }

//                 const data = await response.json();
//                 console.log(
//                     'API response-----------------------------------:',
//                     data
//                 ); // Log the API response
//                 const indexOfLastJob = currentPage * jobsPerPage;
//                 const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//                 const currentJobs = data.slice(indexOfFirstJob, indexOfLastJob);
//                 totalJobs = data.length;
//                 setjobs(currentJobs);
//             } catch (error) {
//                 console.error('Error fetching applicants', error);
//             }
//         };

//         fetchJobsDeets();
//     }, [currentPage]);

//     return (
//         <div className="lg:px-32 p-4 md:p-6">
//             <p className="font-bold text-black tracking-normal sm:text-4xl my-auto text-center">
//                 {' '}
//                 Search Jobs
//             </p>
//             <p className="text-center mt-2 mb-10 text-lg leading-8 text-gray-600">
//                 Explore available opportunities tailored to your skills and
//                 preferences. Find your next career move with ease.
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 lg:px-20 gap-10">
//                 {jobs.map((jobData) => (
//                     <FadeIn>
//                         <div
//                             key={jobData.id}
//                             className=" bg-slate-50 p-2 border border-white hover:border-blue-400 hover:border-solid rounded-lg shadow-md overflow-hidden dark:bg-gray-950">
//                             <Link className="block relative group" href="#">
//                                 <img
//                                     alt="Job Cover"
//                                     className="w-full h-48 object-cover group-hover:opacity-80 rounded-md transition-opacity"
//                                     height={400}
//                                     src="http://static.vecteezy.com/system/resources/previews/006/418/714/original/flat-design-job-vacancy-background-we-are-hiring-recruitment-illustration-with-silhouette-of-businessman-free-vector.jpg"
//                                     style={{
//                                         aspectRatio: '600/400',
//                                         objectFit: 'cover',
//                                     }}
//                                     width={600}
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
//                                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                                     <h3 className="text-lg font-semibold">
//                                         {jobData.title}
//                                     </h3>
//                                     <p className="text-sm">
//                                         {jobData.company_name}
//                                     </p>
//                                 </div>
//                             </Link>
//                             <div className="p-4 space-y-2">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <LocateIcon className="w-4 h-4" />
//                                         <span>{jobData.location}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <BriefcaseIcon className="w-4 h-4" />
//                                         <span>{jobData.type}</span>
//                                     </div>
//                                 </div>
//                                 <h4 className="text-lg font-semibold">
//                                     {jobData.title}{' '}
//                                 </h4>
//                                 <p className="text-gray-500 dark:text-gray-400 line-clamp-2">
//                                     {jobData.description}
//                                 </p>
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <CalendarIcon className="w-4 h-4" />
//                                         <span>
//                                             Posted on {jobData.created_at}
//                                         </span>
//                                     </div>
//                                     <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
//                                         <DollarSignIcon className="w-4 h-4" />
//                                         <span>{jobData.salary}</span>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4">
//                                     <Drawer>
//                                         <div className="flex gap-2 justify-around">
//                                             <Button
//                                                 onClick={() =>
//                                                     ApplyJobClick(jobData.id)
//                                                 }
//                                                 className="bg-blue-500 w-full text-white hover:bg-blue-400"
//                                                 size="lg"
//                                                 variant="outline">
//                                                 Apply Now
//                                             </Button>
//                                             <DrawerTrigger asChild>
//                                                 <Button
//                                                     className="w-full bg-white hover:bg-slate-200"
//                                                     size="lg"
//                                                     variant="outline">
//                                                     View Details
//                                                 </Button>
//                                             </DrawerTrigger>
//                                         </div>

//                                         <DrawerContent className="w-full bg-white md:left-0 md:right-auto">
//                                             <p className="p-4 flex justify-end mr-5 text-gray-500 ">
//                                                 Posted by {': '}{' '}
//                                                 {jobData.user.first_name}{' '}
//                                                 {jobData.user.last_name}
//                                             </p>
//                                             <DrawerHeader>
//                                                 <DrawerTitle>
//                                                     {jobData.title}
//                                                 </DrawerTitle>
//                                                 <DrawerDescription>
//                                                     {jobData.company_name}
//                                                 </DrawerDescription>
//                                             </DrawerHeader>
//                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
//                                                 <div className="flex gap-5 flex-col">
//                                                     <div>
//                                                         <p className="text-gray-500 dark:text-gray-400 mb-2">
//                                                             JobData Description
//                                                         </p>
//                                                         <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
//                                                             {
//                                                                 jobData.description
//                                                             }
//                                                         </p>
//                                                     </div>
//                                                     <div>
//                                                         <p className="text-gray-500 dark:text-gray-400 mb-2">
//                                                             Company Description
//                                                         </p>
//                                                         <p className="text-gray-500 dark:text-gray-400 line-clamp-4">
//                                                             {
//                                                                 jobData.company_description
//                                                             }
//                                                         </p>
//                                                     </div>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-gray-500 font-semibold dark:text-gray-400 mb-2">
//                                                         Details
//                                                     </p>
//                                                     <div className="grid grid-cols-2 gap-4">
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Location
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.location
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Category
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.category
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Company
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.company_name
//                                                                 }
//                                                             </p>
//                                                         </div>

//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Website
//                                                             </p>
//                                                             <Link
//                                                                 className="hover:underline"
//                                                                 href="#">
//                                                                 {
//                                                                     jobData.website
//                                                                 }
//                                                             </Link>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Posted
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.created_at
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Filled
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.filled}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Salary
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.salary}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Vacancy
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.vacancy
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 JobData Type
//                                                             </p>
//                                                             <p>
//                                                                 {jobData.type}
//                                                             </p>
//                                                         </div>
//                                                         <div>
//                                                             <p className="text-sm text-gray-500 dark:text-gray-400">
//                                                                 Last Date
//                                                             </p>
//                                                             <p>
//                                                                 {
//                                                                     jobData.last_date
//                                                                 }
//                                                             </p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <DrawerFooter>
//                                                 <Button
//                                                     size="lg"
//                                                     className="bg-blue-600 text-white hover:bg-blue-400"
//                                                     variant="outline"
//                                                     onClick={() =>
//                                                         ApplyJobClick(
//                                                             jobData.id
//                                                         )
//                                                     }>
//                                                     Apply Now
//                                                 </Button>
//                                                 <DrawerClose asChild>
//                                                     <Button
//                                                         size="lg"
//                                                         className="bg-gray-300 hover:bg-slate-100"
//                                                         variant="destructive">
//                                                         Close
//                                                     </Button>
//                                                 </DrawerClose>
//                                             </DrawerFooter>
//                                         </DrawerContent>
//                                     </Drawer>
//                                 </div>
//                             </div>
//                         </div>
//                     </FadeIn>
//                 ))}
//             </div>
//             <Pagination className="mt-8">
//                 <PaginationContent>
//                     <PaginationItem>
//                         <PaginationPrevious
//                             onClick={() => prevPage(totalJobs)}
//                             className="cursor-pointer text-lg hover:text-blue-500"
//                         />
//                     </PaginationItem>

//                     <PaginationItem>
//                         <PaginationNext
//                             onClick={() => nextPage(totalJobs)}
//                             className="cursor-pointer text-lg hover:text-blue-500"
//                         />
//                     </PaginationItem>
//                 </PaginationContent>
//             </Pagination>
//         </div>
//     );
// }

// function BriefcaseIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
//             <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//         </svg>
//     );
// }

// function BuildingIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
//             <path d="M9 22v-4h6v4" />
//             <path d="M8 6h.01" />
//             <path d="M16 6h.01" />
//             <path d="M12 6h.01" />
//             <path d="M12 10h.01" />
//             <path d="M12 14h.01" />
//             <path d="M16 10h.01" />
//             <path d="M16 14h.01" />
//             <path d="M8 10h.01" />
//             <path d="M8 14h.01" />
//         </svg>
//     );
// }

// function CalendarIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
//             <line x1="16" x2="16" y1="2" y2="6" />
//             <line x1="8" x2="8" y1="2" y2="6" />
//             <line x1="3" x2="21" y1="10" y2="10" />
//         </svg>
//     );
// }

// function DollarSignIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <line x1="12" x2="12" y1="2" y2="22" />
//             <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//         </svg>
//     );
// }

// function FilterIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
//         </svg>
//     );
// }

// function LocateIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <line x1="2" x2="5" y1="12" y2="12" />
//             <line x1="19" x2="22" y1="12" y2="12" />
//             <line x1="12" x2="12" y1="2" y2="5" />
//             <line x1="12" x2="12" y1="19" y2="22" />
//             <circle cx="12" cy="12" r="7" />
//         </svg>
//     );
// }

// function MenuIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <line x1="4" x2="20" y1="12" y2="12" />
//             <line x1="4" x2="20" y1="6" y2="6" />
//             <line x1="4" x2="20" y1="18" y2="18" />
//         </svg>
//     );
// }

// function SearchIcon(props: any) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round">
//             <circle cx="11" cy="11" r="8" />
//             <path d="m21 21-4.3-4.3" />
//         </svg>
//     );
// }
