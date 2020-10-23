import GlobalStyles from 'styles/global'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles removeBg />
      <Story />
    </>
  )
]
