import Link from 'next/link';
import React from 'react';

interface ErrorMessageProps {
    message: string;
}

const CustomErrorMessage = ({ message }: { message: string }) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-red-100 text-red-700 border border-red-400 rounded-md shadow-md max-w-md mx-auto my-4 space-y-4">
            <div className="text-4xl text-red-500">
                <span role="img" aria-label="Warning">
                    ⚠️
                </span>
            </div>
            <div className="text-lg text-center">{message}</div>
            <div className="text-lg text-center">Try reloading the page...</div>
            <div>
                <p className="text-lg mb-2">
                    Or go back to
                    <Link
                        href="/"
                        className="underline text-md ml-2 text-blue-600">
                        Homepage
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CustomErrorMessage;
