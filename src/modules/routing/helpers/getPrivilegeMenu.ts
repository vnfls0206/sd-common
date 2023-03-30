import {IMenuItem} from "../menu";

export const getPrivilegeMenu = (privilege: Array<string>, menu: Array<IMenuItem>) => {
    let result: IMenuItem[] = [];

    for(let item of menu){
        if(item.children.length > 0) {
            const child = getPrivilegeMenu(privilege, item.children);

            if(child.length > 0) {
                result.push({
                    ...item,
                    children: child
                })
            }
        } else {
            if(privilege.includes(item.key)){
                result.push(item);
            }
        }
    }

    return result;
}