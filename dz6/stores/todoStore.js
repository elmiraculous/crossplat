import { makeAutoObservable } from 'mobx';
import { todoService } from '../services/todoService';

class TodoStore {
  todos = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  fetchTodos = async () => {
    this.loading = true;
    this.todos = await todoService.getTodos();
    this.loading = false;
  };

  addTodo = async (title) => {
    const newTodo = await todoService.createTodo(title);
    this.todos.push(newTodo);
  };

  toggleTodo = async (id) => {
    const todo = this.todos.find(t => t.id === id);
    if (!todo) return;
    const updatedTodo = await todoService.toggleTodo(id, !todo.completed);
    this.todos = this.todos.map(t => (t.id === id ? updatedTodo : t));
  };

  removeTodo = async (id) => {
    await todoService.removeTodo(id);
    this.todos = this.todos.filter(t => t.id !== id);
  };
}

export const todoStore = new TodoStore();