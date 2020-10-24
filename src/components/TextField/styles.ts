import styled from 'styled-components'
import { css } from 'styled-components'

export const Label = styled.label`
  display: block;
  font-size: 2.4rem;
  color: black;
  font-weight: 700;
  cursor: pointer;
`

export const Error = styled.span`
  color: red;
  font-size: 1.2rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const Input = styled.input<{ error: boolean }>`
  ${({ error }) => css`
    font-size: 2.4rem;
    padding: 0.8rem;
    border: 0;
    width: 100%;
    border-radius: 0.4rem;
    margin-top: 0.4rem;
    ${error && `margin-bottom: 1.6rem`}

    ::placeholder {
      font-size: 1.6rem;
      color: black;
      opacity: 1;
    }
  `}
`

export const Currency = styled.span`
  font-size: 2.4rem;
  margin-right: 0.2rem;
  font-weight: 600;
`
