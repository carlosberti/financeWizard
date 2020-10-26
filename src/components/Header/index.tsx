import useTransactions from 'hooks/useTransactions'
import * as s from './styles'

const Header = () => {
  const { transactions } = useTransactions()

  const balance =
    transactions &&
    transactions
      .reduce((curr, next) => {
        return (
          curr + parseFloat(next.value.replace(/\./g, '').replace(/,/g, '.'))
        )
      }, 0)
      .toLocaleString('pt-br')

  const formatBalance = () => {
    const formattedBalance = balance.includes(',') ? balance : balance + ',00'
    return formattedBalance
  }

  return (
    <s.Wrapper>
      <s.ContentWrapper>
        <h1>&#129497; FinanceWizard</h1>
        <h2>Saldo: R$ {balance ? formatBalance() : '0,00'}</h2>
      </s.ContentWrapper>
    </s.Wrapper>
  )
}

export default Header
