import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Select from '.'

const Options = [
  {
    value: 'income',
    text: 'Entrada'
  },
  {
    value: 'outcome',
    text: 'Saída'
  }
]

describe('<Select />', () => {
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have passed label', () => {
    render(
      <Select
        label="Tipo"
        labelFor="select"
        options={Options}
        defaultValue="Entrada"
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
      />
    )

    expect(screen.getByLabelText('Tipo')).toBeInTheDocument()
  })

  it('should have defaultValue selected by default', () => {
    render(
      <Select
        label="Tipo"
        labelFor="select"
        options={Options}
        defaultValue="Entrada"
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
      />
    )

    const select = screen.getByRole('combobox')

    expect(select).toHaveValue('income')
  })

  it('should have selected Value', () => {
    render(
      <Select
        label="Tipo"
        labelFor="select"
        options={Options}
        defaultValue="Entrada"
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
      />
    )

    const select = screen.getByRole('combobox')
    userEvent.selectOptions(select, 'Saída')

    expect(select).toHaveValue('outcome')
  })
})
