import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Keyboard,KeyboardAvoidingView, TouchableWithoutFeedback,TextInput, ScrollView } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const TextInputScreen = () => {

    const [form, setForm] = useState({
        name: '',
        emai: '',
        phone: ''
    })

    const onChange = ( value:string, field: string) => {
        setForm({
            ...form,
            [field]: value
        })
    }

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.globalMargin}>
                        <HeaderTitle title="Inputs"/>
                        <TextInput style={styles.inputStyle}
                                    placeholder="Ingrese su nombre"
                                    autoCorrect={ false }
                                    autoCapitalize="words"
                                    onChangeText={ (value) => onChange(value, 'name')}
                        />
                        <TextInput style={styles.inputStyle}
                                    placeholder="Ingrese su email"
                                    autoCorrect={ false }
                                    autoCapitalize="none"
                                    onChangeText={ (value) => onChange(value, 'email')}
                                    keyboardType='email-address'
                                    keyboardAppearance='dark'
                        />
                        <HeaderTitle title={JSON.stringify(form, null, 3)}/>
                        <HeaderTitle title={JSON.stringify(form, null, 3)}/>
                        <TextInput style={styles.inputStyle}
                                    placeholder="Ingrese su telefóno"
                                    onChangeText={ (value) => onChange(value, 'phone')}
                                    keyboardType='phone-pad'
                        />
                        <View style={{height:100}}/>
                    </View>
                    
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default TextInputScreen
const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    inputStyle:{
        borderWidth:1,
        borderColor: 'rgba(0,0,0,0.3)',
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical:10
    },

});