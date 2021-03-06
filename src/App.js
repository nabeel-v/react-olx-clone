import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import ViewPost from "./Pages/ViewPost";
import Myads from './Pages/Myads'
import { AuthContext, FirebaseContext } from "./Store/Context";
import Post from "./Store/PostCotext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";

function App() {
  const { setUser, user } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
        <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/create">
    {user ? <Create /> : <Login/>}
          </Route>
          <Route path="/view">
            <ViewPost />
          </Route>
          <Route path="/myads">
            <Myads />
          </Route>
        </Router>
      </Post>
    </div>
  );
}

export default App;
