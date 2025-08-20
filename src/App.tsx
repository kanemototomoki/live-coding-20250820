import Calculator from './components/Calculator';
import TodoList from './components/TodoList';
import './App.css';
import './components/Components.css';

function App() {
  return (
    <div className="app">
      <Calculator initialValue={1} />
      <TodoList />
    </div>
  );
}

export default App;
