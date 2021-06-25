import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

import Home from './src/pages/Home';
import Conquistas from './src/pages/Conquistas';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ Home }
          />

          <Stack.Screen
            name="Conquistas"
            component={ Conquistas }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
