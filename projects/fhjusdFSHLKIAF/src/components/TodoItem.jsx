import styled from 'styled-components'

const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
  border-bottom: 1px solid #eee;
`

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

const TodoText = styled.p`
  flex: 1;
  margin: 0;
  ${props => props.completed && `
    text-decoration: line-through;
    color: #ccc;
  `}
`

const DeleteButton = styled.button`
  padding: 5px 10px;
  background: none;
  color: #999;
  border: none;
  cursor: pointer;
  font-size: 12px;
  
  &:hover {
    color: #333;
  }
`

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <ListItem>
      <Checkbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <TodoText completed={todo.completed}>
        {todo.text}
      </TodoText>
      <DeleteButton onClick={() => onDelete(todo.id)}>
        Видалити
      </DeleteButton>
    </ListItem>
  )
}
