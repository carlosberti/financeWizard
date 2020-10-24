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

    expect(container.firstChild).toHaveStyle({
      backgroundColor: 'rgb(102, 111, 139)'
    })
  })
})
