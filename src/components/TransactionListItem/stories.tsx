import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionListItem, { TransactionListItemProps } from '.'

export default {
  title: 'TransactionListItem',
  component: TransactionListItem,
  args: {
    value: '30000',
    description:
      'qualquer coisa qualquer coisaqualquer coisa qualquer coisa qualquer coisaqualquer coisa qualquer coisa qualquer coisaqualquer coisa qualquer coisa qualquer coisaqualquer coisa qualquer coisa qualquer coisaqualquer coisa'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<TransactionListItemProps> = args => (
  <div style={{ maxWidth: '688px', margin: '0 auto' }}>
    <TransactionListItem {...args} />
  </div>
)
