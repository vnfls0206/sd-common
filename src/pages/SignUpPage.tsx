import React from 'react';
import SignUp from "../components/auth/SignUp";


export interface ISignUpPageProps {
}

const SignUpPage = (
    {

    }: ISignUpPageProps
) => {

    return <SignUp/>;
};


SignUpPage.defaultProps = {};

export default SignUpPage;