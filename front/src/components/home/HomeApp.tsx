import ListTodo from "./ListTodo";

export default function HomeApp() {
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow container-card-todo">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-center mx-auto display-inline-block">
            <h1>Todo List</h1>
          </div>
        </div>
        <ListTodo />
      </div>
    </div>
  );
}
