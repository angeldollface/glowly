import { useFonts } from 'expo-font';
import { TextInput, StyleSheet } from 'react-native';

export function GlowlyTextInput(props) {
  const { onChange, value } = props;
  const [fontsLoaded] = useFonts(
    {
      'PSB': require(
        '../../assets/fonts/PSB.ttf'
      ),
    }
);
  let inputStyle = StyleSheet.create(
    {
      inputHandler: {
        borderColor: '#FFFFFF',
        borderWidth: 2,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: 25,
        fontFamily: 'PSB',
        borderColor: '#000000',
        color: '#000000',
        borderRadius: 5,
        margin: 0,
        padding: 10
      }
    }
  );
  return (
    <TextInput
        editable
        multiline={false}
        numberOfLines={1}
        maxLength={200}
        onChangeText={onChange}
        value={value}
        style={inputStyle.inputHandler}
      />
  );
}

export default GlowlyTextInput;