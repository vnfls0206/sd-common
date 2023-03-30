import React from 'react';
import {Divider, Menu, MenuItem} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";


export interface IAppBarDropMenuProps {
    //children?: React.ReactNode,
    anchorEl:HTMLElement | null,
    setAnchorEl:any,
}

const AppBarDropMenu = (
    {
        anchorEl,
        setAnchorEl,
    }: IAppBarDropMenuProps) => {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
    return (
        <React.Fragment>
            <Menu
                className={'top-12 absolute'}
                // anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                // id={menuId}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={isMenuOpen}
                onClose={handleMenuClose}
            >
                <MenuItem
                    className={'flex-col py-0 hover:bg-transparent active:bg-transparent focus:bg-transparent cursor-default '}>
                    <div className={'w-full py-0.5 px-1.5 my-3 font-bold text-lg'}>
                        <div className={'flex'}>
                            <div className={'font-normal mr-2'}>관리자</div>
                            김재현
                        </div>
                        <span className={'font-normal text-base text-gray-500'}>vnfls0206@naver.com</span>
                    </div>
                </MenuItem>
                <Divider/>
                <MenuItem
                    className={'w-52 py-2'}
                    onClick={handleMenuClose}>
                    <PersonIcon  className={'text-neutral-500'}/>
                    <span className={'pl-2'}>내정보관리</span>
                </MenuItem>
                <MenuItem
                    className={'py-2'}
                    onClick={handleMenuClose}>
                    <LogoutIcon className={'text-neutral-500'}/>
                    <span className={'pl-2'}>로그아웃</span>
                </MenuItem>
            </Menu>

        </React.Fragment>
    );
};


AppBarDropMenu.defaultProps = {};

export default AppBarDropMenu;