import styled from 'styled-components'

const FilterContainer = styled.div`
  margin: 20px 0;
`

const FilterLabel = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 5px;
  color: #666;
`

const FilterInput = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 0;
`

export default function Filter({ value, onChange }) {
  return (
    <FilterContainer>
      {/* <FilterLabel htmlFor="filter">🔍 Пошук завдань:</FilterLabel> */}
      <FilterInput
        id="filter"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Введіть текст для пошуку..."
      />
    </FilterContainer>
  )
}
