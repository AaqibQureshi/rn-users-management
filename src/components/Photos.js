import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Photo from './Photo';
const Photos = props => {
  const id = props.navigation.route.params.id;
  const [isLoading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);
  const [showModal, setShowModal] = useState(0);
  const getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=' + id)
      .then(response => response.json())
      .then(json => setPhotos(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getPhotos();
  }, []);
  return (
    <View style={{padding: 20}}>
      {isLoading ? (
        <Text style={{color: 'green', textAlign: 'center'}}>Loading...</Text>
      ) : (
        <FlatList
          numColumns={3}
          data={photos}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item, index}) => (
            <Photo
              photo={item}
              onPress={() => {
                setActive(index);
                setShowModal(true);
              }}
            />
          )}
        />
      )}
      <Modal
        visible={showModal}
        transparent={true}
        onRequestClose={() => setShowModal(false)}>
        <ImageViewer index={active} imageUrls={photos} />
      </Modal>
    </View>
  );
};
export default Photos;
