import React from 'react'

const TodoForm = ({TodoForm}) => {
  return(
  <div className='todo-form'>
    <h2>Criar tarefa:</h2>
    <form >
        <input type="text" placeholder='digite o título' />
        <select>
            <option value="">Selecione um categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudo">Estudo</option>
            <option value="Pessoa">Pessoal</option>
        </select>
        <button type='submit'>Criar tarefa</button>
    </form>
  </div>
  )
}

export default TodoForm;