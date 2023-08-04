import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"criar funcionalidade x no sistema",
      category:"trabalho",
      isCompleted: false,

    },
    {
      id:2,
      text:"ir para a acdemia",
      category:"pessoal",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category:"Estudo",
      isCompleted: false,
    },
    ]
    )


return <div className="app">
   <h1>Lista de Tarefas</h1>
   <div className='todo-lista'> 
    {todos.map((todo) => (
      <div className="todo">
        <div className="content">
          <p>{todo.text}</p>
        </div>
      </div>
    ))}
   </div>
</div>;
  
}

export default App;