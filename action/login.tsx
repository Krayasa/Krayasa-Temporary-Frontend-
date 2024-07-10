'use server';

import { DEFAULT_EMPLOYEE_REDIRECT, DEFAULT_LOGIN_REDIRECT } from '../routes';
import { LoginSchema } from '../schemas/index';
import { auth, signIn } from '../auth';
import * as z from 'zod';
import { AuthError } from 'next-auth';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    // const router = useRouter();
    const { email, password } = values;

    try {
        const response = await signIn('credentials', {
            email,
            password,
            redirect: false,
        });

        return response;
    } catch (error) {
        console.log(error);
        const msg = error.message.split('.')[0];
        throw new Error(`${msg}`);
    }
};
