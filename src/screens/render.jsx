import { useFonts } from 'expo-font';
import {Dimensions} from 'react-native';
import { useRoute } from "@react-navigation/native";
import {Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export function MsgRenderer({navigation}){
    const route = useRoute();
    const [fontsLoaded] = useFonts(
        {
          'PSB': require(
            '../../assets/fonts/PSB.ttf'
          ),
          'Axeon': require(
            '../../assets/fonts/Axeon.ttf'
          ),
          'DotMatrix': require(
            '../../assets/fonts/DotMatrix.ttf'
          ),
          'Lobster': require(
            '../../assets/fonts/Lobster.ttf'
          ),
          'LSD2': require(
            '../../assets/fonts/LSD2.ttf'
          ),
          'MC': require(
            '../../assets/fonts/MC.ttf'
          ),
          'Pacman': require(
            '../../assets/fonts/Pacman.ttf'
          ),
        }
      );
    const backGroundColor = route.params.backGroundColor;
    const boxColor = route.params.boxColor;
    const borderColor = route.params.borderColor;
    const fontColor = route.params.fontColor;
    const font = route.params.font;
    const message = route.params.message;
    const windowHeight = Dimensions.get('window').height;
    console.log(backGroundColor);
    let style = StyleSheet.create(
        {
            container: {
                width: '100%',
                height: '100%',
                backgroundColor: backGroundColor,
                padding: 0,
                margin: 0,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            },
            box: {
                height: '65',
                backgroundColor: boxColor,
                borderColor: borderColor,
                borderWidth: 2,
                padding: 0,
                marginTop: windowHeight * 0.25,
                marginBottom: 0,
                marginLeft: '10%',
                marginRight: '10%',
                borderRadius: 5
            },
            text: {
                textAlign: 'center',
                fontSize: 25,
                padding: 20,
                color: fontColor,
                fontFamily: font
            }
        }
    )
    return (
        <View style={style.container}>
         <View style={style.box}>
          <Text style={style.text}>
           {message}
          </Text>
         </View>
        </View>
    );
}

export default MsgRenderer;