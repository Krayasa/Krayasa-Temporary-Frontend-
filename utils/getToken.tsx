// import { useEffect, useState } from 'react';
// import { auth } from '../auth';

// export default function useAuthToken() {
//     const [token, setToken] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchToken = async () => {
//             try {
//                 const session = await auth();
//                 setToken(session?.sessionToken || null);
//             } catch (error) {
//                 console.error('Error getting token:', error);
//                 setToken(null);
//             }
//         };

//         fetchToken();

//         // Clean-up function if needed
//         return () => {
//             // Any clean-up code here if required
//         };
//     }, []);

//     return token;
// }
