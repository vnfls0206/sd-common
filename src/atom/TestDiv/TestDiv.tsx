import React from 'react';

export interface ITestDivProps {
    //children?: React.ReactNode,
}

const TestDiv = (
    {}: ITestDivProps
) => {

    return (
        <div>
            {'z'}
        </div>
    );
};

export default TestDiv;