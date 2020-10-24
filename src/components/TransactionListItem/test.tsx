import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TransactionListItem from '.'

describe('<TransactionListItem />', () => {
  it('should have passed value', () => {
    render(<TransactionListItem value="3000" description="qualquer coisa" />)

    expect(screen.getByText(/3000/i)).toBeInTheDocument()
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

  it('should have green dollar icon if value is positive', async () => {
    render(<TransactionListItem value="3000" description="qualquer coisa" />)

    const icon = screen.getByTestId('dollarIcon')

    expect(icon.getAttribute('color')).toBe('green')
  })

  it('should have red dollar icon if value is negative', async () => {
    render(<TransactionListItem value="-3000" description="qualquer coisa" />)

    const icon = screen.getByTestId('dollarIcon')

    expect(icon.getAttribute('color')).toBe('red')
  })
})
