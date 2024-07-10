import * as z from 'zod';
export const RegisterSchema = z
    .object({
        email: z.string().email({
            message: 'Please enter a valid email address',
        }),
        password: z.string().min(8, {
            message: 'Password must be at least 8 characters long.',
        }),
        password2: z.string().min(8, {
            message: 'Password must be at least 8 characters long.',
        }),
        role: z.enum(['employer', 'employee']),
    })
    .refine((data) => data.password === data.password2, {
        message: 'Passwords do not match',
        path: ['password2'],
    });

// export const EmployerRegisterSchema = z.object({
//     companyName: z.string().min(1, 'Company Name is required.'),
//     companyAddress: z.string().min(1, 'Company Address is required.'),
//     email: z.string().email({
//         message: 'Please enter a valid email address',
//     }),
//     password1: z.string().min(8, {
//         message: 'Password must be at least 8 characters long.',
//     }),
//     password2: z.string().min(8),
// });

export const LoginSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long.',
    }),
});

export const CreateJobSchema = z.object({
    name: z.string().min(1, 'Name is required').max(255, 'Name is too long'),
    location: z
        .string()
        .min(1, 'Location is required')
        .max(255, 'Location is too long'),
    website: z.string({
        required_error: 'Website is required',
        invalid_type_error: 'Website must be a string',
    }),
    title: z.string().min(1, 'Title is required').max(255, 'Title is too long'),
    salary: z.coerce
        .number({
            required_error: 'Salary is required',
            invalid_type_error: 'Salary must be a  number',
        })
        .int()
        .min(1, 'Salary must be a positive number'),
    type: z.enum(['FullTime', 'PartTime', 'Contract']),
    category: z.enum([
        'Agriculture',
        'Construction',
        'HospitalityAndTourism',
        'RetailAndConsumerGoods',
        'FacilityManagementAndSupportServices',
        'TransportationAndLogistics',
    ]),
    lastDate: z
        .date({
            required_error: 'Date is required',
            invalid_type_error: 'Date must be a date',
        })
        .min(new Date(), 'Last date must be a future date'),
    description: z.string().min(1, 'Description is required'),
    vacancy: z.coerce
        .number({
            required_error: 'Vacancy is required',
            invalid_type_error: 'Vacancy must be a number',
        })
        .int()
        .min(1, 'Vacancy must be a positive number'),
});
