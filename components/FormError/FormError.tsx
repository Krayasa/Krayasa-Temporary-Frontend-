import { ExclamationTriangleIcon } from '@radix-ui/react-icons';

interface FormErrorProps {
    errMsg: string | undefined;
}

export const FormError = ({ errMsg }: FormErrorProps) => {
    if (!errMsg) return null;
    return (
        <div className="errMsgDialouge bg-red-500/15 p-3 rounded-md flex items-center gap-2 text-sm text-red-400 mt-6">
            <ExclamationTriangleIcon className="w-4 h-4" />
            <p>{errMsg}</p>
        </div>
    );
};
