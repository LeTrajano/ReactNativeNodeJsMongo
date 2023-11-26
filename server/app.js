import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer);

const Stack = createStackNavigator();

const myOptions = {
  title: 'App de Exemplo',
  headerTintColor: 'white',
  headerStyle: {
    backgroundColor: '#006aff',
  },
};

const API_URL = 'http://192.168.0.104:3000';  // Substitua pelo seu IP local

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Home {...props} apiUrl={API_URL} />}
        </Stack.Screen>
        <Stack.Screen
          name="Create"
          options={{ ...myOptions, title: 'Funcionário' }}
        >
          {props => <CreateEmployee {...props} apiUrl={API_URL} />}
        </Stack.Screen>
        <Stack.Screen
          name="Profile"
          options={{ ...myOptions, title: 'Perfil do Funcionário' }}
        >
          {props => <Profile {...props} apiUrl={API_URL} />}
        </Stack.Screen>
      </Stack.Navigator>
    </View>
  );
}

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingTop: Constants.statusBarHeight,
  },
});
