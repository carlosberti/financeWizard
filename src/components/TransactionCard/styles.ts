import styled from 'styled-components'

export const Wrapper = styled.section`
  background-color: #ebf0ec;
  padding: 1.6rem;
  flex: 1;

  @media screen and (min-width: 980px) {
    max-width: 67rem;
  }
  border-radius: 0.4rem;
  > label {
    :not(:first-child) {
      margin-top: 1.6rem;
    }
  }
`

export const TransactionButton = styled.button`
  display: block;
  border-radius: 4px;
  padding: 0.8rem;
  cursor: pointer;
  margin-left: auto;
  background-color: #ebf0ec;
  margin-top: 1.6rem;
  opacity: 0.6;

  &:hover {
    background-color: #ebf0ec;
    opacity: 1;
  }
`
