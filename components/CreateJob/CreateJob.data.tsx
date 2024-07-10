// import { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { z } from 'zod';
// import { CreateJobSchema } from '../../schemas/index';
// import Swal from 'sweetalert2';

// const JobFormData = (token: string) => {
//     const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 3000,
//         timerProgressBar: true,
//         didOpen: (toast) => {
//             toast.addEventListener('mouseenter', Swal.stopTimer);
//             toast.addEventListener('mouseleave', Swal.resumeTimer);
//         },
//     });

//     const [isPending, setIsPending] = useState<boolean>(false);
//     const [date, setDate] = useState<Date | undefined>(new Date());
//     const form = useForm<z.infer<typeof CreateJobSchema>>({
//         resolver: zodResolver(CreateJobSchema),
//     });

//     const onSubmit = async (values: z.infer<typeof CreateJobSchema>) => {
//         console.log('clicked');
//         setIsPending(true);

//         const formData = {
//             tags: [1],
//             title: values.title,
//             description: values.description,
//             location: values.location,
//             type: values.type,
//             category: values.category,
//             last_date: values.lastDate,
//             company_name: values.name,
//             company_description: values.description,
//             website: values.website,
//             salary: values.salary,
//             vacancy: values.vacancy,
//         };
//         console.log(formData);


//         try {
//             const response = await fetch(
//                 `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/employer/jobs/create/`,
//                 {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         Authorization: `Bearer ${token}`,
//                     },
//                     body: JSON.stringify(formData), // Convert formData to JSON string
//                 }
//             );
//             if (response.ok) {
//                 Toast.fire({
//                     icon: 'success',
//                     text: 'Your Job has been posted Successfully!',
//                 });
//             } else {
//                 Toast.fire({
//                     title: 'Oops...',
//                     text: 'Something went wrong!',
//                     icon: 'error',
//                 });
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             Toast.fire({
//                 title: 'Oops...',
//                 text: 'Something went wrong!',
//                 icon: 'error',
//             });
//         } finally {
//             setIsPending(false);
//         }
//     };

//         try {
//            const response = await fetch(
//                'http://localhost:8083/wt/api/employer/jobs/create/',
//                {
//                    method: 'POST',
//                    headers: {
//                        'Content-Type': 'application/json',
//                        Authorization: `Bearer ${token}`,
//                    },
//                    body: JSON.stringify(formData),
//                }
//            );
//            console.log(await response.json());


//     return {
//         form,
//         onSubmit,
//         isPending,
//         date,
//         setDate,
//         token,
//     };
//     // return true;
// };

// export default JobFormData;
