import { render, screen } from '@testing-library/react'

import Header from '.'
import TransactionsContextProvider, {
  transactionsContext
} from 'contexts/transactions'
import { transactions } from 'mocks'

describe('<Header />', () => {
  const WrappedHeader = () => (
    <transactionsContext.Provider value={{ transactions }}>
      <Header />
    </transactionsContext.Provider>
  )

  it('should render with heading', () => {
    render(<WrappedHeader />)

    expect(
      screen.getByRole('heading', { name: /financewizard/i })
    ).toBeInTheDocument()
  })

  it('should render with passed balance', () => {
    render(<WrappedHeader />)

    expect(
      screen.getByRole('heading', { name: /saldo: r\$ -2,999\.5/i })
    ).toBeInTheDocument()
  })

  it('should render with 0 balance if balance is not passed', () => {
    render(
      <TransactionsContextProvider>
        <Header />
      </TransactionsContextProvider>
    )

    expect(
      screen.getByRole('heading', { name: /saldo: r\$ 0,00/i })
    ).toBeInTheDocument()
  })

  it('should render header with defined background', () => {
    const { container } = render(<WrappedHeader />)

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'rgb(102, 111, 139)'
    })
  })
})
