import * as s from './styles'

export type HeaderProps = {
  balance: string | undefined
}

const Header = ({ balance }: HeaderProps) => {
  return (
    <s.Wrapper>
      <s.ContentWrapper>
        <h1>&#129497; FinanceWizard</h1>
        <h2>Saldo: R$ {balance ? balance : 0}</h2>
      </s.ContentWrapper>
    </s.Wrapper>
  )
}

export default Header
