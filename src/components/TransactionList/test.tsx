import { screen, render } from '@testing-library/react'

import TransactionList from '.'

describe('<TransactionList />', () => {
  const transactions = [
    {
      value: '3000',
      description: 'primero'
    },
    {
      value: '3000',
      description: 'segundo'
    },
    {
      value: '3000',
      description: 'terceiro'
    },
    {
      value: '3000',
      description: 'quarto'
    },
    {
      value: '3000',
      description: 'quinto'
    }
  ]

  it('should render transactionListItems', () => {
    render(<TransactionList transactions={transactions} />)

    expect(screen.getAllByRole('heading', { name: /3000/i })).toHaveLength(5)
  })
})
