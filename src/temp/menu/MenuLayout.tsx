import React, {useState} from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import {IMenuItem} from '../../modules/routing/menu';
import {useNavigate} from "react-router-dom";
import AppBarIcon from "./AppBarIcon";
import DrawerMenu from "./DrawerMenu";
import {useEventListener} from "usehooks-ts";
import {debounce} from 'lodash'
import {IBreadCrumble} from "../../modules/routing/helpers/getBreadCrumbleRoute";

export interface IMenuLayoutProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],
    adminMenu: IMenuItem[],
    menuOnClickHandler: Function,
    breadCrumble: Array<IBreadCrumble>

    // role: string,
}

const drawerWidth = 270;

const MenuLayout = (
    {
        menu,
        adminMenu,
        menuOnClickHandler,
        breadCrumble
        // role,
    }: IMenuLayoutProps) => {
        const navigate = useNavigate();

        /**
         * open : sidebar 전체 메뉴 (depth1)
         * subOpen : menu 중 하위 메뉴 존재 (depth2)
         * saveSubOpen : sub-menu 중 open 되어 있는 것(re-open 시 보이도록)
         */

        const [open, setOpen] = useState(true);
        const [subOpen, setSubOpen] = useState<any>(breadCrumble[0] ? {[breadCrumble[0].key]: true} : []);
        const [saveSubOpen, setSaveSubOpen] = useState<any>([]);

        useEventListener('resize', debounce(() => {
            if (window.innerWidth <= 1440) {
                handleDrawerClose();
            }
        }, 50))

        const handleDrawerOpen = () => {
            setOpen(true);
            setSubOpen(saveSubOpen);
        };

        const handleDrawerClose = () => {
            setOpen(false);
            setSaveSubOpen(subOpen);
            //setSubOpen(false);
        };

        const stringToColor = (string: string) => {
            let hash = 0;
            let i;

            /* eslint-disable no-bitwise */
            for (i = 0; i < string.length; i += 1) {
                hash = string.charCodeAt(i) + ((hash << 5) - hash);
            }

            let color = '#';

            for (i = 0; i < 3; i += 1) {
                const value = (hash >> (i * 8)) & 0xff;
                color += `00${value.toString(16)}`.slice(-2);
            }
            /* eslint-enable no-bitwise */

            return color;
        }

        const stringAvatar = (name: string) => {
            return {
                sx: {
                    bgcolor: stringToColor(name),
                },
                children: `${name.substr(1, 2)}`,
            };
        }


        const [windowSize, setWindowSize] = useState({
            width: window.innerWidth,
        });


        // console.log("windowSize.width", windowSize.width);


        // useEffect(() => {
        //     if (windowSize.width <= 1400) {
        //         window.addEventListener("resize", () => {
        //             setWindowSize({
        //                 width: window.innerWidth,
        //             });
        //         });
        //
        //         const time = setTimeout(() => {
        //             // console.log("window.innerWidth", window.innerWidth);
        //             setWindowSize({
        //                 width: window.innerWidth,
        //             });
        //         }, 0.0000000000000000001);
        //
        //         return () => {
        //             window.removeEventListener('resize', () => {
        //                 setWindowSize({
        //                     width: window.innerWidth,
        //                 });
        //             });
        //             clearTimeout(time);
        //         };
        //     }
        // }, []);

        // useEffect(() => {
        //     console.log("windowSize", windowSize);
        // }, [windowSize]);

        // useEffect(() => {
        //     console.log("saveSubOpen", saveSubOpen);
        // }, [saveSubOpen]);

        return (
            <>
                <CssBaseline/>
                <AppBarIcon
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                    position={"fixed"}
                    drawerWidth={drawerWidth}
                    stringAvatar={stringAvatar}
                    stringToColor={stringToColor}
                />
                <DrawerMenu
                    drawerWidth={drawerWidth}
                    menu={menu} adminMenu={adminMenu}
                    open={open} subOpen={subOpen}
                    setSubOpen={setSubOpen} setSaveSubOpen={setSaveSubOpen}
                    stringAvatar={stringAvatar}
                    stringToColor={stringToColor}
                    handleDrawerClose={handleDrawerClose} menuOnClickHandler={menuOnClickHandler}
                    breadCrumble={breadCrumble}
                />
            </>
        );
    }
;


MenuLayout.defaultProps = {};

export default MenuLayout;