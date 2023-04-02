import { Route, Routes } from "react-router-dom";
import HomeApp from "./home/HomeApp";
import EditTodo from "./todo/EditTodo";
import ShowTodo from "./todo/ShowTodo";

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
