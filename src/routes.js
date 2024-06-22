import React, { useState } from "react";

import Home from "./components/home";
const Users = React.lazy(() => import("./components/users"));
const UserProfile = React.lazy(() => import("./components/userProfile"));
const SearchUser = React.lazy(() => import("./components/searchUser"));
const Login = React.lazy(() => import("./components/login"));
const AboutUs = React.lazy(() => import("./components/about"));
const AuthProfile = React.lazy(() => import("./components/authProfile"));
const NotFound = React.lazy(() => import("./components/NotFound"));

export const appRoutes = [
    {
        path:"/",
        component: Home,
        requireAuth: false
    },
    {
        path:"/login",
        component: Login,
        requireAuth: false
    },
    {
        path:"/authProfile",
        component: AuthProfile,
        requireAuth: true
    },
    {
        path:"/users",
        component: Users,
        requireAuth: false
    },
    {
        path:"/users/user/:username",
        component: UserProfile,
        requireAuth: false
    },
    {
        path:"/about",
        component: AboutUs,
        requireAuth: false
    },
    {
        path:"/search",
        component: SearchUser,
        requireAuth: false
    },
    {
        path:"*",
        component: NotFound,
        requireAuth: false
    },

]

