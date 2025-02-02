import React, { useState, useRef } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet } from 'react-native';
import TodoItem from '../components/TodoItem';
import CompletedTasksModal from '../components/CompletedTasksModal';
import { useTheme } from '../theme/ThemeContext';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [text, setText] = useState('');
  const modalizeRef = useRef(null);
  const { colors, toggleTheme, theme } = useTheme();
  const { t } = useTranslation(); 

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

    const updatedCompletedTasks = updatedTodos.filter((todo) => todo.completed);
    setCompletedTasks(updatedCompletedTasks);
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: colors.background }}>
      <TextInput
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          marginTop: 70,
          backgroundColor: colors.background,
          color: theme === 'dark' ? '#fff' : '#000',
          borderRadius: 8,
        }}
        placeholder={t('addButton')} // Перевод для placeholder
        value={text}
        onChangeText={setText}
        placeholderTextColor={theme === 'dark' ? '#fff' : '#888'}
      />
      <Button title={t('addButton')} onPress={addTodo} />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} onToggle={toggleTodo} />
        )}
      />

      <Button title={t('completedTasks')} onPress={() => modalizeRef.current?.open()} />
      <CompletedTasksModal modalizeRef={modalizeRef} completedTasks={completedTasks} />

      <View style={styles.footer}>
        <Button title={t('switch')} onPress={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default HomeScreen;
