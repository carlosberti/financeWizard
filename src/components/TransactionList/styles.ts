import styled from 'styled-components'

export const Wrapper = styled.section`
  max-height: 37rem;
  flex: 1;
  overflow: auto;

  @media screen and (min-width: 980px) {
    max-width: 67rem;
  }
  > div {
    & + div {
      margin-top: 0.6rem;
    }
  }
`
