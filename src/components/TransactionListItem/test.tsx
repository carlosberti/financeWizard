import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TransactionListItem from '.'

describe('<TransactionListItem />', () => {
  it('should have passed value', () => {
    render(<TransactionListItem value="3.000" description="qualquer coisa" />)

    expect(screen.getByText(/3\.000/i)).toBeInTheDocument()
  })

  it('should not have description if not clicked', () => {
    render(<TransactionListItem value="3000" description="qualquer coisa" />)

    expect(screen.queryByText(/qualquer coisa/i)).not.toBeInTheDocument()
  })

  it('should have description if clicked', async () => {
    render(<TransactionListItem value="3000" description="qualquer coisa" />)

    const description = screen.getByText(/descrição/i)

    userEvent.click(description)

    await waitFor(() => {
      expect(screen.getByText(/qualquer coisa/i)).toBeInTheDocument()
    })
  })

  it('should render with green color if value is positive', () => {
    const { container } = render(
      <TransactionListItem value="3000" description="qualquer coisa" />
    )

    expect(container.firstChild).toHaveStyle({
      'background-color': '#9CDB1D'
    })
  })

  it('should render with red color if value is negative', () => {
    const { container } = render(
      <TransactionListItem value="-3000" description="qualquer coisa" />
    )

    expect(container.firstChild).toHaveStyle({
      background: '#EB3705'
    })
  })
})
