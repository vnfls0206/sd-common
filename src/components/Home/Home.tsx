import React from 'react';

export interface IHomeProps {
    //children?: React.ReactNode,
}

const Home = ({}: IHomeProps) => {

    return (
        <div>{'홈 입니다.'}</div>
    );
};

export default Home;