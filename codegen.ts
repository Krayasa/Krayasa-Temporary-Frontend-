import { CodegenConfig } from '@graphql-codegen/cli';

// Configuration for a React URQL setup
const config: CodegenConfig = {
    schema: 'http://localhost:8083/wt/graphql/',
    documents: './app/**/*.{ts,gql}',
    generates: {
        'types/types.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-urql'],
            config: { withHooks: true },
        },
    },
};
export default config;
