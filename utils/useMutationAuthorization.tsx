// import { useMutation } from '@tanstack/react-query';
// // import { gql, request } from 'graphql-request';

// const UseMutation = (key: string, query: any, formData: any, token: string) => {
//     console.log(token, formData);
//     return useMutation({
//         mutationKey: [`${key}`],
//         mutationFn: async (formData: any) => {
//             try {
//                 const response = await fetch(
//                     'http://localhost:8083/wt/graphql/',
//                     {
//                         method: 'POST',
//                         headers: {
//                             Authorization: 'JWT' + token,
//                         },
//                         body: JSON.stringify({
//                             query: query,
//                             variables: formData,
//                         }),
//                     }
//                 );

//                 const printresponse = await response.json();
//                 console.log('saddddddddddssadsdassasadsa', printresponse);
//             } catch (error) {
//                 throw new Error('Creation failed');
//             }
//         },
//     });
// };

// export default UseMutation;
