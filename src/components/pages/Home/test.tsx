import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import TransactionsContextProvider, {
  transactionsContext
} from 'contexts/transactions'
import { transactions } from 'mocks'

import Home from '.'

describe('<Home />', () => {
  const addTransaction = jest.fn()

  const WrappedHome = () => (
    <transactionsContext.Provider value={{ transactions, addTransaction }}>
      <Home />
    </transactionsContext.Provider>
  )

  beforeEach(() => localStorage.clear())

  it('should render with header', () => {
    render(<WrappedHome />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should render transaction card', () => {
    render(<WrappedHome />)

    expect(screen.getByLabelText(/gasto*/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/descrição*/i)).toBeInTheDocument()
  })

  it('should render transaction list with mocked value', () => {
    render(<WrappedHome />)

    expect(screen.getByText('R$ 3,000')).toBeInTheDocument()
  })

  it('should create a transaction', () => {
    render(
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    )

    const input = screen.getByRole('textbox', { name: /gasto*/i })
    const textArea = screen.getByRole('textbox', { name: /descrição*/i })
    const button = screen.getByRole('button')

    userEvent.type(input, '4.000')
    userEvent.type(textArea, 'novo elemento')
    userEvent.click(button)

    expect(screen.getByText('R$ 4,000')).toBeInTheDocument()
  })

  it('should add more than 1 transaction', () => {
    render(
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    )

    const input = screen.getByRole('textbox', { name: /gasto*/i })
    const textArea = screen.getByRole('textbox', { name: /descrição*/i })
    const button = screen.getByRole('button')

    userEvent.type(input, '4.000')
    userEvent.type(textArea, 'novo elemento')
    userEvent.click(button)

    expect(screen.getByText('R$ 4,000')).toBeInTheDocument()

    userEvent.type(input, '5.000')
    userEvent.type(textArea, 'novo elemento 1')
    userEvent.click(button)

    expect(screen.getByText('R$ 5,000')).toBeInTheDocument()
  })

  it('Should call localStorage with setted value', () => {
    localStorage.setItem(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )
    render(
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    )

    expect(localStorage.getItem('localTransactions')).toBe(
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )
  })

  it('Should render transactions in localStorage', () => {
    localStorage.setItem(
      'localTransactions',
      '[{"value":"4.000","description":"novo elemento"},{"value":"5.000","description":"novo elemento 1"}]'
    )

    render(
      <TransactionsContextProvider>
        <Home />
      </TransactionsContextProvider>
    )

    expect(screen.getByText('R$ 4,000')).toBeInTheDocument()
    expect(screen.getByText('R$ 5,000')).toBeInTheDocument()
  })
})
