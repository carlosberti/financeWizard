import { SingleTransactionProps } from 'components/TransactionCard'

const isValidValues = (
  singleTransaction: SingleTransactionProps,
  onValidate: (error: boolean) => void
): boolean => {
  // const date = singleTransaction.date
  const value = singleTransaction.value
  // const year = new Date().getFullYear()

  // if (
  //   date.length < 3 ||
  //   parseInt(date.split('/')[2]) < 1910 ||
  //   parseInt(date.split('/')[2]) > year
  // ) {
  //   return false
  // }
  if (value.match(/^\d+(,\d{3})*(\.\d{1,2})?$/) === null) {
    onValidate(true)
    return false
  }
  onValidate(false)
  return true
}

export default isValidValues
