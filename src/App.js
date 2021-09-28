import { Provider } from "react-redux";
import "./App.css";
import Input from "./component/Input";

import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Input />
      </div>
    </Provider>
  );
}

export default App;
