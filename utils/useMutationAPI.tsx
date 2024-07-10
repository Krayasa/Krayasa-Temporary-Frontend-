// import { useMutation } from '@tanstack/react-query';
// import { request } from 'graphql-request';
// import { login } from '../action/login';

// const UseMutation = (key: string, query: any, variables: any) => {
//     return useMutation({
//         mutationKey: [`${key}`],
//         mutationFn: async (variables: any) => {
//             try {
//                 // Execute mutation using graphql-request and return the result
//                 const response = await request(
//                     `http://localhost:8083/wt/graphql/`,
//                     query,
//                     variables
//                 );
//                 console.log(response);
//                 return response;
//             } catch (error) {
//                 throw new Error('Failed to mutate data');
//             }
//         },
//         onSuccess: async (data: any, variables) => {
//             const values = {
//                 email: variables.email,
//                 password: variables.password1,
//             };
//             if (data.employeeRegister.success == true) {
//                 console.log('Mutation successful:', data);
//                 console.log(values);
//                 await login(values);
//             } else {
//                 console.log('Mutation unsuccessful:', data);
//             }
//         },
//     });
// };

// export default UseMutation;
