import React from 'react';
import {IPageTitleProps} from "../../types/atom/pageTitle";

const PageTitle = (
    {
        pageTitle,
    }: IPageTitleProps) => {

    return (
        <React.Fragment>
            <div>{'wqeweqw'}</div>
            <h2 className={'text-2xl opacity-80 mt-7 mb-5'}>
                {pageTitle}
            </h2>
        </React.Fragment>
    );
};


export default PageTitle;