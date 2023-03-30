import React, {useState} from 'react';
import {MenuItem, MenuList, Paper} from "@mui/material";
import {IMenuItem} from "../../modules/routing/menu";


export interface INotOpenedSideSubMenuProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],

    open: boolean,
    positionY: number,
    subSelected: any,
    sideKey: any,

    handleClick:Function,
    handleLeave: () => void,
    handleSubSelect:Function,
    menuOnClickHandler: Function,
}

const NotOpenedSideSubMenu = (
    {
        menu,

        open,
        positionY,
        subSelected,
        sideKey,

        handleClick,
        handleSubSelect,
        handleLeave,
        menuOnClickHandler,
    }: INotOpenedSideSubMenuProps) => {


    return (
        <>
            {
                menu.map((list, index) => (
                        list.children.length > 0 && list.key === sideKey &&
                        <Paper
                            key={list.key}
                            onMouseLeave={handleLeave}
                            sx={{
                                zIndex: '9999',
                                width: '200px',
                                position: 'absolute',
                                top: positionY,
                                left: '65px'
                            }}>
                            <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                            >
                                {list.children.map((child, index) => (
                                    <MenuItem
                                        key={child.key}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSubSelect(list.key, child.key);
                                            handleClick(list);
                                            menuOnClickHandler(child)
                                        }}
                                        selected={child.key === subSelected}
                                    >{child.title}</MenuItem>
                                ))}
                            </MenuList>

                        </Paper>
                    )
                )
            }
        </>
)};


NotOpenedSideSubMenu.defaultProps = {};

export default NotOpenedSideSubMenu;