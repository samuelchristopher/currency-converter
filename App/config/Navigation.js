import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import colors from '../constants/colors';

const MainStack = createStackNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    // initialRouteName="Options"
  >
    <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
    <MainStack.Screen name="Options" component={Options} />
    
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();

const ModalStackScreen = () => (
  <ModalStack.Navigator
    initialRouteName="Main"
    mode="modal"
  >
    <ModalStack.Screen name="CurrencyList" component={CurrencyList} 
      options={({ navigation, route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Entypo name="cross" style={{paddingRight: 20}} size={32} color={colors.blue}/>
        </TouchableOpacity>
      )})}   
    />
    <ModalStack.Screen name="Main" component={MainStackScreen} options={{ headerShown: false }}/>
  </ModalStack.Navigator>
)

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);