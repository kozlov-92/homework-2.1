import React from "react";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route exact path="/users/:userId?" component={Users} />
            {/* <Redirect to="/" /> */}
        </>
    );
}

export default App;
