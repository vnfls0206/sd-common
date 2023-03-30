import React from 'react';
import {useNavigate} from "react-router-dom";
import {usePrivilege} from "../../modules/auth/state";
import menu, {IMenuItem} from "../../modules/routing/menu";
import adminMenu from "../../modules/routing/adminMenu";
import MenuLayout from "./MenuLayout";
import {IBreadCrumble} from "../../modules/routing/helpers/getBreadCrumbleRoute";
import structure from "../../util/structure";



export interface IMenuProps {
    //children?: React.ReactNode,
    breadCrumble: Array<IBreadCrumble>
}

const Menu = (
    {
        breadCrumble
    }: IMenuProps
) => {

    const navigate = useNavigate();
    const privilege = usePrivilege();

    const atom = import.meta.glob('../atom/*.tsx')

    console.log(atom);



    const menuOnClickHandler = (item: IMenuItem ) => {
        //console.log("item", item);

        if(item.key === 'client' ||
            item.key === 'calculate' ||
            item.key === 'billing' ||
            item.key === 'ProjectManagement' ||
            item.key === 'AdminMenu'
        ){

        }else{
            navigate(item.path);
        }
    }

    return (
        <div>
            {atom[0]}
            <MenuLayout
                //menu={getPrivilegeMenu(privilege, menu)}
                //adminMenu={getPrivilegeMenu(privilege, adminMenu)}
                menu={menu}
                adminMenu={adminMenu}
                menuOnClickHandler={menuOnClickHandler}
                breadCrumble={breadCrumble}
            />
        </div>

    );
};

export default Menu;