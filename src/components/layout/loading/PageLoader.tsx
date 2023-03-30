import React from 'react';

export interface IPageLoaderProps {
    //children?: React.ReactNode,
}

const PageLoader = (
    {

    }: IPageLoaderProps
) => {

    return (
        <div className={'Loader'}>
            <div className={"spinner"}>
                <div className={'loading'}>
                    <span>Loading...</span>
                    <div className="half-spinner"></div>
                </div>
            </div>
        </div>
    );
};

export default PageLoader;