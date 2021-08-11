import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer';
import { AboutStack,StackNavigation } from './StackNavigation';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="HomeScreen" component={TabNavigation}  />
        <Drawer.Screen name="AboutScreen" component={AboutStack} />
      </Drawer.Navigator>
    );
};

export default DrawerNavigation;