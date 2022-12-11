import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


interface Props {
    title: String;
}

const HeaderTitle = ({title}: Props) => {
    const { top } = useSafeAreaInsets();

        return (
            <View style={{ marginTop: top + 20, marginBottom:20 }}>
                <Text style={styles.title}>{ title }</Text>
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