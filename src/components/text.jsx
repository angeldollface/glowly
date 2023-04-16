import { useFonts } from 'expo-font';
import { Text, StyleSheet } from 'react-native';

export function GlowlyText(props){
    const { text } = props;
    const [fontsLoaded] = useFonts(
        {
          'PSB': require(
            '../../assets/fonts/PSB.ttf'
          ),
        }
    );
    let style = StyleSheet.create(
        {
            text: {
                color: '#000000',
                fontSize: 15,
                paddingTop: 0,
                paddingBottom: 5,
                paddingLeft: 0,
                paddingRight: 0,
                fontFamily: 'PSB',
                margin: 0,
                textAlign: 'left'
            }
        }
    );
    return (
         <Text style={style.text}>{text}</Text>
    );
}

export default GlowlyText;