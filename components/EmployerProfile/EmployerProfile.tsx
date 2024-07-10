'use client';

import { Label } from '../Label/Label';
import React, { useState } from 'react';
import PdfView from '../PdfView/PdfView';
import { Button } from '../Button/Button';

interface TokenType {
    token?: string;
}
export default function EmployerProfile({ token }: TokenType) {
    const [resumeUrl, setResumeUrl] = useState('');
    const [workPermitUrl, setWorkPermitUrl] = useState('');
    const [coverLetterUrl, setCoverLetterUrl] = useState('');
    const [portfolioUrl, setPortfolioUrl] = useState('');
    const [additionalFileUrl, setAdditionalFileUrl] = useState('');

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setUrl: Function
    ) => {
        const files = e.target.files;
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setUrl(url);
        }
    };

    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg mb-[10rem] mx-auto py-12 px-10 md:px-6 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Krayasa</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Krayasa is a fast-growing technology company that is
                        revolutionizing the job portal industry. We are
                        dedicated to providing innovative solutions for job
                        seekers and employers alike. Join our team and be part
                        of our exciting journey!
                    </p>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Location
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                New York, NY
                            </p>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Awards
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Best IT Company 2023
                            </p>
                            <p></p>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Employee
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                100+
                            </p>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Application Deadline
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                June 30, 2023
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Company Details</h2>
                    <div className="grid grid-cols-1 gap-4 mb-4">
                        <div>
                            <p className="ttext-black font-medium dark:text-gray-400 mb-1">
                                Company Name
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                KRAYASA
                            </p>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Company Website
                            </p>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline">
                                www.krayasa.com
                            </a>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Salary Range
                            </p>
                            <p className="text-green-500 dark:text-gray-400">
                                $50,000 - $150,000
                            </p>
                        </div>
                        <div>
                            <p className="text-black font-medium dark:text-gray-400 mb-1">
                                Number of Vacancies
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                10
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Krayasa is a leading technology company that specializes
                        in building innovative web applications. We are
                        committed to creating a diverse and inclusive work
                        environment where employees can thrive.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold mt-10 mb-4">Upload Resume</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 md:gap-x-10 lg:grid-cols-2 gap-y-[10rem]">
                    <div className="max-w-xl">
                        <div className="grid gap-2">
                            <Label
                                className="text-gray-500 text-lg"
                                htmlFor="resume">
                                Resume
                            </Label>
                            <input
                                onChange={(e) => onChange(e, setResumeUrl)}
                                accept=".pdf"
                                id="resume"
                                type="file"
                                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                            />
                        </div>
                        <div className="mt-4 h-[400px]">
                            <PdfView url={resumeUrl} />
                        </div>
                    </div>

                    <div className="max-w-xl">
                        <div className="grid gap-2">
                            <Label
                                className="text-gray-500 text-lg"
                                htmlFor="work-permit">
                                Work Permit
                            </Label>
                            <input
                                onChange={(e) => onChange(e, setWorkPermitUrl)}
                                accept=".pdf"
                                id="work-permit"
                                type="file"
                                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                            />
                        </div>
                        <div className="mt-4 h-[400px]">
                            <PdfView url={workPermitUrl} />
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <div className="grid gap-2">
                            <Label
                                className="text-gray-500 text-lg"
                                htmlFor="cover-letter">
                                Offer Letter
                            </Label>
                            <input
                                onChange={(e) => onChange(e, setCoverLetterUrl)}
                                id="cover-letter"
                                type="file"
                                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                            />
                        </div>
                        <div className="mt-4 h-[400px]">
                            <PdfView url={coverLetterUrl} />
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <div className="grid gap-2">
                            <Label
                                className="text-gray-500 text-lg"
                                htmlFor="portfolio">
                                Project Agreement
                            </Label>
                            <input
                                onChange={(e) => onChange(e, setPortfolioUrl)}
                                id="portfolio"
                                type="file"
                                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                            />
                        </div>
                        <div className="mt-4 h-[400px]">
                            <PdfView url={portfolioUrl} />
                        </div>
                    </div>
                    <div className="max-w-xl">
                        <div className="grid gap-2">
                            <Label
                                className="text-gray-500 text-lg"
                                htmlFor="additional-file">
                                Employment Requirement Agreement
                            </Label>
                            <input
                                onChange={(e) =>
                                    onChange(e, setAdditionalFileUrl)
                                }
                                id="additional-file"
                                type="file"
                                className="w-full text-gray-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
                            />
                        </div>
                        <div className="mt-4 h-[400px]">
                            <PdfView url={additionalFileUrl} />
                        </div>
                    </div>

                    {/* Add similar grid items for other file uploads */}
                </div>
                <div className="w-full pt-[12rem]">
                    <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white ">
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
}
