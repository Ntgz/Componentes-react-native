import React, {useRef} from 'react'
import { StyleSheet, Text, View, Button,Animated, ActivityIndicator, Dimensions,FlatList,ScrollView,TouchableOpacity,Easing } from 'react-native';
import useAnimation from '../hook/useAnimation';


const Animation101Screen = () => {

    const { opacity, position,startMovingPosition, fadeIn, fadeOut} = useAnimation();

    return (
        <View style={styles.container}>
            <Animated.View style={{...styles.purpleBox,opacity: opacity, transform: [{
                translateX: position
            }]}}/>
            <Button title="FadeIn" onPress={()=>{fadeIn();
            startMovingPosition( 100 )}}/>

            <Button title="FadeOut" onPress={fadeOut}/>
            
        </View>
    )
}

export default Animation101Screen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    purpleBox:{
        backgroundColor: '#5856D6',
        width:150,
        height:150,

    },

});
