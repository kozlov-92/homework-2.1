import React from "react";
import NavBar from "./components/navBar";
import Login from "./components/login";
import Main from "./components/main";
import Users from "./components/users";
import UserPage from "./components/userPage";
import { Route } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar />
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/users/userPage" component={UserPage} />
            <Route exact path="/users" component={Users} />
        </>
    );
}

export default App;
