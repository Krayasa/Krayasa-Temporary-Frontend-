'use client';

import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormItem,
    FormMessage,
    FormField,
    FormLabel,
} from '../Form/Form';
import { RegisterSchema } from '../../schemas/index';
import { RadioGroup, RadioGroupItem } from '../RadioGroup/RadioGroup';
import { Label } from '../Label/Label';
import { Input } from '../Input/Input';
import * as z from 'zod';
import { Button } from '../Button/Button';
import { FormError } from '../FormError/FormError';
import { FormSuccess } from '../FormSuccess/FormSuccess';
import { CardWrapper } from '../Card-wrapper/CardWrapper';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
    const router = useRouter();

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

    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, setIsPending] = useState<boolean>(false);

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        // defaultValues: {
        //     email: '',
        //     password: '',
        //     password2: '',
        //     role: 'employer',
        // },
    });

    const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
        setIsPending(true);
        setError('');
        setSuccess('');

        const RegisterData = {
            email: values.email,
            password: values.password,
            password2: values.password2,
            role: values.role,
        };

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/register/`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(RegisterData),
                }
            );

            if (response.ok) {
                const responseData = await response.json();
                Toast.fire({
                    icon: 'success',
                    text: `Your ${RegisterData.role} has been created successfully!`,
                });

                router.push('/auth/login');
            } else {
                const errorData = await response.json();
                throw new Error(
                    `HTTP error! status: ${response.status}, message: ${errorData.message}`
                );
            }
        } catch (error) {
            console.error('Error:', error);
            setError(error.message);
            Toast.fire({
                title: 'Oops...',
                text: `Something went wrong!\n${RegisterData.role} not created`,
                icon: 'error',
            });
        } finally {
            setIsPending(false);
        }

        console.log('RegisterData:', RegisterData);
        console.log('Type:', typeof RegisterData.email);
        console.log('Type:', typeof RegisterData.password);
        console.log('Type:', typeof RegisterData.password2);
        console.log('Type:', typeof RegisterData.role);
    };

    return (
        <CardWrapper
            headerLabel="Register Portal"
            backButtonLabel="Already have an account ?"
            backButtonHref="/auth/login"
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
                                            disabled={isPending}
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
                                            disabled={isPending}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            className="bg-white"
                                            {...field}
                                            disabled={isPending}
                                            placeholder="********"
                                            type="password"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Role</FormLabel>

                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}>
                                        <div className="flex gap-4">
                                            <Label
                                                className="flex items-center gap-2 cursor-pointer"
                                                htmlFor="employer">
                                                <RadioGroupItem
                                                    className="bg-gray-300"
                                                    id="employer"
                                                    value="employer"
                                                />
                                                Employer
                                            </Label>
                                            <Label
                                                className="flex items-center gap-2 cursor-pointer"
                                                htmlFor="employee">
                                                <RadioGroupItem
                                                    className="bg-gray-300"
                                                    id="employee"
                                                    value="employee"
                                                />
                                                Employee
                                            </Label>
                                        </div>
                                    </RadioGroup>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError errMsg={error} />
                    <FormSuccess successMsg={success} />
                    <Button
                        type="submit"
                        disabled={isPending}
                        className="w-full mt-6"
                        variant="login">
                        {isPending ? 'Registering....' : 'Register'}
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    );
};
