import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionList, { TransactionListProps } from '.'
import { transactions } from 'mocks'

export default {
  title: 'TransactionList',
  component: TransactionList,
  args: {
    transactions: transactions
  },
  argTypes: {
    onTransactionList: { action: 'sent' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<TransactionListProps> = args => (
  <div style={{ margin: '0 auto' }}>
    <TransactionList {...args} />
  </div>
)
