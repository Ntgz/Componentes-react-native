import React,{useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInput';
import PullToRefresh from '../screens/pullToRefresh';
import SectionListScreen from '../screens/sectionListScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScroll from '../screens/InfiniteScroll';
import SlidesScreen from '../screens/SlidesScreen';
import CambiarTema from '../screens/CambiarTema';
import { NavigationContainer, DefaultTheme, Theme, DarkTheme } from "@react-navigation/native";
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {

    const { theme } = useContext( ThemeContext );

    return (
        <NavigationContainer
        theme={ theme }
            
        >
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Animation1" component={Animation101Screen}/>
            <Stack.Screen name="Animation2" component={Animation102Screen}/>
            <Stack.Screen name="SwitchScreen" component={SwitchScreen}/>
            <Stack.Screen name="AlertScreen" component={AlertScreen}/>
            <Stack.Screen name="TextInputScreen" component={TextInputScreen}/>
            <Stack.Screen name="Pulltorefresh" component={PullToRefresh}/>
            <Stack.Screen name="SectionListScreen" component={SectionListScreen}/>
            <Stack.Screen name="ModalScreen" component={ModalScreen}/>
            <Stack.Screen name="InfiniteScroll" component={InfiniteScroll}/>
            <Stack.Screen name="Slides" component={SlidesScreen}/>
            <Stack.Screen name="Tema" component={CambiarTema}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
