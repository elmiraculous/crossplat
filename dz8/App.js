import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, StyleSheet, TextInput } from 'react-native';
import Realm from 'realm';
import UserSchema from './models/User';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [realm, setRealm] = useState(null);

  useEffect(() => {
    const openRealm = async () => {
      const realmInstance = await Realm.open({
        schema: [UserSchema],
      });
      setRealm(realmInstance);
      loadUsers(realmInstance);
    };

    openRealm();

    return () => {
      if (realm) {
        realm.close();
      }
    };
  }, []);

  const loadUsers = (realmInstance) => {
    const users = realmInstance.objects('User');
    setUsers([...users]);
  };

  const addUser = () => {
    if (name && email && realm) {
      realm.write(() => {
        realm.create('User', {
          id: Date.now().toString(),
          name,
          email,
        });
      });
      loadUsers(realm);
      setName('');
      setEmail('');
    }
  };

  const deleteUser = (id) => {
    if (realm) {
      realm.write(() => {
        const userToDelete = realm.objectForPrimaryKey('User', id);
        realm.delete(userToDelete);
      });
      loadUsers(realm);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title="Add User" onPress={addUser} />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name} - {item.email}</Text>
            <Button title="Delete" onPress={() => deleteUser(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 70,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
});

export default App;
