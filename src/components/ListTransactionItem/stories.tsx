import { Story, Meta } from '@storybook/react/types-6-0'
import ListTransactionItem, { ListTransactionItemProps } from '.'

export default {
  title: 'ListTransactionItem',
  component: ListTransactionItem,
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

export const Default: Story<ListTransactionItemProps> = args => (
  <div style={{ maxWidth: '688px' }}>
    <ListTransactionItem {...args} />
  </div>
)
