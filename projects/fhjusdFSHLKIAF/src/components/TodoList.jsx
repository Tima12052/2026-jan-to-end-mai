import styled from 'styled-components'
import TodoItem from './TodoItem'

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;
`

const EmptyMessage = styled.p`
  text-align: center;
  color: white;
  font-size: 16px;
  margin-top: 20px;
  font-style: italic;
`

export default function TodoList({ todos, onToggle, onDelete }) {
  return (
    <>
      {todos.length === 0 ? (
        <EmptyMessage>
          Немає завдань що відповідають фільтру
        </EmptyMessage>
      ) : (
        <ListContainer>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </ListContainer>
      )}
    </>
  )
}
