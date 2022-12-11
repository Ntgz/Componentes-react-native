import React from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate( menuItem.component )}
        >
            <View style={styles.container}>
                <Ionicons
                    name={menuItem.icon}
                    color ="gray"
                    size={15}
                />
                <Text>{ menuItem.name }</Text>
                <View style={{ flex:1 }}/>
                <Ionicons
                    name="chevron-forward-outline"
                    color ="gray"
                    size={15}
                />
            </View>
        </TouchableOpacity>
    )
}

export default FlatListMenuItem


const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    itemText:{
        marginLeft: 10,
        fontSize: 19
        
    },

});