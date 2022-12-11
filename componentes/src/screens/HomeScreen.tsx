import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MenuItem } from '../interfaces/appInterfaces';
import FlatListMenuItem from '../components/FlatListMenuItem';




const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation1'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation2'
    }
]


const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const renderListHeader =() => {
        return (
            <View style={{ marginTop: top + 20, marginBottom:20 }}>
                <Text style={styles.title}>Opciones de menú</Text>
            </View>
        )
    }

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
                ListHeaderComponent = {() => renderListHeader()}
                ItemSeparatorComponent={ ()=> itemSeparator()}
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
