import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import SwitchScreen from '../screens/SwitchScreen';
import AlertScreen from '../screens/AlertScreen';
import TextInputScreen from '../screens/TextInput';
import PullToRefresh from '../screens/pullToRefresh';
import SectionListScreen from '../screens/sectionListScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
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
        </Stack.Navigator>
    )
}

export default Navigation
