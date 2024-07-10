'use client';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { CardWrapper } from '../Card-wrapper/CardWrapper';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../Form/Form';
import { Input } from '../Input/Input';
import { z } from 'zod';
import { Button } from '../Button/Button';
import { FormError } from '../FormError/FormError';
import { FormSuccess } from '../FormSuccess/FormSuccess';
import { login } from '../../action/login';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long.',
    }),
});

const LoginForm = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
    });

    const router = useRouter();
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');

    const [status, setStatus] = useState({
        isPending: false,
    });

    const form = useForm({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (values) => {
        setStatus({ isPending: true });
        setError('');
        setSuccess('');

        try {
            const res = await login(values);
            setStatus({ isPending: false });
            setSuccess('Login Successful');
            window.location.href = res;
        } catch (error) {
            setStatus({ isPending: false });
            setError(error.message);
        } finally {
            setStatus({ isPending: false });
        }
    };

    return (
        <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
            <CardWrapper
                headerLabel="Login portal"
                backButtonLabel="Don't have an account?"
                backButtonHref="/auth/Register"
                showSocial>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-white"
                                                {...field}
                                                disabled={status.isPending}
                                                placeholder="abc@example.com"
                                                type="email"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-white"
                                                {...field}
                                                disabled={status.isPending}
                                                placeholder="********"
                                                type="password"
                                            />
                                        </FormControl>
                                        <Button
                                            variant="link"
                                            size="sm"
                                            className="text-slate-400">
                                            <Link href="/auth/reset">
                                                Forgot Password ?
                                            </Link>
                                        </Button>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="div">
                            <FormError errMsg={error} />
                            <FormSuccess successMsg={success} />
                        </div>
                        <Button
                            type="submit"
                            disabled={status.isPending}
                            className="w-full mt-6"
                            variant="login">
                            {status.isPending ? 'Logging in...' : 'Login'}
                        </Button>
                        <div className="mt-6 py-3 flex items-center text-sm text-gray-400 before:flex-1 before:border-t before:border-gray-400 before:me-6 after:flex-1 after:border-t after:border-gray-400 after:ms-6 dark:text-white dark:before:border-neutral-600 dark:after:border-neutral-600">
                            or login with
                        </div>
                    </form>
                </Form>
            </CardWrapper>
        </div>
    );
};

export default LoginForm;
