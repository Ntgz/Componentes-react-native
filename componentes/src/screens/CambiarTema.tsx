import React, {useState} from 'react'
import { View,StyleSheet,Platform,Text, ActivityIndicator, Image, TouchableOpacity} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';

const CambiarTema = () => {
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title="Cambiar tema"/>
            <TouchableOpacity style={{
                width: 150,
                height: 50,
                borderRadius:20,
                backgroundColor:'#5856D6',
                justifyContent:'center',
            }}>
                <Text
                    style={{
                        color: 'white', textAlign:'center', fontSize: 22
                    }}
                >Light / Dark</Text>
            </TouchableOpacity>
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
