import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Shop from "./components/Shop";
import Store from "./Store";
import { observer } from "mobx-react";
import Nevbar from "./components/Nevbar"
import Detail from "./components/Detail";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Add_item from "./components/Add_item";
import Edit_item from "./components/Edit_item";
import Searchitem from "./components/SearchItem";


const App = observer(() => {
  return (
    <>
      <BrowserRouter>
        <Nevbar store={Store} />
        <Switch>
          <Route exact path="/" component={() => <Shop store={Store} />}></Route>
          <Route exact path="/add_item" component={() => <Add_item store={Store} />}></Route>
          <Route exact path="/Edit/:id" component={() => <Edit_item store={Store} />}></Route>
          <Route exact path="/Detail/:id" component={() => <Detail store={Store} />}></Route>
          <Route exact path="/item" component={() => <Searchitem store={Store} />}></Route>
          <Route exact path="/Cart" component={() => <Cart store={Store} />}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
})

export default App;
