import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import menuItems from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';


const HomeScreen = () => {

    const itemSeparator = () => {
        return (
            <View
                style={{
                    borderBottomWidth: 1,
                    opacity: 0.4,
                    marginVertical: 8
                }}
            />
        )
    }

    return (
        <View style={{flex:1, ...styles.globalMargin}}>
            

            <FlatList
                data={ menuItems }
                renderItem={({ item }) => <FlatListMenuItem menuItem={ item }/>}
                keyExtractor={(item) => item.name}
                ListHeaderComponent = {() => <HeaderTitle title="Opciones de menú"/>}
                ItemSeparatorComponent={ ()=> <ItemSeparator/>}
            />
        </View>
    )
}

export default HomeScreen
const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:35,
        fontWeight:'bold',
        
    },

});
