import React from 'react';
import {Text, View} from 'react-native';
import Users from '../../components/Users';
const UsersScreen = props => {
  return <Users navigation={props.navigation} />;
};

export default UsersScreen;
