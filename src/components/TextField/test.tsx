import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have passed label', () => {
    render(
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={false}
        value=""
      />
    )

    expect(screen.getByLabelText('Gasto*')).toBeInTheDocument()
  })

  it('should have typed value', async () => {
    render(
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={false}
      />
    )

    const input = screen.getByRole('textbox')
    userEvent.type(input, '3000')

    await waitFor(() => {
      expect(input).toHaveValue('3000')
    })
  })

  it('should render error message', () => {
    render(
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={true}
        value=""
      />
    )

    expect(screen.getByText(/alguma coisa deu errada/i)).toBeInTheDocument()
  })

  it('should focus on input when label cliked', () => {
    render(
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={true}
        value=""
      />
    )

    const label = screen.getByLabelText('Gasto*')
    userEvent.click(label)

    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should focus on input when tab pressed', () => {
    render(
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={true}
        value=""
      />
    )

    userEvent.tab()

    expect(screen.getByRole('textbox')).toHaveFocus()
  })
})
