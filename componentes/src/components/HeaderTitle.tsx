import React, {useContext, useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    title: String;
}

const HeaderTitle = ({title}: Props) => {
    const { top } = useSafeAreaInsets();
    const {theme:{ colors }} = useContext(ThemeContext);

        return (
            <View style={{ marginTop: top + 20, marginBottom:20 }}>
                <Text style={{...styles.title, color: colors.text}}>{ title }</Text>
            </View>
        )
    
}

export default HeaderTitle

const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        
    },

});