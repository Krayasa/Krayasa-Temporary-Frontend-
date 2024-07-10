'use client';

import { FcGoogle } from 'react-icons/fc';
import { FaLinkedin } from 'react-icons/fa';
// import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '../../routes';
import { Button } from '../Button/Button';
// import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const Social = () => {
    const onClick = (provider: 'google' | 'linkedin') => {
        signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
        // console.log(`${variant}  button clicked`);
    };

    // console.log("render social content");

    return (
        <div className="flex align-middle gap-20 justify-around">
            <Button
                className="hover:bg-gray-300  bg-gray-200"
                size="lg"
                onClick={() => onClick('google')}
                variant="default">
                <FcGoogle style={{ width: '40px', height: '20px' }} />
            </Button>
            <Button
                className="hover:bg-gray-300 text-blue-500  bg-gray-200"
                size="lg"
                onClick={() => onClick('linkedin')}
                variant="outline">
                <FaLinkedin style={{ width: '40px', height: '20px' }} />
            </Button>
        </div>
    );
};
