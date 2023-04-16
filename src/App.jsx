import { useFonts } from 'expo-font';
import { registerRootComponent } from 'expo';
import Settings from './screens/settings.jsx';
import MsgRenderer from './screens/render.jsx';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App(){
  const [fontsLoaded] = useFonts(
    {
      'PSB': require(
        '../assets/fonts/PSB.ttf'
      ),
    }
  );
  return(
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen
       name="Settings"
       component={Settings}
       options={{
        title: 'Settings',
        headerStyle: {
          backgroundColor: '#FFFFF',
          
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#000000',
          fontFamily: 'PSB',
          fontSize: 25,
        },
      }}
       />
       <Stack.Screen
        name="Renderer" 
        component={MsgRenderer}
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor: '#FFFFFF',
          },
          headerTintColor: '#000000',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000000',
            fontFamily: 'PSB',
            fontSize: 25,
          },
        }}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);