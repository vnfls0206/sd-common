import React from 'react';
import {IBreadCrumble} from "../../modules/routing/helpers/getBreadCrumbleRoute";

export interface IHeaderProps {
    pathName: string,
    breadCrumble: Array<IBreadCrumble>
}

const Header = (
    {
        pathName,
        breadCrumble
    } : IHeaderProps
) => {

    return (
        <div></div>
        //<Menu breadCrumble={breadCrumble}/>
    );
};

export default Header;