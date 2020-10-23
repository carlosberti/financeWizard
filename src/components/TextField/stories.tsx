import { Story, Meta } from '@storybook/react/types-6-0'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'Gasto',
    labelFor: 'value',
    error: false
  },
  argTypes: {
    onInput: { action: 'sent' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = args => <TextField {...args} />
