import { Route, Routes } from "react-router-dom";
import HomeApp from "./pages/Home/HomeApp";
import EditTodo from "./pages/edit/EditTodo";
import ShowTodo from "./pages/show/ShowTodo";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeApp />} />
        <Route path="/todo/:id/edit" element={<EditTodo />} />
        <Route path="/todo/:id/show" element={<ShowTodo />} />
      </Routes>
    </div>
  );
}
