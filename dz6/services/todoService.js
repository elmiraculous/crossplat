import { todoRepository } from '../repositories/todoRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const todoService = {
  getTodos: async () => {
    const storedTodos = await AsyncStorage.getItem('todos');
    if (storedTodos) return JSON.parse(storedTodos);
    const todos = await todoRepository.fetchTodos();
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    return todos;
  },
  createTodo: async (title) => {
    const newTodo = await todoRepository.addTodo({ title, completed: false });
    const storedTodos = await AsyncStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    todos.push(newTodo);
    await AsyncStorage.setItem('todos', JSON.stringify(todos));
    return newTodo;
  },
  toggleTodo: async (id, completed) => {
    const updatedTodo = await todoRepository.updateTodo(id, { completed });
    const storedTodos = await AsyncStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const updatedTodos = todos.map(t => (t.id === id ? updatedTodo : t));
    await AsyncStorage.setItem('todos', JSON.stringify(updatedTodos));
    return updatedTodo;
  },
  removeTodo: async (id) => {
    await todoRepository.deleteTodo(id);
    const storedTodos = await AsyncStorage.getItem('todos');
    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const filteredTodos = todos.filter(t => t.id !== id);
    await AsyncStorage.setItem('todos', JSON.stringify(filteredTodos));
  }
};