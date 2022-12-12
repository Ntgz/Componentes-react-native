import { MenuItem } from "../interfaces/appInterfaces"
import Ionicons from '@expo/vector-icons/Ionicons';

const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation1'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation2'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alertas',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'Inputs',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'Refresh',
        icon: 'refresh-outline',
        component: 'Pulltorefresh'
    },
    {
        name: 'Section List',
        icon: 'list-outline',
        component: 'SectionListScreen'
    },
    {
        name: 'Modals',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'InfiniteScroll',
        icon: 'download-outline',
        component: 'InfiniteScroll'
    },
]

export default menuItems
