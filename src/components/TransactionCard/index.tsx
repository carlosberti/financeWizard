import React from 'react'

import TextField from 'components/TextField'
import isValidValues from 'utils/isValidValues'
import * as s from './styles'
import TextArea from 'components/TextArea'

export type TransactionCardProps = {
  onTransaction: ({ value, description }: SingleTransactionProps) => void
}

export type SingleTransactionProps = {
  value: string
  description: string
}

const initialValue: SingleTransactionProps = {
  value: '',
  description: ''
}

const TransactionCard = ({ onTransaction }: TransactionCardProps) => {
  const [singletransaction, setSingleTransaction] = React.useState<
    SingleTransactionProps
  >(initialValue)
  const [error, setError] = React.useState(false)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
      <s.Example>Exemplo: 3.000,01 (3 mil e 1 centavo)</s.Example>
      <TextArea
        label="Descrição"
        labelFor="description"
        onTextArea={(e: React.ChangeEvent<HTMLTextAreaElement>) => onChange(e)}
        value={singletransaction.description}
      />
      <s.TransactionButton onClick={onClick}>
        Fazer transação
      </s.TransactionButton>
    </s.Wrapper>
  )
}

export default TransactionCard
