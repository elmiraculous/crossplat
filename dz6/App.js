import { SafeAreaView } from 'react-native';
import TodoList from './components/TodoList';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TodoList />
    </SafeAreaView>
  );
}

export default App;
