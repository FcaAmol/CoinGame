import React, {  useState } from "react";
import { Platform, View, Text, Alert, StatusBar } from "react-native";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
// import {createStackNavigator} from '@react-navigation/stack';
// import Colors from '../constants/Colors';
//Stack Compoennt
import AuthStack from "./AuthStack";
import { AppStack } from "./AppStack";


const RootNavigator = () => {
  /********************** Hooks Function **********************/


  /************************  Render Main App   ****************************/

  return (
    <View style={{ flex: 1, }}>
      <NavigationContainer>
        
        <AuthStack />
        {/* {user && user.token ? <AppStack /> : <AuthStack />} */}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigator;
