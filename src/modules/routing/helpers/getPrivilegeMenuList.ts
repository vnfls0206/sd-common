import menu, {IMenuItem} from "../menu";
import adminMenu from "../adminMenu";

const getMenuList = (menu:IMenuItem[]) => {
    let menuList: string[] = [];
    menu.forEach( (item) => {
        if(item.children.length > 0){
            item.children.forEach( (child) => {
                menuList.push(child.key);
                }
            )
        }else if (item.path.length){
            menuList.push(item.key);

        }else {

        }
    });
    return menuList;
}

export const getPrivilegeMenuList = () => {

    return [...getMenuList(menu), ...getMenuList(adminMenu)];
}