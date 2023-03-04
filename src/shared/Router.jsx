import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "../pages/\bSignUp";
import Login from "../pages/Login";
import WorkSpace from "../pages/Workspace";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/workspace"  element={<WorkSpace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;