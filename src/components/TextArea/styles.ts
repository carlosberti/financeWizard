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

export const TextArea = styled.textarea`
  font-size: 2rem;
  padding: 0.8rem;
  border: 0;
  width: 100%;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  resize: none;
  height: 12rem;

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
    height: 16rem;
  }
`
