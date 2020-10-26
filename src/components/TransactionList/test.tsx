import { screen, render } from '@testing-library/react'

import TransactionList from '.'
import { transactions } from 'mocks'
import { transactionsContext } from 'contexts/transactions'

describe('<TransactionList />', () => {
  it('should render transactionListItems', () => {
    render(
      <transactionsContext.Provider value={{ transactions }}>
        <TransactionList />
      </transactionsContext.Provider>
    )

    expect(screen.getAllByRole('heading', { name: /3,000/i })).toHaveLength(5)
  })
})
