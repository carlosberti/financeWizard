import { Transaction } from 'components/TransactionList'
import React from 'react'

type transactionsContext = {
  children: React.ReactNode
}

export type TransactionsContextProps = {
  transactions: Transaction[] | null
  addTransaction: (transaction: Transaction) => void
}

export const transactionsContext = React.createContext<
  Partial<TransactionsContextProps>
>({})

export default function TransactionsContextProvider({
  children
}: transactionsContext) {
  const [transactions, setTransactions] = React.useState<Transaction[] | null>(
    null
  )

  React.useEffect(() => {
    const localValues = localStorage.getItem('localTransactions')

    localValues && setTransactions(JSON.parse(localValues).reverse())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addTransaction = (transaction: Transaction) => {
    if (transactions)
      setTransactions((prev: Transaction[] | null) => [transaction, ...prev])
    else setTransactions([transaction])

    const localTransactions = localStorage.getItem('localTransactions')

    const newLocalTransactions =
      (localTransactions && JSON.parse(localTransactions)) || []

    newLocalTransactions.push(transaction)

    localStorage.setItem(
      'localTransactions',
      JSON.stringify(newLocalTransactions)
    )
  }

  return (
    <transactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </transactionsContext.Provider>
  )
}
