'use server';

import { LoginSchema } from '@/schemas';
import { signIn } from 'next-auth/react';
import { z } from 'zod';

export const login_form = async (values: z.infer<typeof LoginSchema>) => {

    
    
    const logg = await signIn('credentials', {
        email: values.email,
        password: values.password,
    });

    if(!logg.ok){
        return {
            error: 'Invalid Credentials: Please check your email and password and try again.',
        };
    }
    return {
        
        success: 'Login successful',
    }

    
};
