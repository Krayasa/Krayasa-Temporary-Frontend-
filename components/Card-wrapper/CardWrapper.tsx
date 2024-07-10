'use client';

import { BackButton } from '../BackBtn/BackBtn';
import { Card, CardContent, CardFooter, CardHeader } from '../Card/Card';
import { Header, JobHeader } from '../Header/Header';
import { Social } from '../Social/Social';

interface CardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}
interface JobCardWrapperProps {
    children: React.ReactNode;
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
}

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial,
}: CardWrapperProps) => {
    // console.log("Render Card Wrapper and its content");
    return (
        <Card className="shadow-lg shadow-gray-300 bg-neutral-50 w-[500px] h-auto items-center align-middle ">
            <CardHeader>
                <Header label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocial && (
                <CardFooter>
                    <Social />
                </CardFooter>
            )}
            <CardFooter>
                <BackButton label={backButtonLabel} href={backButtonHref} />
            </CardFooter>
            {/* shared card wrapper */}
        </Card>
    );
};
export const JobCardWrapper = ({
    children,
    headerLabel,
}: JobCardWrapperProps) => {
    return (
        <Card className="shadow-lg w-[500px] h-auto items-center align-middle ">
            <CardHeader>
                <JobHeader label={headerLabel} />
            </CardHeader>
            <CardContent>{children}</CardContent>
        </Card>
    );
};
