import styled, { css } from 'styled-components'

export const Wrapper = styled.main<{ hasTransactions: boolean }>`
  ${({ hasTransactions }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: ${hasTransactions ? 'space-between' : 'center'};
    margin: 0 auto;
    max-width: 144rem;
    padding: 1.6rem;

    @media screen and (min-width: 980px) {
      flex-flow: row nowrap;
      justify-content: ${hasTransactions ? 'space-between' : 'center'};
      padding: 3.2rem;
    }

    > section {
      :first-child {
        margin-bottom: 2.4rem;
        @media screen and (min-width: 980px) {
          margin-right: 3.2rem;
        }
      }
    }
  `}
`
