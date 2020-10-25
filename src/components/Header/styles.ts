import styled from 'styled-components'

export const Wrapper = styled.header`
  background-color: rgb(102, 111, 139);
  border-bottom: 0.1rem solid black;
  padding: 0.8rem 1.6rem;
  @media screen and (min-width: 720px) {
    padding: 0.8rem 3.2rem;
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  max-width: 144rem;
  flex: 1;
  > h1 {
    color: black;
  }
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media screen and (min-width: 720px) {
    flex-flow: row nowrap;
  }
`
