import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/\bSignUp";
import Login from "../pages/Login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;