import Header from 'components/Header'
import TransactionCard from 'components/TransactionCard'
import TransactionList from 'components/TransactionList'
import React from 'react'
import * as s from './styles'

type Transaction = {
  value: string
  description: string
}

const Home = () => {
  const [transactions, setTransactions] = React.useState<Transaction[] | null>(
    null
  )

  React.useEffect(() => {
    const localValues = localStorage.getItem('localTransactions')

    localValues && setTransactions(JSON.parse(localValues).reverse())
  }, [])

  const onTransaction = ({ value, description }: Transaction) => {
    const newTransaction: Transaction = { value, description }

    if (transactions) setTransactions(prev => [newTransaction, ...prev])
    else setTransactions([newTransaction])

    const localTransactions = localStorage.getItem('localTransactions')

    const newLocalTransactions =
      (localTransactions && JSON.parse(localTransactions)) || []

    newLocalTransactions.push(newTransaction)

    localStorage.setItem(
      'localTransactions',
      JSON.stringify(newLocalTransactions)
    )
  }

  const balance =
    transactions &&
    transactions.reduce((curr, next) => {
      return curr + parseFloat(next.value.replace(/\./g, '').replace(/,/g, '.'))
    }, 0)

  return (
    <>
      <Header balance={balance?.toLocaleString()} />
      <s.Wrapper hasTransactions={!!transactions}>
        <TransactionCard
          onTransaction={({ value, description }) =>
            onTransaction({ value, description })
          }
        />

        <TransactionList transactions={transactions} />
      </s.Wrapper>
    </>
  )
}

export default Home
