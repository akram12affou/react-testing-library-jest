import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [edit , setEdit] =useState(false)
  const [editedTodo ,setEditedTodo] = useState('')
  const AddTodo = () => {
    if(todo==''){
      return;
    }
    setTodos((prev) => {
      return [todo, ...prev];
    });
    setTodo("");
  };
  const DeleteTodo = (i) => {
    const newTodoList = [];
    for (let x = 0; x < todos.length; x++) {
      if (x === i) {
      } else {
        newTodoList.push(todos[x]);
      }
    }
    setTodos(newTodoList);
  };

  return (
    <center>
      <br />
      <input
        placeholder="add Todo ..."
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={AddTodo} name="Add">
        Add
      </button>
      <br />
      {edit && <>edited input :<input value={editedTodo}  onChange={e =>setEditedTodo(e.target.value) } type="text" /></>}
      {todos.map((e, i) => {
        return (
          <center>
            <p data-testid={`p-tag-${i}`}>{e}</p>
            <button onClick={() => DeleteTodo(i)} data-testid={`delete-${i}`}>
            delete
            </button>
          </center>
        );
      })}
   
    </center>
  );
}

export default App;
