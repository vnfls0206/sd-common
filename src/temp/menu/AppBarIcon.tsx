import React from 'react';
import {AppBarProps as MuiAppBarProps} from "@mui/material/AppBar/AppBar";
import {alpha, styled, useTheme} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Avatar, Box, Divider, Stack} from "@mui/material";
import AppBarDropMenu from "./AppBarDropMenu";

export interface IAppBarIconProps {
    //children?: React.ReactNode,
    open: boolean,
    handleDrawerOpen: () => void,
    drawerWidth: number,
    position: any,
    stringToColor: Function,
    stringAvatar: Function,
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const AppBarIcon = (
    {
        open,
        handleDrawerOpen,
        drawerWidth,
        position,
        stringToColor,
        stringAvatar,
    }: IAppBarIconProps) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({theme, open}) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        console.log("event.currentTarget", event.currentTarget);

        setAnchorEl(event.currentTarget);
    };
    return (
        <React.Fragment>
            <AppBar
                position={position}
                open={open}
                sx={{
                    boxShadow: "0",
                    backgroundColor: "#fff",
                }}
            >
                <Toolbar
                    className={''}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon color="disabled"/>
                    </IconButton>
                    <Box sx={{flexGrow: 1}}/>
                    <Box>
                        <Stack direction="row" spacing={2}>
                            <Avatar className={'text-sm'}
                                    {...stringAvatar('김재현')}
                                    onClick={handleProfileMenuOpen}
                            />
                        </Stack>
                    </Box>
                </Toolbar>
                <Divider/>
            </AppBar>
            <AppBarDropMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </React.Fragment>
    );
};


AppBarIcon.defaultProps = {};

export default AppBarIcon;