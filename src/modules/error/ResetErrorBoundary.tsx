import React, {ReactNode, useState} from 'react';
import {ErrorBoundary, ErrorBoundaryPropsWithFallback} from "react-error-boundary";

export interface IResetErrorBoundaryProps extends Omit<ErrorBoundaryPropsWithFallback, 'renderFallback'> {
    fallback: React.ReactElement,
    isRefresh?: boolean;
    onError?: (error: Error, info: { componentStack: string }) => void;
    children?: ReactNode;
}

const ResetErrorBoundary = (
    {
        fallback,
        isRefresh,
        onError,
        children,
        ...errorBoundaryProps

    }: IResetErrorBoundaryProps
) => {
    const [refresh, setRefresh] = useState<boolean>(false);

    return (
        <ErrorBoundary

            fallback={fallback}
            resetKeys={[refresh]}
            onError={(error, info) => {
                isRefresh && setRefresh(true);
                onError && onError(error, info);
            }}
            {...errorBoundaryProps}
        >
            {children}
        </ErrorBoundary>
    );
};

export default ResetErrorBoundary;