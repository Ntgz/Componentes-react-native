import React, { useContext } from 'react'
import { StyleSheet, Text, View, Button, ActivityIndicator, Dimensions,FlatList,ScrollView,TouchableOpacity } from 'react-native';
import { MenuItem } from '../interfaces/appInterfaces';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem
}

const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    const { theme } = useContext( ThemeContext );

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate( menuItem.component )}
        >
            <View style={styles.container}>
                <Ionicons
                    name={menuItem.icon}
                    color ={theme.colors.primary}
                    size={15}
                />
                <Text
                    style={{
                        ...styles.itemText,
                        color: theme.colors.text
                    }}
                >{ menuItem.name }</Text>
                <View style={{ flex:1 }}/>
                <Ionicons
                    name="chevron-forward-outline"
                    color ={theme.colors.primary}
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