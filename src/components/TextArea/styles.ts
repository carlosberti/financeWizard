import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  font-size: 2.4rem;
  color: black;
  font-weight: 700;
  cursor: pointer;

  > span {
    color: red;
  }
`

export const TextArea = styled.textarea`
  font-size: 2.4rem;
  padding: 0.8rem;
  border: 0;
  width: 100%;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  resize: none;
  height: 16rem;

  ::placeholder {
    font-size: 1.6rem;
    color: black;
    opacity: 1;
  }
`
