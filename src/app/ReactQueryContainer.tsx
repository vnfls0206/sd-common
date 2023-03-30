import React from "react";
import loadable from '@loadable/component';
import Loader from "../components/layout/loading/PageLoader";
import {QueryClientProvider, QueryClient} from 'react-query';



const TailwindContainer = loadable(() => import('./TailwindContainer'), {fallback: <Loader/>});

export const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
        queries: {
            useErrorBoundary: error => false,        //error 메세지가 token expired 가 아닐때 해줄것

        },
        mutations: {
            useErrorBoundary: error => false
        }
    }
});

export default () => (
    <QueryClientProvider client={queryClient}>
        <TailwindContainer/>
    </QueryClientProvider>

);
