import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
const Photo = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image source={{uri: props.photo.thumbnailUrl}} style={styles.gridItem} />
    </TouchableOpacity>
  );
};
export default Photo;
const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 10,
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    width: 100,
    height: 100,
    elevation: 3,
  },
});
