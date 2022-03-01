import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
const User = props => {
  // console.log(props.user.name); //user api
  return (
    <View style={styles.container}>
      <View style={styles.listItem}>
        <Text style={{color: 'black', fontSize: 12}}>{props.user.name}</Text>
        <TouchableOpacity>
          <Text style={{color: 'green', fontSize: 12}}>{props.user.email}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    // marginTop: 60,
  },
  listItem: {
    // margin: 10,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    flex: 1,
    flexDirection: 'row',
    borderRadius: 5,
    paddingVertical: 10,
    marginVertical: 10,
    height: 100,
  },
});

export default User;
