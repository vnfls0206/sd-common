import React, {ReactComponentElement} from 'react';
import * as Path from './path';
import {Home, NotFound, SignIn, Test} from './componentLoader';


export interface IRoutes {
    title: string,
    pageTitle?: string,
    path: string,
    component: ReactComponentElement<any>,
    privilege: string,
    children: IRoutes[],
}


const routes: IRoutes[] = [
    {
        title: 'Home',
        pageTitle: 'DashBoard',
        path: Path.HOME_PATH,
        component: <Home/>,
        privilege: '',
        children: [],
    },
    {
        title: 'SignIn',
        pageTitle: 'SignIn',
        path: Path.SIGN_IN_PATH,
        component: <SignIn/>,
        privilege: '',
        children: []
    },

    {
        title: 'TestPage',
        pageTitle: '테스트 페이지',
        path: Path.TEST_PATH,
        component: <Test/>,
        privilege: '',
        children: []
    },
    {
        title: 'Not Found',
        pageTitle: 'Not Found',
        path: Path.All_PATH,
        component: <NotFound/>,
        privilege: '',
        children: [],
    },


];

export default routes;