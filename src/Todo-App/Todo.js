import React, { useState } from "react";
import "./Todo.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todo = () => {
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editToDo, setEditToDo] = useState("");

  const handleAdd = () => {
    setToDos([...toDos, newToDo]);
    setNewToDo("");
  };

  const handleDel = (index) => {
    const updatedTodos = [...toDos];
    updatedTodos.splice(index, 1);
    setToDos(updatedTodos);
  };  

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditToDo(toDos[index]);
  };

  const handleUpdate = () => {
    const updatedTodos = toDos.map((todo, index) =>
      index === editIndex ? editToDo : todo
    );
    setToDos(updatedTodos);
    setEditIndex(null);
    setEditToDo("");
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">To Do List</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter new todo"
              value={newToDo}
              onChange={(e) => setNewToDo(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleAdd}>
              ADD
            </button>
          </div>
          <ul className="list-group">
            {toDos.map((todo, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {editIndex === index ? (
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      value={editToDo}
                      onChange={(e) => setEditToDo(e.target.value)}
                    />
                    <button className="btn btn-success" onClick={handleUpdate}>
                      Save
                    </button>
                  </div>
                ) : (
                  <>
                    <span>{todo}</span>
                    <div>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(index)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDel(index)}>
                        Del
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Todo;
