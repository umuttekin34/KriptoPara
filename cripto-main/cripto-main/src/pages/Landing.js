import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";
import Hakkinda from "./Hakkinda";
import Iletisim from "./Iletisim";

import BottomTabNavigator from './BottomTabNavigator'

const AuthStack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const DrawerStackScreen = () => (
  <DrawerStack.Navigator >
    <DrawerStack.Screen
      name="Home"
      component={BottomTabNavigator}
      options={{ title: "Kripto Paralar" }}
    />
    <DrawerStack.Screen
      name="Profile"
      component={Profile}
      options={{ title: "Profil" }}
      
    />
    <DrawerStack.Screen
      name="Hakkinda"
      component={Hakkinda}
      options={{ title: "Kripto Para Nedir" }}
    />
    <DrawerStack.Screen
      name="Iletisim"
      component={Iletisim}
      options={{ title: "İletişim" }}
      
    />
  </DrawerStack.Navigator>
);
function Landing() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName={Login}
        screenOptions={{
          header: () => null,
        }}
        
      >
        <AuthStack.Screen
          name="Login"
          component={Login}
          options={{ title: "Kayıt Ol veya Giriş Yap" }}
        />
        <AuthStack.Screen
          name="Home"
          component={DrawerStackScreen}
          options={{ title: "Anasayfa" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default Landing;
