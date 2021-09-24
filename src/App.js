import { Provider } from "react-redux";
import "./App.css";
import Input from "./component/Input";
import TodoList from "./component/todoList";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Input />
      <TodoList />
    </Provider>
  );
}

export default App;
