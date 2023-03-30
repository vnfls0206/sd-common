import React, {useMemo} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import routes from '../modules/routing/routes';
import * as Path from '../modules/routing/path'
import {getPrivilegeRoute} from '../modules/routing/helpers/getPrivilegeRoute';
import AppLayout from '../components/layout/AppLayout';
import AuthService from '../modules/auth/service';
import {getPrivilegeKeywordArray} from "../modules/routing/helpers/getPrivilegeKeywordArray";
import {usePrivilege, useRole} from "../modules/auth/state";

export interface IRoutesContainerProps {

};

const RoutesContainer: React.FC<IRoutesContainerProps> = (
    {

    },
) => {

    const role = useRole();
    const privilege = usePrivilege();

    const { data, isLoading } = AuthService.getAuthenticated();
    //const { setPrivilegeKeyword } = useAuthAction();


    const roleRoutes = useMemo(() => {
        const privilegeKeyword = getPrivilegeKeywordArray(privilege);
        //setPrivilegeKeyword(privilege);

        return getPrivilegeRoute('/', privilegeKeyword, routes)
    }, [privilege]);

    return (
        <BrowserRouter>
            <AppLayout>
                <Routes>
                    {roleRoutes.map(({ path, component, privilege }) => (
                        AuthService.IsNoneAuthTypeRoute(privilege) ?
                            <Route key={path} path={path} element={component} />
                            :
                            !isLoading && data !== undefined ?
                                <Route key={path} path={path} element={ data ? component : <Navigate replace to={Path.SIGN_IN_PATH}/>} />
                                :
                                <Route key={path} path={path} element={component} />
                        ))
                    }
                </Routes>
            </AppLayout>
        </BrowserRouter>
    );
};

export default RoutesContainer;