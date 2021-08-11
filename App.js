import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TabNavigation from './components/navigations/navigators/TabNavigation';
import DrawerNavigation from './components/navigations/navigators/DrawerNavigation';
import Home from './components/home/Home';

const App = () => {
  return (
    <SafeAreaView>
      <Home />
    </SafeAreaView>
  );
};

export default App;
