import Select from 'components/Select'
import TextField from 'components/TextField'
import React from 'react'
import { InputHTMLAttributes } from 'react'
import isValidValues from 'utils/isValidValues'
import * as s from './styles'

export type TransactionCardProps = {
  onTransaction: ({ value, type }: SingleTransactionProps) => void
} & InputHTMLAttributes<HTMLInputElement>

export type SingleTransactionProps = {
  value: string
  type: 'income' | 'outcome'
}

const initialValue: SingleTransactionProps = {
  value: '',
  type: 'income'
}

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

const TransactionCard = ({ onTransaction }: TransactionCardProps) => {
  const [singletransaction, setSingleTransaction] = React.useState<
    SingleTransactionProps
  >(initialValue)
  const [error, setError] = React.useState(false)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setSingleTransaction(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const onValidate = (error: boolean) => {
    setError(error)
  }

  const onClick = () => {
    if (isValidValues(singletransaction, onValidate)) {
      onTransaction(singletransaction)
      setSingleTransaction(initialValue)
    }
  }

  return (
    <s.Wrapper>
      <TextField
        label="Gasto"
        labelFor="value"
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        error={error}
        value={singletransaction.value}
      />
      <Select
        label="Tipo"
        labelFor="type"
        defaultValue={singletransaction.type}
        onSelect={(e: React.ChangeEvent<HTMLSelectElement>) => onChange(e)}
        options={Options}
      />
      <s.TransactionButton type="submit" onClick={onClick}>
        Fazer transação
      </s.TransactionButton>
    </s.Wrapper>
  )
}

export default TransactionCard
