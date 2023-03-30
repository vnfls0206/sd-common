import React from 'react';
import SignIn from "../components/auth/SignIn";


export interface ISignInPageProps {
}

const SignInPage = ({}: ISignInPageProps) => {

    return (
        <SignIn/>
        );
};


SignInPage.defaultProps = {};

export default SignInPage;