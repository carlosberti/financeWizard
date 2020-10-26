import TransactionListItem from 'components/TransactionListItem'
import React from 'react'
import * as s from './styles'
import useTransactions from 'hooks/useTransactions'

export type Transaction = {
  value: string
  description: string
}

const TransactionList = () => {
  const { transactions } = useTransactions()

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
