import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import CakeContainer2 from "./components/CakeContainer2";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <br />
        <hr />
        <CakeContainer2 />
        <br />
        <hr />
        <IceCreamContainer />
        <br />
        <hr />
        <NewCakeContainer />
        <br />
        <hr />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
