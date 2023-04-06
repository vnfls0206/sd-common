import React from 'react';

export interface ITestDivProps {
    //children?: React.ReactNode,
}

const TestDiv = (
    {}: ITestDivProps
) => {

    return (
        <div>
            {'aaa'}
        </div>
    );
};

export default TestDiv;