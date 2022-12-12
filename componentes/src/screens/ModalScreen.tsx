import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text,Modal, Button} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)


    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Modal'/>
            <Button
                title="Abrir modal"
                onPress={() => setIsVisible(true)}
            />
            <Modal
                animationType="fade"
                visible={ isVisible }
                transparent={true}    
            >
                {/* backgroundColor */}
                <View
                    style={{ flex:1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent:'center',alignItems:'center'}}
                >
                    {/* Contenido del modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 300,
                        height: 300,
                        justifyContent:'center',
                        alignItems:'center',
                        shadowOffset:{
                            width: 0,
                            height: 10
                        },
                        shadowOpacity:0.25,
                        elevation:10,
                        borderRadius: 5
                    }}>
                        <Text style={{ fontSize:20, fontWeight:'bold'}}>Modal</Text>
                        <Text style={{ fontSize:16, fontWeight:'300', marginBottom:20}}>Cuerpo del modal</Text>
                        <Button
                            title="cerrar"
                            onPress={()=>setIsVisible(false)}
                        />
                    </View>
                </View>

            </Modal>
        </View>
    )
}

export default ModalScreen
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
