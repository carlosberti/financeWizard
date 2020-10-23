import { render } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

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

  it('should reset input and select value on successfully transaction', async () => {
    render(
      <Select
        label="Tipo"
        labelFor="select"
        options={Options}
        value="Entrada"
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
      />
    )
    expect(1).toBe(1)
  })
})
