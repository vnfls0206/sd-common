import React from 'react';
import {IPageTitleProps} from "../../types/atom/";

const PageTitle = (
    {
        pageTitle,
    }: IPageTitleProps) => {

    return (
        <React.Fragment>
            <div>{'오늘은 점심'}</div>
            <h2 className={'text-2xl opacity-80 mt-7 mb-5'}>
                {pageTitle}
            </h2>
        </React.Fragment>
    );
};


export default PageTitle;