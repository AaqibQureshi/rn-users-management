import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
const Album = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.gridItem}>
        <Text style={{...styles.title, color: 'black'}} numOfLines={2}>
          {props.album.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Album;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 12,
    textAlign: 'right',
    width: 115,
  },
});
