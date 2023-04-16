import { useFonts } from 'expo-font';
import { Pressable, StyleSheet, Text} from 'react-native';

export function GlowlyButton(props){
    const { onPress, title } = props;
    const [fontsLoaded] = useFonts(
        {
          'PSB': require(
            '../../assets/fonts/PSB.ttf'
          ),
        }
    );
    let style = StyleSheet.create(
        {
            actionButton: {
                width: '100%',
                height: 65,
                backgroundColor: '#FFFFFF',
                padding: 20,
                position: 'absolute',
                bottom: 0,
                margin: 0,
            },
            text: {
                color: '#000000',
                fontSize: 25,
                padding: 0,
                fontFamily: 'PSB',
                margin: 0,
                textAlign: 'center'
            }
        }
    );
    return (
        <Pressable onPress={onPress} style={style.actionButton}>
         <Text style={style.text}>{title}</Text>
        </Pressable>
    )
}

export default GlowlyButton;