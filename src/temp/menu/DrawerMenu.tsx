import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import {CSSObject, styled, Theme, useTheme} from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {Box} from "@mui/material";
import {IMenuItem} from "../../modules/routing/menu";
import logo from '../../image/logo.png'
import MenuCategory from "./MenuCategory";
import NotOpenedSideSubMenu from "./NotOpenedSideSubMenu";
import {IBreadCrumble} from "../../modules/routing/helpers/getBreadCrumbleRoute";

export interface IDrawerProps {
    //children?: React.ReactNode,
    drawerWidth: number,
    open: boolean,
    subOpen: any,

    setSubOpen: any,
    setSaveSubOpen: any,

    handleDrawerClose: () => void,

    menu: IMenuItem[],
    adminMenu: IMenuItem[],
    menuOnClickHandler: Function,

    stringToColor: Function,
    stringAvatar: Function,
    breadCrumble: Array<IBreadCrumble>

}

const DrawerMenu = (
    {
        drawerWidth,
        open,
        subOpen,

        setSubOpen,
        setSaveSubOpen,

        handleDrawerClose,

        menu,
        adminMenu,
        menuOnClickHandler,
        breadCrumble,

        stringToColor,
        stringAvatar,
    }: IDrawerProps) => {
    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));
    const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
        ({theme, open}) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );


    const theme = useTheme();
    /**
     * open : sidebar 전체 메뉴 (depth1)
     * subOpen : menu 중 하위 메뉴 존재 (depth2)
     * saveSubOpen : sub-menu 중 open 되어 있는 것(re-open 시 보이도록)
     * selected : depth 1 중 선택된 메뉴
     * saveSubSelected : depth2 중 선택된 메뉴
     * sideOpen : mini-menu sidebar
     */
    const [selected, setSelected] = useState(breadCrumble[0]?.key || '');
    const [subSelected, setSubSelected] = useState(breadCrumble[1]?.key || '');
    const [sideOpen, setSideOpen] = useState(false);
    const [positionY, setPositionY] = useState<number>(0);
    const [sideKey, setSideKey] = useState(breadCrumble[0]?.key || '');

    const handleClick = (list: any) => {
        const {key, children} = list;

        if (children.length) { //서브메뉴 있을 때
            setSubOpen({
                ...subOpen,
                [key]: !subOpen[key],
            });
            if (open) {
                setSubSelected('');
            }
            setSaveSubOpen(subOpen);
            return;
        }

        setSelected(key);
        setSubSelected('');

    };

    const handleSubSelect = (listKey: string, childKey: string) => {
        setSelected(listKey);
        setSubSelected(childKey);
    }

    const handleOver = (key: string, event: any) => {
        setSideOpen(true);
        if (sideKey === key) {

        } else {
            if(!open){
                setSideKey(key);
                setPositionY(event.target.getBoundingClientRect().top);
            }
        }
    }

    const handleLeave = () => {
        setSideOpen(false);
    }

    // useEffect(() =>{
    //     console.log("subOpen", subOpen);
    // }, [subOpen]);


    return (
        <React.Fragment>
            <Drawer
                variant="permanent"
                open={open}

                sx={{
                    maxWidth: 270,
                    flexShrink: 0,
                    whiteSpace: 'nowrap',
                    '& .MuiDrawer-paper': {
                        maxWidth: 270,
                        boxSizing: 'border-box',
                    },
                }}

                //componentsProps={c}
            >

                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerClose}
                        className={'hover:bg-transparent mb-2'}
                    >
                        {
                            open ?
                                (<Box className={'px-4 pt-2.5'}>
                                    <img className={'w-28 ml-2 mt-2'} src={logo}/>
                                </Box>)
                                :
                                (<ChevronRightIcon color="disabled"/>)
                        }
                    </IconButton>
                </DrawerHeader>

                <MenuCategory
                    menu={menu}
                    handleClick={handleClick} menuOnClickHandler={menuOnClickHandler}
                    handleOver={handleOver} handleSubSelect={handleSubSelect}
                    selected={selected} subSelected={subSelected} open={open} subOpen={subOpen}
                />
                <Divider/>
                <MenuCategory
                    menu={adminMenu}
                    handleClick={handleClick} menuOnClickHandler={menuOnClickHandler}
                    handleOver={handleOver} handleSubSelect={handleSubSelect}
                    selected={selected} subSelected={subSelected} open={open} subOpen={subOpen}
                />
                <Divider/>
            </Drawer>
            {
                !open && sideOpen &&
                <NotOpenedSideSubMenu
                    menu={menu} open={open} positionY={positionY}
                    subSelected={subSelected} sideKey={sideKey}
                    handleSubSelect={handleSubSelect} menuOnClickHandler={menuOnClickHandler}
                    handleLeave={handleLeave} handleClick={handleClick}/>
            }
            {
                !open && sideOpen &&
                <NotOpenedSideSubMenu
                    menu={adminMenu} open={open} positionY={positionY}
                    subSelected={subSelected} sideKey={sideKey}
                    handleSubSelect={handleSubSelect} menuOnClickHandler={menuOnClickHandler}
                    handleLeave={handleLeave} handleClick={handleClick}/>
            }

        </React.Fragment>
    );
};

export default DrawerMenu;