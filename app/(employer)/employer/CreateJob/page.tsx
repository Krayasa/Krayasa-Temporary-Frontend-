import CreateJobForm from '../../../../components/CreateJob/CreateJob';
import { auth } from '../../../../auth';

interface CustomSession {
    user: { email: string; role: string };
    expires: string;
    sessionToken: string;
}

export default async function CreateJob() {
    const session = await auth();
    // Cast session to CustomSession type or define a custom type for it
    return <CreateJobForm token={(session as CustomSession)?.sessionToken} />;
}
