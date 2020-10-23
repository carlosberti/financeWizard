import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TransactionCard from '.'

describe('<TransactionCard />', () => {
  const onTransaction = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have value outcome when `saida` is selected', async () => {
    render(<TransactionCard onTransaction={onTransaction} />)

    const select = screen.getByRole('combobox', { name: /tipo/i })
    userEvent.selectOptions(select, 'Saída')

    await waitFor(() => {
      expect(select).toHaveValue('outcome')
    })
  })

  it('should send input and select values when button is clicked', async () => {
    render(<TransactionCard onTransaction={onTransaction} />)

    const input = screen.getByRole('textbox')
    const select = screen.getByRole('combobox', { name: /tipo/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, '3000')

    await waitFor(() => {
      expect(input).toHaveValue('3000')
      expect(select).toHaveValue('income')
      userEvent.click(button)
      expect(onTransaction).toHaveBeenCalledTimes(1)
    })
    expect(onTransaction).toHaveBeenCalledWith({
      value: '3000',
      type: 'income'
    })
  })

  it('should set initialValue to input and select after send', async () => {
    render(<TransactionCard onTransaction={onTransaction} />)

    const input = screen.getByRole('textbox')
    const select = screen.getByRole('combobox', { name: /tipo/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, '3000')

    await waitFor(() => {
      expect(input).toHaveValue('3000')
      expect(select).toHaveValue('income')
      userEvent.click(button)
      expect(onTransaction).toHaveBeenCalledTimes(1)
    })
    expect(onTransaction).toHaveBeenCalledWith({
      value: '3000',
      type: 'income'
    })
  })

  it('should not send input and select if input was filled wrong', async () => {
    render(<TransactionCard onTransaction={onTransaction} />)

    const input = screen.getByRole('textbox')
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, 'text')
    userEvent.click(button)

    await waitFor(() => {
      expect(onTransaction).toHaveBeenCalledTimes(0)
    })
  })

  it('should reset input and select value on successfully transaction', async () => {
    render(<TransactionCard onTransaction={onTransaction} />)

    const input = screen.getByRole('textbox')
    const select = screen.getByRole('combobox', { name: /tipo/i })
    const button = screen.getByRole('button', { name: /fazer transação/i })
    userEvent.type(input, '3000')
    userEvent.click(button)

    await waitFor(() => {
      expect(onTransaction).toHaveBeenCalledTimes(1)
    })

    expect(input).toHaveValue('')
    expect(select).toHaveValue('income')
  })
})
