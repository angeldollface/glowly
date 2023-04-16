import React from 'react';
import { useFonts } from 'expo-font';
import MsgRenderer from './render.jsx';
import GlowlyText from '../components/text.jsx';
import GlowlySpacer from '../components/spacer.jsx';
import GlowlyButton from '../components/button.jsx';
import GlowlyTextInput from '../components/input.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native';

export function Settings({navigation}) {
    const [fontsLoaded] = useFonts(
        {
          'PSB': require(
            '../../assets/fonts/PSB.ttf'
          ),
        }
    );
    const [backGroundColor, setbackGroundColor] = React.useState("#FFFFFF");
    const [message, setMessage] = React.useState("Hello World!");
    const [font, setFont] = React.useState("PSB");
    const [borderColor, setBorderColor] = React.useState("#000000");
    const [fontColor, setFontColor] = React.useState("#000000");
    const [hasBorder, enableBorder] = React.useState("false");
    const [boxColor, setBoxColor] = React.useState("#FFFFFF");
    let styles = StyleSheet.create(
        {
            container: {
                width: '100%',
            },
            scrollView: {
                width: '100%',
                height: '100%',
                backgroundColor: '#FF7BAC',

            },
            infoContainer: {
                width: '80%',
                padding: 0,
                marginLeft: '10%',
                marginRight: '10%',
                marginTop: '5%'                
            },
            buttonContainer: {
                bottom: 0,
                flex: 1,
                width: '100%',
                margin: 0,
                padding: 0          
            }
        }
    );
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
         <View style={styles.infoContainer}>
         
         <GlowlyText text={"Background Color"}/>
         <GlowlyTextInput onChange={setbackGroundColor}
          value={backGroundColor}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Message"}/>
         <GlowlyTextInput
          onChange={setMessage}
          value={message}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Font Family"}/>
         <GlowlyTextInput
          onChange={setFont}
          value={font}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Border Color"}/>
         <GlowlyTextInput
          onChange={setBorderColor}
          value={borderColor}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Font Color"}/>
         <GlowlyTextInput
          onChange={setFontColor}
          value={fontColor}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Enable Border"}/>
         <GlowlyTextInput
          onChange={enableBorder}
          value={hasBorder}
         />

         <GlowlySpacer height={"0.05"}/>
         <GlowlyText text={"Box Background Color"}/>
         <GlowlyTextInput
          onChange={setBoxColor}
          value={boxColor}
         />

      </View>
      <GlowlySpacer height={"0.05"}/>
      <View style={styles.buttonContainer}>
      <GlowlySpacer height={"0.1"}/>
      <GlowlyButton 
         onPress={() => {
            navigation.navigate(
                'Renderer', 
                {
                    backGroundColor: backGroundColor,
                    message: message,
                    font: font,
                    borderColor: borderColor,
                    fontColor: fontColor,
                    hasBorder: hasBorder,
                    boxColor: boxColor
                });
         }} 
         title={"RENDER"}/></View>
     </ScrollView>
    </SafeAreaView>
    );
}

export default Settings;