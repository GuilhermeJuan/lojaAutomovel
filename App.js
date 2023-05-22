import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './components/Inicio';
import Carro from './components/Carro';
import Moto from './components/Moto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Inicio' component={Inicio}/>
        <Stack.Screen name ='Carro' component={Carro}/>
        <Stack.Screen name ='Moto' component={Moto}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>

  );
}

