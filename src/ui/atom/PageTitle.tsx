import React from 'react';

export interface IPageTitleProps {
    //children?: React.ReactNode,
    pageTitle:string,
}

const PageTitle = (
    {
        pageTitle,
    }: IPageTitleProps) => {

    return (
        <React.Fragment>
            <div>{'mv test'}</div>
            <h2 className={'text-2xl opacity-80 mt-7 mb-5'}>
                {pageTitle}
            </h2>
        </React.Fragment>
    );
};


export default PageTitle;