import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StackNavigation} from './StackNavigation';
import Settings from "../screens/Settings"
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name==="Home"){
                iconName = focused ? "home" : "home-outline"
            } 
            else if(route.name === "Settings"){
                iconName = focused ? "settings" : "settings-outline"
            }
            return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:"tomato",
        tabBarInactiveTintColor:"grey"
    })}>
      <Tab.Screen
        name="Home"
        component={StackNavigation}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
};

export default TabNavigation;
