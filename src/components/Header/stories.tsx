import { Story, Meta } from '@storybook/react/types-6-0'
import Header, { HeaderProps } from '.'

export default {
  title: 'Header',
  component: Header,
  args: {
    balance: '3878946'
  }
} as Meta

export const Default: Story<HeaderProps> = args => <Header {...args} />
