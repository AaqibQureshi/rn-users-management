import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import User from './User';
const Users = props => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => setUsers(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View style={{padding: 20}}>
      {isLoading ? (
        <Text style={{color: 'green', textAlign: 'center'}}>Loading...</Text>
      ) : (
        <FlatList
          data={users}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('Albums', {
                  id: item.id,
                })
              }>
              <View>
                <User user={item} />
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};
export default Users;
