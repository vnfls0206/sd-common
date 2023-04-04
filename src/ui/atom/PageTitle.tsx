import React from 'react';
import {IPageTitleProps} from "../../types/atom/pageTitle";

const PageTitle = (
    {
        pageTitle,
    }: IPageTitleProps) => {

    return (
        <React.Fragment>
            <div>{'싫어싫'}</div>
            <h2 className={'text-2xl opacity-80 mt-7 mb-5'}>
                {pageTitle}
            </h2>
        </React.Fragment>
    );
};

어
export default PageTitle;