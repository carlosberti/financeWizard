import { SingleTransactionProps } from 'components/TransactionCard'

const areValidValues = (
  singleTransaction: SingleTransactionProps,
  onValidate: (error: boolean) => void
): boolean => {
  const value = singleTransaction.value
  const description = singleTransaction.description

  if (
    description.length < 1 ||
    value.match(/^-?\d+(\.\d{3})*(,\d{1,2})?$/) === null ||
    Number(value) === 0
  ) {
    onValidate(true)
    return false
  }
  onValidate(false)
  return true
}

export default areValidValues
