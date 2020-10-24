import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { debug } from 'console'

import ListTransactionItem from '.'

describe('<ListTransactionItem />', () => {
  it('should have passed value', () => {
    render(<ListTransactionItem value="3000" description="qualquer coisa" />)

    expect(screen.getByText(/3000/i)).toBeInTheDocument()
  })

  it('should not have description if not clicked', () => {
    render(<ListTransactionItem value="3000" description="qualquer coisa" />)

    expect(screen.queryByText(/qualquer coisa/i)).not.toBeInTheDocument()
  })

  it('should have description if clicked', async () => {
    render(<ListTransactionItem value="3000" description="qualquer coisa" />)

    const description = screen.getByText(/descrição/i)

    userEvent.click(description)

    await waitFor(() => {
      expect(screen.getByText(/qualquer coisa/i)).toBeInTheDocument()
    })
  })

  it('should have green dollar icon if value is positive', async () => {
    const { debug } = render(
      <ListTransactionItem value="3000" description="qualquer coisa" />
    )

    const icon = screen.getByTestId('dollarIcon')

    debug(icon)

    expect(icon.getAttribute('color')).toBe('green')
  })

  it('should have red dollar icon if value is negative', async () => {
    render(<ListTransactionItem value="-3000" description="qualquer coisa" />)

    const icon = screen.getByTestId('dollarIcon')

    debug(icon)
    expect(icon.getAttribute('color')).toBe('red')
  })
})
