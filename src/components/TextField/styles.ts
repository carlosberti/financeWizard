import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  font-size: 2rem;
  color: black;
  font-weight: 700;
  cursor: pointer;

  > span {
    color: #cf4444;
  }

  @media screen and (min-width: 540px) {
    font-size: 2.4rem;
  }
`

export const Error = styled.span`
  color: #cf4444;
  font-size: 1.2rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const Input = styled.input`
  font-size: 2rem;
  padding: 0.8rem;
  border: 0;
  width: 100%;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  ::placeholder {
    font-size: 1.4rem;
    color: black;
    opacity: 1;
  }
  @media screen and (min-width: 540px) {
    font-size: 2.4rem;
    ::placeholder {
      font-size: 1.6rem;
    }
  }
`

export const Currency = styled.span`
  font-size: 2rem;
  margin-right: 0.2rem;
  font-weight: 600;
  line-height: 1;
  @media screen and (min-width: 540px) {
    font-size: 2.4rem;
  }
`
