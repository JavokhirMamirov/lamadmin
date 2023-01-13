import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" >
        <Route index element={<Home/>} errorElement={<h1>404</h1>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
        <Route path="/products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New/>}/>
        </Route>
    </Route>
  
));

export default router;