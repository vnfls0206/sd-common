import React from 'react';
import {IBreadCrumble} from "../../modules/routing/helpers/getBreadCrumbleRoute";
import Menu from "../../temp/menu/Menu";

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
        <Menu breadCrumble={breadCrumble}/>
    );
};

export default Header;