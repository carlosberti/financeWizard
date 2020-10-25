import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionListItem, { TransactionListItemProps } from '.'

export default {
  title: 'TransactionListItem',
  component: TransactionListItem,
  args: {
    value: '30000',
    description:
      'Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer Uma compra qualquer '
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
