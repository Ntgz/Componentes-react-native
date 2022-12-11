import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text,Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "Titulo",
            "Este es el mensaje de alerta",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            )
    }
    const showPrompt = () => {
        // Alert.prompt(
        //     "Está seguro?",
        //     "Esta accion no se puede revertir",
        //     ( valor: string ) => console.log('info: ', valor),
        //     'login-password'
            
        //     )
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    }


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Alerts"/>
            <Button
                title="Mostrar Alerta"
                onPress={ showAlert}
            />
                        <Button
                title="Mostrar Prompt"
                onPress={ showPrompt}
            />

        </View>
    )
}

export default AlertScreen
const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        
    },

});