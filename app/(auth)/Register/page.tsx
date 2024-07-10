import { auth } from '@/auth';
import { RegisterForm } from '@/components/RegisterForm/RegisterForm';
import React from 'react';

export default async function page() {
    return (
        <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <RegisterForm />
        </div>
    );
}

