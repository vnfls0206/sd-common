import React from 'react';
import NotFound from "../pages/NotFound";
import loadable from "@loadable/component";
import Loader from "../components/layout/loading/PageLoader";
import CustomErrorBoundary from '../modules/error/CustomErrorBoundary';

export interface IErrorBoundaryContainerProps {
    //children?: React.ReactNode,
}


const AppContainer = loadable(() => import('./AppContainer'), {fallback: <Loader/>});


const ErrorBoundaryContainer = (
    {

    }: IErrorBoundaryContainerProps
) => {

    return (
        <CustomErrorBoundary
            fallback={()=> <NotFound/>}
            onError={error => console.log(error)}
        >
            <AppContainer/>
        </CustomErrorBoundary>
    );
};

export default ErrorBoundaryContainer;