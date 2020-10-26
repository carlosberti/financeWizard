import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionCard from '.'

export default {
  title: 'TransactionCard',
  component: TransactionCard
} as Meta

export const Default: Story = () => (
  <div style={{ maxWidth: '34rem', margin: '0 auto' }}>
    <TransactionCard />
  </div>
)
