import React, {useState} from 'react'
import { View,StyleSheet,Platform,Text, ActivityIndicator, Image, SafeAreaView,ImageSourcePropType, Dimensions,TouchableOpacity,Animated} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Ionicons from '@expo/vector-icons/Ionicons';
import useAnimation from '../hook/useAnimation';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window')

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]



const SlidesScreen = ({navigation}:any) => {

    const [activeIndex, setactiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    const [visible, setvisible] = useState(false)

    const renderItem = ( item: Slide) => {
        return(
            <View style={{
                flex:1,
                backgroundColor:'white',
                borderRadius: 5,
                padding:40,
                justifyContent: 'center'
            }}>
                <Image
                    source={ item.img }
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.desc}</Text>
            </View>

        )
        

    }

    return (

        <SafeAreaView
            style={{
                flex:1,
                paddingTop:50
            }}
        
        >
            <Carousel
                data={items}
                renderItem={({item}: any)=>renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                onSnapToItem={(index: React.SetStateAction<number>) => {
                    setactiveIndex(index);
                    if ( index === 2 ) {
                        setvisible(true)
                        fadeIn()
                    }
                }}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:20,alignItems:'center'}}>
                <Pagination
                    dotsLength={ items.length}
                    activeDotIndex={activeIndex}
                />
                {
                    visible && (
                        <Animated.View
                        style={{opacity}}
                    >
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            backgroundColor: '#5856D6',
                            width:140,
                            height:50,
                            borderRadius:10,
                            justifyContent:'center',
                            alignItems:'center',
                            
                        }}
                            onPress={()=>{navigation.navigate('Home')}}
                        >
                            <Text style={{fontSize: 25, color:'white'}}>Enter</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                color="white"
                                size={40}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                    )
                }
            
            </View>
            
        </SafeAreaView>

        // <View style={styles.globalMargin}>
        //     <HeaderTitle title="Slides"/>
            
        // </View>
    )
}

export default SlidesScreen

const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#5856D6'
    },
    subtitle:{
        fontSize: 16
    }

});

