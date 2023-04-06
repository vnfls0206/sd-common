import React, {PropsWithChildren, useMemo} from 'react';
import loadable from '@loadable/component';
import PageLoader from './loading/PageLoader';
import {useLocation} from 'react-router-dom';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import {styled} from "@mui/material/styles";

import RouteService from "../../modules/routing/helpers/routeService";
import {getTitleRoute} from "../../modules/routing/helpers/getTitleRoute";
import {getBreadCrumbleRoute} from "../../modules/routing/helpers/getBreadCrumbleRoute";
import BreadCrumble from "../../temp/BreadCrumble";
import Index from "../../ui/atom/PageTitle/PageTitle";
import routes from "../../modules/routing/routes";

import {usePageAction} from "../../modules/page/state";

const Header = loadable(() => import('./Header'), {fallback: <PageLoader/>});
const Footer = loadable(() => import('./Footer'), {fallback: <PageLoader/>});

export interface IAppLayoutProps {
    children: any
}

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));
const AppLayout = (
    {
        children
    }: PropsWithChildren<IAppLayoutProps>
) => {

    const {pathname} = useLocation();
    const {setPageTitle} = usePageAction();

    const pageTitle = useMemo( () => {
        const title = getTitleRoute('/', pathname, routes);
        setPageTitle(title);
        return title;
    }, [pathname]);

    const breadCrumble = useMemo( () =>
        getBreadCrumbleRoute('/', pathname, routes), [pathname],
    );

    return (
        <React.Fragment>
            {/*<GlobalComponents/>*/}
            {!RouteService.IsNoneAuthPage(pathname)
                ?
                <Box sx={{display: 'flex',}}>
                    <CssBaseline/>
                    <Header pathName={pathname} breadCrumble={breadCrumble}/>
                    <Box component="main" sx={{width: 1, height: '100vh', position: 'relative'}}>
                        <Box className={'flex flex-col items-center'} sx={{
                            flexGrow: 0, px: 2, py: 3, minHeight: '100%', height: 'auto',
                            // paddingBottom:'100px'
                        }}>
                            <DrawerHeader/>
                            <div className={'max-w-[124rem] w-full'}>
                                <div className={'ml-2'}>
                                    <Index
                                        pageTitle={pageTitle}
                                    />
                                    <BreadCrumble
                                        breadCrumble={breadCrumble}
                                    />
                                </div>
                                <div className={'flex justify-start w-full'}>
                                    {children}
                                </div>

                            </div>
                        </Box>
                        {/*<Footer pathName={pathname}/>*/}
                    </Box>
                </Box>
                :
                <div>
                    {children}
                </div>
            }
        </React.Fragment>
    );
};

export default AppLayout;


