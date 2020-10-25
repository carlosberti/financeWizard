import styled, { css, keyframes } from 'styled-components'
import { HandIndex } from '@styled-icons/bootstrap'

const DropDownDescription = keyframes`
  from {
    transform: translateY(1.2rem);
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
    flex-flow: column-reverse nowrap;
    width: 100%;
    padding: 1.6rem;
    background-color: ${isPositive ? '#9CDB1D' : '#EB3705'};
    border-radius: 0.4rem;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  `}
`

const WrapperContentModifier = {
  showDescription: css`
    padding-top: 0.8rem;
    border-top: 0.1rem solid grey;
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
  font-size: 1.4rem;
  text-align: left;
  margin: 0 1.6rem 1.6rem;
  @media screen and (min-width: 540px) {
    font-size: 2rem;
    margin: 0 2.4rem 1.6rem;
  }
  opacity: 0.8;
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
