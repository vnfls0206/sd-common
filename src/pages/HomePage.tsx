import React from 'react';
import Home from "../components/Home/Home";


export interface IHomePageProps {
}

const HomePage = ({}: IHomePageProps) => {

    return (
        <Home/>

    );
};


HomePage.defaultProps = {};

export default HomePage;