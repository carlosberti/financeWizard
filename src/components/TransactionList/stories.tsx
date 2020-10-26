import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionList from '.'

export default {
  title: 'TransactionList',
  component: TransactionList,
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story = () => (
  <div style={{ margin: '0 auto' }}>
    <TransactionList />
  </div>
)
