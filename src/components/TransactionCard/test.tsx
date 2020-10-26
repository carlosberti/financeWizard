import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { transactionsContext } from 'contexts/transactions'
import React from 'react'

import TransactionCard from '.'

describe('<TransactionCard />', () => {
  const addTransaction = jest.fn()

  const WrappedTransactionCard = () => (
    <transactionsContext.Provider value={{ addTransaction }}>
      <TransactionCard />
    </transactionsContext.Provider>
  )

  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should send input and description values on successfully transaction', async () => {
    render(<WrappedTransactionCard />)

    const input = screen.getByRole('textbox', { name: /gasto/i })
    const textArea = screen.getByRole('textbox', { name: /descrição/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, '3000')
    userEvent.type(textArea, 'qualquer coisa')

    await waitFor(() => {
      expect(input).toHaveValue('3000')
      expect(textArea).toHaveValue('qualquer coisa')
      userEvent.click(button)
      expect(addTransaction).toHaveBeenCalledTimes(1)
    })
    expect(addTransaction).toHaveBeenCalledWith({
      value: '3000',
      description: 'qualquer coisa'
    })
  })

  it('should not send values if input was filled wrong', async () => {
    render(<WrappedTransactionCard />)

    const input = screen.getByRole('textbox', { name: /gasto/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, 'text')
    userEvent.click(button)

    await waitFor(() => {
      expect(addTransaction).toHaveBeenCalledTimes(0)
    })
  })

  it('should not send values if input was not filled', async () => {
    render(<WrappedTransactionCard />)

    const textArea = screen.getByRole('textbox', { name: /descrição/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(textArea, 'qualquer coisa')
    userEvent.click(button)

    await waitFor(() => {
      expect(addTransaction).toHaveBeenCalledTimes(0)
    })
  })

  it('should not send values if description was not filled', async () => {
    render(<WrappedTransactionCard />)

    const input = screen.getByRole('textbox', { name: /gasto/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, 'text')
    userEvent.click(button)

    await waitFor(() => {
      expect(addTransaction).toHaveBeenCalledTimes(0)
    })
  })

  it('should reset input and description value on successfully transaction', async () => {
    render(<WrappedTransactionCard />)

    const input = screen.getByRole('textbox', { name: /gasto/i })
    const textArea = screen.getByRole('textbox', { name: /descrição/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, '3000')
    userEvent.type(textArea, 'qualquer coisa')
    userEvent.click(button)

    await waitFor(() => {
      expect(addTransaction).toHaveBeenCalledTimes(1)
    })

    expect(input).toHaveValue('')
    expect(textArea).toHaveValue('')
  })
})
