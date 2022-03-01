import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UsersScreen from '../screens/users';
import AlbumsScreen from '../screens/albums';
import PhotosScreen from '../screens/photos';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={{
        headerStyle: {
          // backgroundColor: 'gray',
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'green',
        },
      }}>
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Albums" component={AlbumsScreen} />
      <Stack.Screen name="Photos" component={PhotosScreen} />
    </Stack.Navigator>
  );
}

export default MainStack;
