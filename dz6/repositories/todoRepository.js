import apiClient from '../api/apiClient';

export const todoRepository = {
  fetchTodos: async () => {
    const response = await apiClient.get('/todos?_limit=10'); // Увеличено количество задач
    return response.data;
  },
  addTodo: async (todo) => {
    const response = await apiClient.post('/todos', todo);
    return response.data;
  },
  updateTodo: async (id, updatedTodo) => {
    const response = await apiClient.put(`/todos/${id}`, updatedTodo);
    return response.data;
  },
  deleteTodo: async (id) => {
    await apiClient.delete(`/todos/${id}`);
  }
};
