import { useQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';

const UseQuery = (key: string, query: any) => {
    const { data, isError, isLoading, error } = useQuery({
        queryKey: [`${key}`],
        queryFn: async () => {
            try {
                const response = await request(
                    `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt:8000/graphiql/`,
                    query
                );
                return response;
            } catch (error) {
                throw new Error('Failed to fetch data');
            }
        },
    });

    return { data, isError, isLoading, error };
};

export default UseQuery;
