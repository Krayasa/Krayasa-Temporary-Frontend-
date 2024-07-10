import React from 'react';

interface TokenType {
    token?: string;
}

export default function EmployeeProfile({ token }: TokenType) {
    return (
        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h1 className="text-2xl font-bold mb-4">Ram Thapa</h1>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                        Hi, I'm Ram Thapa, an experienced frontend developer
                        with a passion for creating beautiful and user-friendly
                        web applications. I have a strong understanding of HTML,
                        CSS, and JavaScript, and I'm proficient in popular
                        frontend frameworks like React. I have a keen eye for
                        design and enjoy collaborating with both design and
                        backend teams to bring ideas to life. I'm excited about
                        the opportunity to join a growing team and contribute to
                        building innovative web applications. If you're looking
                        for a dedicated and skilled frontend developer, I'd love
                        to hear from you!
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">
                                Address
                            </p>
                            <p>California, CA</p>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">
                                Job Type
                            </p>
                            <p>Full-time</p>
                        </div>
                        <div>
                            <p className="text-gray-500 dark:text-gray-400 mb-1">
                                Category
                            </p>
                            <p>Frontend Engineering</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Upload Files</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            <div>
                                <label
                                    htmlFor="resume"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Resume
                                </label>
                                <input
                                    type="file"
                                    id="resume"
                                    name="resume"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="experience-letter"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Experience Letter
                                </label>
                                <input
                                    type="file"
                                    id="experience-letter"
                                    name="experience-letter"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="police-report"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Police- Report
                                </label>
                                <input
                                    type="file"
                                    id="police-report"
                                    name="police-report"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="medical-report"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Medical Report
                                </label>
                                <input
                                    type="file"
                                    id="medical-report"
                                    name="medical-report"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="offer-letter"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Offer Letter
                                </label>
                                <input
                                    type="file"
                                    id="offer-letter"
                                    name="offer-letter"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="work-permit"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Work Permit
                                </label>
                                <input
                                    type="file"
                                    id="work-permit"
                                    name="work-permit"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="project-agreement"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Project Agreement
                                </label>
                                <input
                                    type="file"
                                    id="project-agreement"
                                    name="project-agreement"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="employement-requirement-agreement"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Employment Requirement Agreement
                                </label>
                                <input
                                    type="file"
                                    id="employement-requirement-agreement"
                                    name="employement-requirement-agreement"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="visa"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Visa
                                </label>
                                <input
                                    type="file"
                                    id="visa"
                                    name="visa"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="ticket"
                                    className="block text-gray-500 dark:text-gray-400 mb-1">
                                    Ticket
                                </label>
                                <input
                                    type="file"
                                    id="ticket"
                                    name="ticket"
                                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
