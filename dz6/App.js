import React from 'react';
import { SafeAreaView } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Импортируем GestureHandlerRootView
import TodoList from './components/TodoList';

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* Оборачиваем в GestureHandlerRootView */}
      <SafeAreaView style={{ flex: 1 }}>
        <TodoList />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
