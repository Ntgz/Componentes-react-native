import React,{useState} from 'react'
import useAnimation from '../hook/useAnimation'
import { Animated,View,ActivityIndicator} from 'react-native';
import { FadeIn } from 'react-native-reanimated';

interface Props {
    uri: string;
    style?:Object;
}

const FadeInImage = ({uri, style} : Props) => {

    const { opacity,fadeIn } = useAnimation()
    const [isLoaded, setIsLoaded] = useState(true);
    const finishLoading = () => {
        setIsLoaded(false);
        fadeIn();
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {
                isLoaded && <ActivityIndicator style={{ position:'absolute'}} color="#5856D6" size={ 30 }/>
            }

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style,
                    // width: '100%',
                    // height: 400,
                    opacity
                }}
            />
        </View>
    )
}

export default FadeInImage
