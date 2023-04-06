import React from 'react';

export interface ITestDivProps {
    //children?: React.ReactNode,
}

const TestDiv = (
    {}: ITestDivProps
) => {

    return (
        <div>
            {'test'}
        </div>
    );
};

export default TestDiv;