import styled from 'styled-components'

export const Wrapper = styled.div`
  max-height: 37rem;
  overflow: auto;
  > div {
    & + div {
      margin-top: 0.6rem;
    }
  }
`
