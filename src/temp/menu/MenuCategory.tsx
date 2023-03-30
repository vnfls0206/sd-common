import React from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Collapse from "@mui/material/Collapse";
import {IMenuItem} from "../../modules/routing/menu";


export interface IMenuCategoryProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],

    handleClick:Function,
    menuOnClickHandler:Function,
    handleOver: Function,
    handleSubSelect: Function,

    selected: any,
    subSelected: any,

    open: boolean,
    subOpen: any,


}

const MenuCategory = (
    {
        menu,

        handleClick,
        menuOnClickHandler,
        handleOver,
        handleSubSelect,

        selected,
        subSelected,

        open,
        subOpen,
    }: IMenuCategoryProps) => {

    return (
        <React.Fragment>
            <List>
                {menu.map((list, index) => (
                    <ListItem
                        key={list.key}
                        button
                        disableRipple
                        disablePadding
                        onClick={() => {
                            handleClick(list)
                            menuOnClickHandler(list)
                        }}
                        onMouseOver={(event) => {
                            handleOver(list.key, event)
                        }}
                        className={'py-0.5'}
                        sx={{
                            px: open ? 0.5 : 1,
                            display: "block",
                            "&:hover": {
                                backgroundColor: 'transparent'
                            },
                            // transition:"background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                            "&& > .Mui-selected": {
                                borderRadius: "0.75rem",
                                backgroundColor: "rgba(32, 101, 209, 0.08)",
                                color: "rgb(32, 101, 209)",
                                fontWeight: "bold",
                            },
                            "&& > .Mui-selected span": {
                                fontWeight: "bold",
                            },
                            "&& > .Mui-selected > div >  svg": {
                                color: "rgb(32, 101, 209)",
                            },
                        }}
                    >
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? "initial" : "center",
                                px: 2.5,
                                py: 0.5,
                                "&:hover": {
                                    backgroundColor: 'rgba(145, 158, 171, 0.15)',
                                    borderRadius: "0.75rem",
                                },

                            }}
                            selected={list.key === selected}

                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : "auto",
                                    justifyContent: "center",
                                }}
                            >
                                <list.icon fontSize="small"/>
                            </ListItemIcon>
                            <ListItemText
                                primary={list.title}
                                sx={{
                                    opacity: open ? 1 : 0,
                                    fontSize: '14px',
                                }}
                            />
                            {
                                list.children.length > 0 && (open && (subOpen[list.key] ? <ExpandMore/> :
                                    <KeyboardArrowRightIcon/>))
                            }
                        </ListItemButton>
                        {
                            list.children.length > 0 &&
                            <Collapse in={open && subOpen[list.key]}
                                      timeout="auto"
                                      unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {list.children.map(
                                        (child, index) => {
                                            const {icon: Icon} = child;
                                            return <ListItem
                                                sx={{
                                                    pl: 2.5,
                                                    "&&.Mui-selected": {
                                                        backgroundColor: "transparent",
                                                        //color:"rgb(32, 101, 209)",
                                                    },
                                                    "&&.Mui-selected span": {
                                                        fontWeight: "600",
                                                    },
                                                    "&&.Mui-selected > div >  svg": {
                                                        color: "rgb(32, 101, 209)",
                                                    },
                                                }}
                                                key={child.key}
                                                button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSubSelect(list.key, child.key);
                                                    menuOnClickHandler(child);
                                                }}
                                                selected={child.key === subSelected}
                                                disableRipple
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        minWidth: 0,
                                                        mr: open ? 3 : "auto",
                                                        justifyContent: "center"
                                                    }}
                                                >
                                                    <Icon fontSize="small" className={'p-[7px]'}/>
                                                </ListItemIcon>
                                                <ListItemText primary={child.title}/>
                                            </ListItem>
                                        })}
                                </List>
                            </Collapse>
                        }
                    </ListItem>
                ))}
            </List>

        </React.Fragment>
    );
};


MenuCategory.defaultProps = {};

export default MenuCategory;