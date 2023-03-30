import {IRoutes} from "../routes";
import * as Path from "../path";

export const getPrivilegeRoute = (parentPath: string, privilege: string[], routes: IRoutes[]): IRoutes[] => {
    let result: IRoutes[] = [];

    for(let route of routes){
        if(route.children.length > 0){
            const parent = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
            result.push(...getPrivilegeRoute(parent, privilege, route.children));
        }

        if(!route.privilege.length || privilege.includes(route.privilege)){
            const path = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
            const subRoute: IRoutes = {
                title: route.title,
                path: path,
                component: route.component,
                privilege: route.privilege,
                children: route.children,
            };
            result.push(subRoute);
        }
    }
    return result;
}