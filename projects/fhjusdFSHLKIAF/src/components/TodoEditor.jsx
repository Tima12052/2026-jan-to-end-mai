import { useState } from 'react'
import styled from 'styled-components'

const EditorContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`

const Input = styled.input`
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 0;
`

const AddButton = styled.button`
  padding: 8px 16px;
  background: #333;
  color: white;
  border: none;
  border-radius: 0;
  cursor: pointer;
  font-size: 14px;
  white-space: nowrap;
`

export default function TodoEditor({ onAdd }) {
  const [textValue, setTextValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (textValue.trim()) {
      onAdd(textValue)
      setTextValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <EditorContainer>
        <Input
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Введіть нове завдання..."
        />
        <AddButton type="submit">
          Додати
        </AddButton>
      </EditorContainer>
    </form>
  )
}
