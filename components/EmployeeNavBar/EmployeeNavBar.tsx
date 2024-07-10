'use client';

import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '../DropDownMenu/DropDownMenu';

import {
    SheetTrigger,
    SheetContent,
    Sheet,
    SheetFooter,
    SheetClose,
} from '@/components/Sheet/Sheet';

import { AvatarImage, AvatarFallback, Avatar } from '../Avatar/Avatar';
import { Button } from '../Button/Button';
import Logo from '../Logo/Logo';
import { ArrowDownIcon, ChevronDown, MenuIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';
import { useMemo } from 'react';
import { AvatarIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';
import { fetchPageContent } from '@/utils/fetchPages';

interface NavBarProps {
    user: Pick<User, 'email' | 'name'>;
    // email: string;
}

export default function EmployeeNavBar({ user }: NavBarProps) {
    const router = useRouter();
    const getEmailInitials = (email: string) => {
        if (!email || email.trim() === '') return ''; // Check if email is undefined, null, or empty

        const firstLetter = email.charAt(0).toUpperCase(); // Get the first character and convert it to uppercase
        return firstLetter;
    };

    const initials = useMemo(
        () => getEmailInitials(user.email || ''),
        [user.email]
    );

    return (
        <header className="flex px-5 h-28 w-full  shrink-0 items-center lg:px-32 dark:bg-gray-900 dark:text-gray-100">
            <div className="flex items-center gap-6">
                <Logo src="public/img/logo.svg"></Logo>
            </div>
            <div className="ml-auto flex items-center gap-2">
                <div className="hidden lg:flex gap-6">
                    <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                        <Link href="/">Home</Link>
                    </div>

                    <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                        <Link href="/contact">Contact Us</Link>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                            Areas of Expertise
                            <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />{' '}
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-[400px] bg-gray-100 shadow-lg">
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 font-medium px-6 p-4 leading-none group-hover:underline">
                                    <Link href="/agriculture">Agriculture</Link>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                    <Link href="/construction">
                                        Construction
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                    <Link href="/hospitality-and-tourism">
                                        Hospitality and Tourism
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                    <Link href="/retail-and-consumer">
                                        Retail and Consumer Goods
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                    <Link href="/facility-management-and-support-services">
                                        Facility Management and Support Service
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                    <Link href="/logistics-and-transport">
                                        Logistics and Transport
                                    </Link>
                                </div>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                        <Link href="/JobsView">View Jobs</Link>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Avatar className="cursor-pointer hidden lg:inline-block bg-gray-300 h-9 w-9">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-avatar.jpg"
                                />
                                <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-gray-100 shadow-lg px-4">
                            <p className="px-2 text-sx text-slate-600 py-2 mt-4">
                                {user.email}
                            </p>
                            <DropdownMenuSeparator className=" w-50 bg-slate-400 " />

                            <DropdownMenuSeparator className=" w-50 bg-slate-400 " />
                            <DropdownMenuItem
                                className=" h-10 text-center  text-lg  hover:bg-red-500 mt-4 mb-2 hover:text-red-100 rounded justify-center"
                                onClick={() => signOut()}>
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <Sheet>
                <SheetTrigger asChild className="ml-auto lg:hidden">
                    <MenuIcon className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent className="bg-white" side="right">
                    <div>
                        <Logo src="public/img/logo.svg"></Logo>
                    </div>
                    <div className="grid gap-6 py-6">
                        <div className="">
                            <Avatar className="ml-2 h-12 w-12 bg-gray-200">
                                <AvatarImage
                                    alt="@shadcn"
                                    src="/placeholder-avatar.jpg"
                                />
                                <AvatarFallback>{initials}</AvatarFallback>
                            </Avatar>
                            <p className="ml-4 mt-2 text-gray-500">
                                {user?.email}
                            </p>
                        </div>

                        <Button
                            variant="link"
                            className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-color  hover:text-blue-500 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                            <Link href="/">Home</Link>
                        </Button>
                        <Button
                            variant="link"
                            className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-color hover:text-blue-500 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                            <Link href="/about">About us</Link>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:text-blue-500 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                                Areas of Expertise
                                <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180" />{' '}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[400px] bg-stone-50 shadow-lg">
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 font-medium px-6 p-4 leading-none group-hover:underline">
                                        <Link href="/agriculture">
                                            Agriculture
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                        <Link href="/construction">
                                            Construction
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                        <Link href="/hospitality-and-tourism">
                                            Hospitality and Tourism
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                        <Link href="/retail-and-consumer">
                                            Retail and Consumer Goods
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                        <Link href="/facility-management-and-support-services">
                                            Facility Management and Support
                                            Service
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="text-sm hover:text-blue-500 px-6 p-4 font-medium leading-none group-hover:underline">
                                        <Link href="/logistics-and-transport">
                                            Logistics and Transport
                                        </Link>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button
                            variant="link"
                            className="cursor-pointer group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-color hover:text-blue-500 focus:text-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50">
                            <Link href="/JobsView">View Jobs</Link>
                        </Button>

                        <Button
                            className="hidden lg:inline-block bg-teal-600 hover:bg-teal-800 text-white w-full"
                            variant="default">
                            <Link href="http://speed-wings-resume-builder.vercel.app">
                                Create Resume
                            </Link>
                        </Button>

                        <Button
                            className="text-center w-full text-white bg-red-500 text-md"
                            variant="link"
                            onClick={() => signOut()}>
                            Logout
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
}
