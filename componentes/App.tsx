import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/navigator/Navigator";
import { NavigationContainer, DefaultTheme, Theme, DarkTheme } from "@react-navigation/native";

const customTheme: Theme = {
  dark: true,
  colors:{
    ...DefaultTheme.colors,
    // primary: 'string',
    // background: 'black',
    // card: 'string',
    // text: 'string',
    // border: 'string',
    // notification: 'string'
  }
}

export default function App() {
  return (
    <NavigationContainer
      theme={ customTheme} 
    >

      <Navigation/>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
