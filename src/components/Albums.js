import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Album from './Album';
const Albums = props => {
  // console.log(props.navigation.navigation.navigate());
  const id = props.navigation.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [albums, setAlbums] = useState([]);
  const getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums?userId=' + id)
      .then(response => response.json())
      .then(json => setAlbums(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getAlbums();
    // console.log(albums);
  }, []);
  return (
    <View style={{padding: 0}}>
      {isLoading ? (
        <Text style={{color: 'green', textAlign: 'center'}}>Loading...</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={albums}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <Album
              album={item}
              onPress={() =>
                props.navigation.navigation.navigate('Photos', {
                  id: item.id,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
};
export default Albums;
