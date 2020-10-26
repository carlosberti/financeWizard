import { transactionsContext } from 'contexts/transactions'
import React from 'react'

const useTransactions = () => {
  const { transactions, addTransaction } = React.useContext(transactionsContext)

  return { transactions, addTransaction }
}

export default useTransactions
