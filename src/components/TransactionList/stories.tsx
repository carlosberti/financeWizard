import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionList, { TransactionListProps } from '.'

const transactions = [
  {
    value: '3000',
    description: 'primero'
  },
  {
    value: '3000',
    description: 'segundo'
  },
  {
    value: '3000',
    description: 'terceiro'
  },
  {
    value: '3000',
    description: 'quarto'
  },
  {
    value: '3000',
    description: 'quinto'
  }
]

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
  <TransactionList {...args} />
)
