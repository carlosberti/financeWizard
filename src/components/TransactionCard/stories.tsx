import { Story, Meta } from '@storybook/react/types-6-0'
import TransactionCard, { TransactionCardProps } from '.'

export default {
  title: 'TransactionCard',
  component: TransactionCard,
  argTypes: {
    onTransaction: { action: 'sent' }
  }
} as Meta

export const Default: Story<TransactionCardProps> = args => (
  <TransactionCard {...args} />
)
