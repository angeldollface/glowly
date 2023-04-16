import { useFonts } from 'expo-font';
import {Dimensions} from 'react-native';
import { View, StyleSheet } from 'react-native';

export function GlowlySpacer(props){
    const { height } = props;
    const windowHeight = Dimensions.get('window').height;
    let style = StyleSheet.create(
        {
            spacer: {
               width: '100%',
               backgroundColor: 'transparent',
               height: windowHeight * parseFloat(height)
            }
        }
    );
    return (
         <View style={style.spacer}></View>
    );
}

export default GlowlySpacer;