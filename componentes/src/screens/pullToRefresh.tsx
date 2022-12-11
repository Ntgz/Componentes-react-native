import React, {useState} from 'react'
import { View,StyleSheet,Switch,Platform,Text, ScrollView, RefreshControl} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [data, setData] = useState<string>();


    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => {
            console.log('Terminamos');
            setRefreshing(false);
            setData('Hola mundo')
        }, 3500);
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing= { refreshing }
                    onRefresh={ onRefresh }
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={ ['white','red','orange'] }
                    // style={{ backgroundColor: '#5856D6' }}
                    // tintColor="white"
                />
            }
        
        >
            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh"/>
                <Text>Por favor recarga </Text>
                {
                    data && <HeaderTitle title={ data }/>
                }
                
            </View>
        </ScrollView>
    )
}

export default PullToRefresh
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
