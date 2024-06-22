import "./App.css";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/home";
import Navabar from "./components/navbar";
import React, { Suspense, useState } from "react";

function App() {
  const [username, setUsername] = useState();
  const [isLogged, setIsLogged] = useState();

  const Users = React.lazy(() => import("./components/users"));
  const UserProfile = React.lazy(() => import("./components/userProfile"));
  const SearchUser = React.lazy(() => import("./components/searchUser"));
  const Login = React.lazy(() => import("./components/login"));
  const AboutUs = React.lazy(() => import("./components/about"));
  const AuthProfile = React.lazy(() => import("./components/authProfile"));
  const NotFound = React.lazy(() => import("./components/NotFound"));

  return (
    <div className="App">
      <Suspense fallback={()=><h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Navabar isLogged={isLogged} />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/users" element={<Users />} />
            <Route element={<UserProfile />} path="/users/user/:username" />
            <Route element={<SearchUser />} path="/search" />

            <Route
              element={
                <Login setIsLogged={setIsLogged} setUsername={setUsername} />
              }
              path="/login"
            />
            <Route
              element={
                isLogged ? (
                  <AuthProfile username={username} />
                ) : (
                  <Navigate replace to={"/login"} />
                )
              }
              path="/authProfile"
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
