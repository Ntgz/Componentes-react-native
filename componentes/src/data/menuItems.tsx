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
    }
]

export default menuItems
