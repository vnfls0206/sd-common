import React from 'react';

interface IPageTitleProps {
    //children?: React.ReactNode,
    pageTitle:string,
}

const PageTitle = (
    {
        pageTitle,
    }: IPageTitleProps) => {

    return (
        <React.Fragment>
            <div>{'mvvaa'}</div>
            <h2 className={'text-2xl opacity-80 mt-7 mb-5'}>
                {pageTitle}
            </h2>
        </React.Fragment>
    );
};


export default PageTitle;