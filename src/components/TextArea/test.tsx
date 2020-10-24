import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import TextArea from '.'

describe('<TextArea />', () => {
  const onChange = jest.fn()

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should have passed label', () => {
    render(
      <TextArea
        label="Descrição"
        labelFor="description"
        onTextArea={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
      />
    )

    expect(screen.getByLabelText(/descrição*/i)).toBeInTheDocument()
  })

  it('should have typed value', async () => {
    render(
      <TextArea
        label="Descrição"
        labelFor="description"
        onTextArea={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
      />
    )

    const textArea = screen.getByLabelText(/descrição/i)
    userEvent.type(textArea, 'qualquer coisa')

    await waitFor(() => {
      expect(textArea).toHaveValue('qualquer coisa')
    })
  })
})
