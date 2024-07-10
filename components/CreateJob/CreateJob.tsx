'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CreateJobSchema } from '../../schemas/index';
import { Button } from '../Button/Button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../Form/Form';
import { CalendarIcon } from '@radix-ui/react-icons';
import { cn } from '../../lib/utils';
import { Calendar } from '../Calendar/Calendar';
import { Input } from '../Input/Input';
import { PopoverTrigger, PopoverContent, Popover } from '../Popover/Popover';
import { format } from 'date-fns';
import { RadioGroup, RadioGroupItem } from '../RadioGroup/RadioGroup';
import { Label } from '../Label/Label';
import Swal from 'sweetalert2';
import { Textarea } from '../Textarea/Textarea';

interface CreateJobFormProps {
    token: string;
}

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

const CreateJobForm = ({ token }: CreateJobFormProps) => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [date, setDate] = useState<Date | undefined>(new Date());
    const form = useForm<z.infer<typeof CreateJobSchema>>({
        resolver: zodResolver(CreateJobSchema),
    });

    const onSubmit = async (values: z.infer<typeof CreateJobSchema>) => {
        console.log('clicked');
        setIsPending(true);
        const formData = {
            title: values.title,
            description: values.description,
            location: values.location,
            type: values.type,
            category: values.category,
            last_date: values.lastDate,
            company_name: values.name,
            company_description: values.description,
            website: values.website,
            salary: values.salary,
            vacancy: values.vacancy,
        };
        console.log(formData);

        try {
            console.log(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/employer/jobs/create/`
            );
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/employer/jobs/create/`,
                // `http://localhost:8081/wt/api/employer/jobs/create/`,

                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(formData), // Convert formData to JSON string
                }
            );
            if (response.ok) {
                Toast.fire({
                    icon: 'success',
                    text: 'Your Job has been posted Successfully!',
                });
            } else {
                Toast.fire({
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    icon: 'error',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            Toast.fire({
                title: 'Oops...',
                text: 'Something went wrong!',
                icon: 'error',
            });
        } finally {
            setIsPending(false);
        }
    };

    return (
        <div className=" mx-auto mt-20 mb-40 shadow-lg shadow-gray-300 bg-stone-50  rounded-xl max-w-4xl py-12 px-4 md:px-0">
            <div className="space-y-10 mb-10">
                <div className="space-y-4 text-center">
                    <h1 className="text-3xl font-bold">Post a New Job</h1>
                    <p className="text-gray-500 dark:text-gray-400">
                        Fill out the form below to create a new job posting.
                    </p>
                </div>
            </div>

            <div className="p-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        {' '}
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="XYZ company"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <div className="space-y-2">
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Company Location
                                            </FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    disabled={isPending}
                                                    placeholder="XYZ 123 st, Washington"
                                                    type="text"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Job Title"
                                                type="text"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Website</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="www.companyName.com"
                                                type="text"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                {...field}
                                                disabled={isPending}
                                                placeholder="write about you job"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {}

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Category</FormLabel>

                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            // defaultValue="Agriculture"
                                        >
                                            <div className="flex flex-col  gap-4">
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="Agriculture">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="Agriculture"
                                                        value="Agriculture"
                                                    />
                                                    Agriculture
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="Construction">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="Construction"
                                                        value="Construction"
                                                    />
                                                    Construction
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="HospitalityAndTourism">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="HospitalityAndTourism"
                                                        value="HospitalityAndTourism"
                                                    />
                                                    Hospitality And Tourism
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="RetailAndConsumerGoods">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="RetailAndConsumerGoods"
                                                        value="RetailAndConsumerGoods"
                                                    />
                                                    Retail And Consumer Goods
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="FacilityManagementAndSupportServices">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="FacilityManagementAndSupportServices"
                                                        value="FacilityManagementAndSupportServices"
                                                    />
                                                    Facility Management And
                                                    Support Services
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="TransportationAndLogistics">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="TransportationAndLogistics"
                                                        value="TransportationAndLogistics"
                                                    />
                                                    Transportation And Logistics
                                                </Label>
                                            </div>
                                        </RadioGroup>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* todo salary range  */}

                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Type</FormLabel>

                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            // defaultValue="Agriculture"
                                        >
                                            <div className="flex   gap-4">
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="FullTime">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="FullTime"
                                                        value="FullTime"
                                                    />
                                                    Full Time
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="PartTime">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="PartTime"
                                                        value="PartTime"
                                                    />
                                                    Part Time
                                                </Label>
                                                <Label
                                                    className="flex items-center gap-2 cursor-pointer"
                                                    htmlFor="Contract">
                                                    <RadioGroupItem
                                                        className="bg-gray-200"
                                                        id="Contract"
                                                        value="Contract"
                                                    />
                                                    Contract
                                                </Label>
                                            </div>
                                        </RadioGroup>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="salary"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Job Salary</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="30,000 - 50,000"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="vacancy"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Vacancy</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="12"
                                                type="number"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="lastDate"
                                render={({ field }) => (
                                    <FormItem className="flex gap-2 flex-col">
                                        <FormLabel>Last Date</FormLabel>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <FormControl>
                                                    <Button
                                                        variant={'outline'}
                                                        className={cn(
                                                            'w-full pl-3 text-left font-normal',
                                                            !field.value &&
                                                                'text-muted-foreground'
                                                        )}>
                                                        {field.value ? (
                                                            format(
                                                                field.value,
                                                                'PPP'
                                                            )
                                                        ) : (
                                                            <span>
                                                                Pick a date
                                                            </span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </FormControl>
                                            </PopoverTrigger>
                                            <PopoverContent
                                                className="w-auto p-0 bg-white shadow-md"
                                                align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={isPending}
                            className="w-full mt-20 bg-blue-500 hover:bg-blue-400"
                            variant="login">
                            {isPending ? 'Posting Job....' : 'Create Job'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateJobForm;
