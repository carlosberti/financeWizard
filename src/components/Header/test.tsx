import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render with heading', () => {
    render(<Header />)

    expect(
      screen.getByRole('heading', { name: /financewizard/i })
    ).toBeInTheDocument()
  })

  it('should render header with defined background', () => {
    const { container } = render(<Header />)

    expect(container).toHaveStyle({
      background: `linear-gradient(
      90deg,
      rgba(25, 24, 77, 1) 0%,
      rgba(4, 121, 187, 1) 100%
    )`
    })
  })
})
