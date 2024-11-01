import { Typography } from '@mui/material';

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return <Typography color="error">{message}</Typography>;
};

export default ErrorMessage;