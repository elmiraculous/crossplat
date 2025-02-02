import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import TodoItem from '../components/TodoItem';
import CompletedTasksModal from '../components/CompletedTasksModal';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [text, setText] = useState('');
  const modalizeRef = useRef(null);

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text, completed: false }]);
      setText('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    setCompletedTasks(completedTasks.filter((task) => task.id !== id));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    // Обновляем список завершенных задач
    const updatedCompletedTasks = updatedTodos.filter((todo) => todo.completed);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Добавить задачу"
        value={text}
        onChangeText={setText}
      />
      <Button title="Добавить" onPress={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} onToggle={toggleTodo} />
        )}
      />
      <Button title="Посмотреть завершенные задачи" onPress={() => modalizeRef.current?.open()} />
      <CompletedTasksModal modalizeRef={modalizeRef} completedTasks={completedTasks} />
    </View>
  );
};

export default HomeScreen;