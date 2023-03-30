import {IRoutes} from "../routes";
import menu from '../menu';
import adminMenu from "../adminMenu";

export interface IBreadCrumble{
    title: string,
    key: string,
    path: string
}

export const getBreadCrumbleRoute = (parentPath: string, pathName: string, routes: IRoutes[]): Array<IBreadCrumble> => {
    let result: Array<IBreadCrumble> = [];
    const pathList:string[] = pathName.split("/");
    let keyList:string[]=[];


    // 검색할 path keyword list
    for(const key in pathList){
        keyList.push(pathList.join("/"));
        pathList.pop();
    }

    // user menu
    for(let item of menu){
        if(item.children.length > 0){
           for(const child of item.children){
               for(const key of keyList){
                   if(child.path.includes(key)){
                       result.push(item);
                       result.push(child);
                       return result;
                   }
               }
           }
        }
        if(item.path.length && item.path.includes(pathName)){
            result.push(item);
            return result;
        }
    }

    // admin menu
    for(let item of adminMenu){
        if(item.children.length > 0){
            for(const child of item.children){
                for(const key of keyList){
                    if(child.path.includes(key)){
                        result.push(item);
                        result.push(child);
                        return result;
                    }
                }
            }
        }
        if(item.path.length && item.path.includes(pathName)){
            result.push(item);
            return result;
        }
    }

    return result;
}