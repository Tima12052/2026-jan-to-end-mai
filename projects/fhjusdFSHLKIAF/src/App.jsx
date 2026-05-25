import { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import todoData from "./todo.json"
import TodoList from './components/TodoList'
import TodoEditor from './components/TodoEditor'
import Filter from './components/Filter'

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-radius: 10px;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`

function App() {
  const [todos, setTodos] = useState(todoData)
  const [filter, setFilter] = useState('')

  const addTodo = (text) => {
    const newTodo = {
      id: `id-${Date.now()}`,
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <AppContainer>
      <TodoEditor onAdd={addTodo} />
      <Filter value={filter} onChange={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </AppContainer>
  )
}

export default App
