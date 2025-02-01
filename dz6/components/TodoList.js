import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { todoStore } from '../stores/todoStore';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

const TodoList = observer(() => {
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    todoStore.fetchTodos();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>TODO List</Text>
      <TextInput
        value={newTodo}
        onChangeText={setNewTodo}
        placeholder="Add a new task"
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />
      <Button title="Add" onPress={() => {
        if (newTodo.trim()) {
          todoStore.addTodo(newTodo);
          setNewTodo('');
        }
      }} />

      {todoStore.loading ? <Text>Loading...</Text> : (
        <FlatList
          data={todoStore.todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              <TouchableOpacity onPress={() => todoStore.toggleTodo(item.id)}>
                <Text style={{ textDecorationLine: item.completed ? 'line-through' : 'none', flex: 1 }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
              <Button title="Delete" onPress={() => todoStore.removeTodo(item.id)} />
            </View>
          )}
        />
      )}
    </View>
  );
});

export default TodoList;