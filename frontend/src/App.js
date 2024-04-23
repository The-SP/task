import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Logout from "./pages/user/Logout";
import Signup from "./pages/user/Signup";
import ResetPassword from "./pages/user/ResetPassword";
import ResetPasswordConfirm from "./pages/user/ResetPasswordConfirm";
// Blog
import BlogList from "./pages/blog/BlogList";
import BlogCreate from "./pages/blog/BlogCreate";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* user pages */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route
          exact
          path="/password/reset/confirm/:uid/:token"
          element={<ResetPasswordConfirm />}
        />
        {/* Blog pages */}
        <Route exact path="/blogs" element={<BlogList />} />
        <Route exact path="/blogs/create" element={<BlogCreate />} />
        {/* <Route exact path="/blogs/:id" element={<BlogDetail />} />
        <Route exact path="/blogs/:id/update" element={<BlogUpdate />} />
        <Route exact path="/blogs/:id/delete" element={<BlogDelete />} /> */}
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
