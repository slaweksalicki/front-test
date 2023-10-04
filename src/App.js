import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";

function App() {
  // use class "'dark-mode' to change theme"
  const isDarkMode = useSelector((state) => state.app.isDarkMode);

  return (
    <Provider store={store}>
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header />
        <List />
      </div>
    </Provider>
  );
}

export default App;
