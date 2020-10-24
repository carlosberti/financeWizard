import { screen, render } from '@testing-library/react'

import TransactionList from '.'
import { transactions } from 'mocks'

describe('<TransactionList />', () => {
  it('should render transactionListItems', () => {
    render(<TransactionList transactions={transactions} />)

    expect(screen.getAllByRole('heading', { name: /3000/i })).toHaveLength(5)
  })
})
