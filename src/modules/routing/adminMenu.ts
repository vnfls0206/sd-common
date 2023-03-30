import * as Path from "./path";
import  {IMenuItem} from "./menu";
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import Brightness1Icon from '@mui/icons-material/Brightness1';

const adminMenu: IMenuItem[] = [
    {
        title: '관리자',
        key:'AdminMenu',
        path: Path.TEST_PATH,
        icon: SettingsSuggestRoundedIcon,
        children: [

        ],
    },
]

export default adminMenu;