import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./CRUD-OPERATIONS/Home";
import Read from "./CRUD-OPERATIONS/Read";
import Update from "./CRUD-OPERATIONS/Update";
import Create from "./CRUD-OPERATIONS/Create";
import Delete from "./CRUD-OPERATIONS/Delete";
import "./App.css";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="header-app-home">
        <h1 className="page-title">User Management System</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/delete/:id" element={<Delete />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
