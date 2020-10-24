import React from 'react'
import { InputHTMLAttributes } from 'react'
import * as s from './styles'

export type TextFieldProps = {
  label: string
  labelFor: string
  name?: string
  error: boolean
  placeholder?: string
  value?: string
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor,
  error,
  name = 'value',
  value,
  placeholder = 'Valor da transação sem usar vírgula',
  onInput
}: TextFieldProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInput(e)
  }

  return (
    <>
      <s.Label htmlFor={labelFor}>
        {label}
        <span>*</span>
      </s.Label>
      <s.InputWrapper>
        <s.Currency>R$ </s.Currency>
        <s.Input
          type="text"
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          id={labelFor}
          value={value}
        />
      </s.InputWrapper>
      {error && <s.Error>Alguma coisa deu errada</s.Error>}
    </>
  )
}

export default TextField
