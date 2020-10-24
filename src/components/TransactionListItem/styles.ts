import styled, { css, keyframes } from 'styled-components'
import { HandIndex } from '@styled-icons/bootstrap'

const DropDownDescription = keyframes`
  from {
    transform: translateY(-1.2rem);
    opacity: 0
  },
  to {
    transform: translateY(0);
    opacity: 1
  }
`

export const Wrapper = styled.div<{ isPositive: boolean }>`
  ${({ isPositive }) => css`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    padding: 1.6rem;
    background-color: ${isPositive ? '#9bf542' : '#f55442'};
    border-radius: 0.4rem;
    cursor: pointer;
    &:hover {
      background-color: #ebf0ec;
      opacity: 0.5;
    }
  `}
`

const WrapperContentModifier = {
  showDescription: css`
    padding-bottom: 0.8rem;
    border-bottom: 0.1rem solid grey;
  `
}

export const WrapperContent = styled.div<{ showDescription: boolean }>`
  ${({ showDescription }) => css`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    align-items: center;
    justify-content: space-between;

    ${showDescription && WrapperContentModifier.showDescription}
  `}
`

export const WrapperValue = styled.div`
  display: flex;
  align-items: center;
`

export const Value = styled.h1`
  font-size: 1.6rem;
  @media screen and (min-width: 540px) {
    font-size: 2.4rem;
  }
`

export const DescriptionArea = styled.h2`
  font-size: 1.6rem;
  @media screen and (min-width: 540px) {
    font-size: 2.2rem;
  }
`

export const Description = styled.h3`
  margin-top: 1.6rem;
  font-size: 1.4rem;
  text-align: left;
  margin: 1.6rem 1.6rem 0;
  @media screen and (min-width: 540px) {
    font-size: 2rem;
    margin: 1.6rem 2.4rem 0;
  }
  color: #6e6a6a;
  animation: ${DropDownDescription} 0.3s ease-in-out;
`

export const HandIcon = styled(HandIndex)`
  width: 1.6rem;
  height: 1.6rem;
  @media screen and (min-width: 540px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`
