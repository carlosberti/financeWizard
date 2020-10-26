import GlobalStyles from 'styles/global'
import { transactions } from 'mocks'
import { transactionsContext } from 'contexts/transactions'

export const decorators = [
  Story => (
    <>
      <GlobalStyles removeBg />
      <transactionsContext.Provider value={{ transactions }}>
        <Story />
      </transactionsContext.Provider>
    </>
  )
]
