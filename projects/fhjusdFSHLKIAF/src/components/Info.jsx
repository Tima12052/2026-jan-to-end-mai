import styled from 'styled-components'

const InfoContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
  justify-content: center;
  flex-wrap: wrap;
`

const InfoCard = styled.div`
  background: white;
  padding: 15px;
  border: 1px solid #e0e0e0;
  text-align: center;
  min-width: 100px;
`

const InfoLabel = styled.p`
  margin: 0;
  font-size: 11px;
  color: #999;
`

const InfoValue = styled.p`
  margin: 5px 0 0 0;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

export default function Info({ todos }) {
  const completedCount = todos.filter(todo => todo.completed).length
  const totalCount = todos.length

  return (
    <InfoContainer>
      <InfoCard>
        <InfoLabel>Всього завдань</InfoLabel>
        <InfoValue>{totalCount}</InfoValue>
      </InfoCard>
      <InfoCard>
        <InfoLabel>Виконано</InfoLabel>
        <InfoValue>{completedCount}</InfoValue>
      </InfoCard>
      <InfoCard>
        <InfoLabel>Залишилось</InfoLabel>
        <InfoValue>{totalCount - completedCount}</InfoValue>
      </InfoCard>
    </InfoContainer>
  )
}
