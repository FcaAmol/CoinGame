import React from 'react';
import {View} from 'react-native';
import Login from '../screens/Login';
import GamePlayScreen from '../screens/GamePlayScreen';
import LostScreen from '../screens/LostScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <View style={{flex: 1}}>
      <RootStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="GamePlayScreen" component={GamePlayScreen} />
        <Stack.Screen name="LostScreen" component={LostScreen} />
      </RootStack.Navigator>
    </View>
  );
};

export default AuthStack;
