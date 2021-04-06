import logo from './logo.svg';
import './App.css';
import { TodoProvider } from './context/todoList/TodoContext';
import { Todo } from './views/todoView/Todoview';
function App() {
  return (
  <TodoProvider>
  <Todo />
  </TodoProvider>
  );
}

export default App;
