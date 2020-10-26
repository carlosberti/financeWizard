import Header from 'components/Header'
import TransactionCard from 'components/TransactionCard'
import TransactionList from 'components/TransactionList'
import useTransactions from 'hooks/useTransactions'
import React from 'react'
import * as s from './styles'

const Home = () => {
  const { transactions } = useTransactions()

  return (
    <>
      <Header />
      <s.Wrapper hasTransactions={!!transactions}>
        <TransactionCard />

        {transactions && <TransactionList />}
      </s.Wrapper>
    </>
  )
}

export default Home
