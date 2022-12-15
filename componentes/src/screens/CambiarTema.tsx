import React, {useState,useContext} from 'react'
import { View,StyleSheet,Platform,Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const CambiarTema = () => {

    const {setDarkTheme, setLightTheme, theme:{ colors }} = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Cambiar tema"/>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity 
                    onPress={ setLightTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius:20,
                        backgroundColor: colors.primary,
                        justifyContent:'center',
                    }}>
                        <Text
                            style={{
                                color: 'white', textAlign:'center', fontSize: 22
                            }}
                        >Light</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={ setDarkTheme}
                    style={{
                        width: 150,
                        height: 50,
                        borderRadius:20,
                        backgroundColor:colors.primary,
                        justifyContent:'center',
                    }}>
                        <Text
                            style={{
                                color: 'white', textAlign:'center', fontSize: 22
                            }}
                        >Dark</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    inputStyle:{
        backgroundColor:'green',
        height: 150,

    },

});

export default CambiarTema
