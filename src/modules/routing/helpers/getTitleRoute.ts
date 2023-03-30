import {IRoutes} from "../routes";

export interface IPageTitle {
    pageTitle:string,
}

export const getTitleRoute = (parentPath: string, pathName: string, routes: IRoutes[]):string => {
    let result:string = '';

    for(let route of routes){
        if(route.children.length > 0){
            route.children.map( (list, index) => {
                const path = `${route.path}/${list.path}`;
                if(path === pathName){
                    result = list?.pageTitle || 'No Page Name';
                }
            })
        }
        if(route.path === pathName) {
            result = route?.pageTitle || 'No Page Name';
        };
        // '/' path
        // if(pathList.length === 1){
        //     if(route.path === pathName) {
        //         result.push({'pathTitle': route.pageTitle})
        //     };
        // }
        // if(pathList.length > 1){
        //
        // }
        // console.log("****")
        // console.log("pathList.length", pathList.length);
        
        // if(route.children.length > 0){
        //     const parent = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
        //     result.push(...getTitleRoute(parent, pathName, route.children));
        // }
        //
        // if(route.roles.length && route.path.includes(pathList[0])){
        //     const path = parentPath === Path.HOME_PATH ? `${route.path}` : `${parentPath}/${route.path}`;
        //     const subRoute: IRoutes = {
        //         title: route.title,
        //         pageTitle:route.pageTitle,
        //         path: path,
        //         component: route.component,
        //         roles: route.roles,
        //         children: route.children,
        //     };
        //     result.push(subRoute);
        // }

    }
    return result;
}