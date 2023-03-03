import { BrowserRouter, Route, Routes } from "react-router-dom";
import WorkSpace from "../pages/Workspace";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/workspace"  element={<WorkSpace />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;