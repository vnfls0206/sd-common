import React, {ReactNode, useState} from 'react';
import {ErrorBoundary, ErrorBoundaryPropsWithFallback, FallbackProps} from "react-error-boundary";

export interface ICustomErrorBoundaryProps extends Omit<ErrorBoundaryPropsWithFallback, 'fallback'>
{
    fallback: (data: FallbackProps) => React.ReactElement,
    isRefresh?: boolean;
    onError?: (error: Error, info: { componentStack: string }) => void;
    children?: ReactNode;
}

const CustomErrorBoundary = (
    {
        fallback,
        isRefresh,
        onError,
        children,
        ...errorBoundaryProps
    }: ICustomErrorBoundaryProps
) => {
    const [refresh, setRefresh] = useState<boolean>(false);

    return (
        <ErrorBoundary
            FallbackComponent={props => fallback(props)}
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

export default CustomErrorBoundary;