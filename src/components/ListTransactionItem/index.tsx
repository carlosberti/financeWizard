import React from 'react'
import * as s from './styles'

export type ListTransactionItemProps = {
  description?: string
  value: string
}

const ListTransactionItem = ({
  description,
  value
}: ListTransactionItemProps) => {
  const newValue = Number(value).toFixed(2).toLocaleString()
  const [showDescription, setShowDescription] = React.useState<boolean>(false)

  const handleListClick = () => {
    setShowDescription(prev => !prev)
  }

  return (
    <s.Wrapper onClick={handleListClick}>
      <s.WrapperContent showDescription={showDescription}>
        <s.WrapperValue>
          <s.Value>R$ {newValue}</s.Value>
          {newValue && parseInt(newValue) > 0 ? (
            <s.Icon data-testid="dollarIcon" color="green" />
          ) : (
            <s.Icon data-testid="dollarIcon" color="red" />
          )}
        </s.WrapperValue>

        <s.DescriptionArea>
          descrição <s.HandIcon />
        </s.DescriptionArea>
      </s.WrapperContent>
      {showDescription && <s.Description>{description}</s.Description>}
    </s.Wrapper>
  )
}

export default ListTransactionItem
