import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from "./src/navigator/Navigator";
import { ThemeProvider } from './src/context/themeContext/ThemeContext';

// const customTheme: Theme = {
//   dark: true,
//   colors:{
//     ...DefaultTheme.colors,
//     // primary: 'string',
//     // background: 'black',
//     // card: 'string',
//     // text: 'string',
//     // border: 'string',
//     // notification: 'string'
//   }
// }

export default function App() {
  return (
    <AppState>


        <Navigation/>


    </AppState>
  );
}

const AppState = ({children}:any) =>{
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
