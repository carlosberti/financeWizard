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

  const money = parseFloat(value.replace(/\./g, '').replace(/,/g, '.'))

  const formatMoney = () => {
    if (money.toLocaleString('pt-br').includes(','))
      return money.toLocaleString('pt-br')

    return money.toLocaleString('pt-br') + ',00'
  }

  return (
    <s.Wrapper isPositive={money > 0} onClick={handleListClick}>
      <s.WrapperContent showDescription={showDescription}>
        <s.WrapperValue>
          <s.Value>R$ {formatMoney()}</s.Value>
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
