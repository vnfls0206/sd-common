import React from 'react';

export interface ITestDivProps {
    //children?: React.ReactNode,
}

const TestDiv = (
    {}: ITestDivProps
) => {

    return (
        <div>
            {'a'}
        </div>
    );
};

export default TestDiv;