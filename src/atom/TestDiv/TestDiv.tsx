import React from 'react';

export interface ITestDivProps {
    //children?: React.ReactNode,
}

const TestDiv = (
    {}: ITestDivProps
) => {

    return (
        <div>
            {'aa'}
        </div>
    );
};

export default TestDiv;