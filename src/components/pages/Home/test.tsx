import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Home from '.'

describe('<Home />', () => {
  beforeEach(() => localStorage.clear())

  it('should render with header', () => {
    render(<Home />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render transaction card', () => {
    render(<Home />)

    expect(screen.getByLabelText(/gasto*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/descrição*/i)).toBeInTheDocument()
  })

  it('should render transaction list when transaction is made', () => {
    render(<Home />)

    const input = screen.getByLabelText(/gasto*/i)
    const textArea = screen.getByLabelText(/descrição/i)
    const button = screen.getByRole('button')

    userEvent.type(input, '4.000')
    userEvent.type(textArea, 'novo elemento')
    userEvent.click(button)

    expect(screen.getByText('R$ 4,000')).toBeInTheDocument()
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"}]'
    )

    userEvent.type(input, '5.000')
    userEvent.type(textArea, 'novo elemento 1')
    userEvent.click(button)

    expect(screen.getByText('R$ 5,000')).toBeInTheDocument()
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )

    expect(localStorage.setItem).toHaveBeenCalledTimes(2)
  })

  it('should set localstorage when transaction is made', () => {
    render(<Home />)

    const input = screen.getByLabelText(/gasto*/i)
    const textArea = screen.getByLabelText(/descrição/i)
    const button = screen.getByRole('button')

    userEvent.type(input, '4.000')
    userEvent.type(textArea, 'novo elemento')
    userEvent.click(button)

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"}]'
    )
  })

  it('Should call localStorage with setted value', () => {
    localStorage.setItem(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )
    render(<Home />)

    expect(localStorage.getItem('localTransactions')).toBe(
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )
  })

  it('Should render transactions in localStorage', () => {
    localStorage.setItem(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )

    render(<Home />)

    expect(screen.getByText('R$ 4,000')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,000')).toBeInTheDocument()
  })
})
