import TransactionListItem from 'components/TransactionListItem'
import React, { TextareaHTMLAttributes } from 'react'
import * as s from './styles'

type Transaction = {
  value: string
  description: string
}

export type TransactionListProps = {
  transactions: Transaction[]
} & TextareaHTMLAttributes<HTMLTextAreaElement>

const TransactionList = ({ transactions }: TransactionListProps) => {
  return (
    <s.Wrapper>
      {!!transactions &&
        transactions.map((transaction: Transaction, index) => (
          <TransactionListItem
            key={`${transaction}${index}`}
            value={transaction.value}
            description={transaction.description}
          />
        ))}
    </s.Wrapper>
  )
}

export default TransactionList
