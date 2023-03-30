import React from 'react';
import loadable from '@loadable/component';
import PageLoader from "../../components/layout/loading/PageLoader";

export const Home = loadable(() => import('../../pages/HomePage'), {fallback:<PageLoader/>});
export const NotFound = loadable(() => import('../../pages/NotFound'), {fallback: <PageLoader/>});
export const Test = loadable(() => import('../../pages/TestPage'), {fallback: <PageLoader/>});

export const SignIn = loadable(() => import('../../pages/SignInPage'), {fallback:<PageLoader/>});
export const SignUp = loadable(() => import('../../pages/SignUpPage'), {fallback:<PageLoader/>});


