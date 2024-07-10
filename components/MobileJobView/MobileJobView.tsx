'use client';

import ReactCurvedText from 'react-curved-text';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

import { JobViewMobile } from '../JobView/JobView';

// interface JobsViewProps {
//     token: string;
//     jobData?: JobData[];
// }

// interface JobData {
//     user: {
//         first_name: string;
//         last_name: string;

//     };
//     id: number;
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
// }

// interface JobViewProps {
//     jobs?: JobData[];
// }

import { JobViewProps } from '@/types/types_old';

// // const jobsPerPage = 6;
// // var totalJobs: number;
import { PiArrowBendDoubleUpLeftLight } from 'react-icons/pi';
import { PiArrowBendDoubleUpRightLight } from 'react-icons/pi';

export default function MobileJobView({ jobs }: JobViewProps) {
    const initialSlideIndex = Math.floor(jobs?.length / 2);

    return (
        <>
            <div className="lg:px-32 p-4 md:p-6">
                <p className="font-bold text-black tracking-normal text-3xl text-center">
                    {' '}
                    Search Jobs
                </p>
                <p className="text-center mt-2 mb-6 text-lg leading-8 text-gray-600">
                    Explore available opportunities tailored to your skills and
                    preferences. Find your next career move with ease.
                </p>
            </div>
            <div className="mt-[-4rem] mb-[5rem]">
                <div className="flex lg:px-32 px-6 mt-10 items-center justify-between mb-8"></div>

                <Swiper
                    initialSlide={initialSlideIndex} // Set the initial slide index to 3 (4th slide)
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper">
                    {jobs?.map((jobData) => (
                        <SwiperSlide className="shadow-lg" key={jobData.id}>
                            <JobViewMobile job={jobData} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <div className=" container justify-center gap-[3rem] mb-5 text-gray-400 text-center items-center flex">
                        <PiArrowBendDoubleUpLeftLight />

                        <PiArrowBendDoubleUpRightLight />
                    </div>
                    <p className="text-center text-gray-300">
                        swipe left or right
                    </p>
                </div>
            </div>
        </>
    );
}
