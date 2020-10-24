import React from 'react'
import * as s from './styles'

export type TransactionListItemProps = {
  description: string
  value: string
}

const TransactionListItem = ({
  description,
  value
}: TransactionListItemProps) => {
  const [showDescription, setShowDescription] = React.useState<boolean>(false)

  const handleListClick = () => {
    setShowDescription(prev => !prev)
  }

  return (
    <s.Wrapper isPositive={parseInt(value) > 0} onClick={handleListClick}>
      <s.WrapperContent showDescription={showDescription}>
        <s.WrapperValue>
          <s.Value>R$ {value}</s.Value>
        </s.WrapperValue>

        <s.DescriptionArea>
          descrição <s.HandIcon />
        </s.DescriptionArea>
      </s.WrapperContent>
      {showDescription && <s.Description>{description}</s.Description>}
    </s.Wrapper>
  )
}

export default TransactionListItem
