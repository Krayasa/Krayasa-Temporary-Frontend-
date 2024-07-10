'use client';

import { useRouter } from 'next/navigation';

interface LoginBtnProps {
    children: React.ReactNode;
    mode?: 'modal' | 'redirect' | null;
    asChild?: boolean;
}

export const LoginBtn = ({ children, mode = null }: LoginBtnProps) => {
    // console.log("logintbn fn");
    const router = useRouter();

    const onClick = () => {
        router.push('/auth/login');
        // console.log("login button clicked");
    };

    if (mode === 'modal') {
        return <span>Mode = modal </span>;
    } else if (mode === 'redirect') {
        return <span>Mode = redirect</span>;
    } else {
        // console.log("childrenpage");
        return (
            <span onClick={onClick} className="cursor-pointer">
                {children}
            </span>
        );
    }
};
