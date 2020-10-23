import React, { SelectHTMLAttributes } from 'react'
import * as s from './styles'

type Options = {
  value: string
  text: string
}

export type SelectProps = {
  label: string
  labelFor: string
  name?: string
  options: Options[]
  defaultValue: string
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({
  label,
  labelFor,
  name = 'type',
  options,
  defaultValue,
  onSelect
}: SelectProps) => {
  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(e)
  }

  return (
    <>
      <s.Label htmlFor={labelFor}>{label}</s.Label>
      <s.Select
        placeholder="Escolha o tipo de transação"
        onChange={onChange}
        name={name}
        id={labelFor}
        defaultValue={defaultValue}
      >
        {options.map(option => (
          <option key={option.text} value={option.value}>
            {option.text}
          </option>
        ))}
      </s.Select>
    </>
  )
}

export default Select
