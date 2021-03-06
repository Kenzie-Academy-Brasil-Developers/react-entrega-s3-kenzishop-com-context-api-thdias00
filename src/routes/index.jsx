import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import Cart from "../pages/Cart"

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </Switch>
    )
};
export default Routes;