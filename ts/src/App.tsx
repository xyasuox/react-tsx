import './App.css';
import { TodoList } from "./pages/TodoList";
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:4000/api/";

function App() {
  return (
    <div className="content">
      <TodoList />
    </div>
  );
}

export default App;
