import * as Path from './path';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

export interface IMenuItem {
    title: string,
    key:string,
    path: string,
    icon: any,
    children: IMenuItem[],
}

const menu: IMenuItem[] = [
    {
        title: 'DashBoard',
        key: 'DashBoard',
        path: Path.HOME_PATH,
        icon: HomeSharpIcon,
        children: [],
    },

]

export default menu;