import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import About from "../screens/About"

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Contact" component={Contact} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
};

const AboutStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="About" component={About} options={{headerShown: false}}/> 
        </Stack.Navigator>
    )
}

export {StackNavigation,AboutStack};
