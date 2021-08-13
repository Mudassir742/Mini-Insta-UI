import React from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import TabNavigation from './components/navigations/TabNavigation';


const App = () => {
  return (
      <NavigationContainer>
        <TabNavigation/>
      </NavigationContainer>
  );
};

export default App;
