import { Story, Meta } from '@storybook/react/types-6-0'
import Select, { SelectProps } from '.'

const Options = [
  {
    value: 'income',
    text: 'Entrada'
  },
  {
    value: 'outcome',
    text: 'Saída'
  }
]

export default {
  title: 'Select',
  component: Select,
  args: {
    label: 'Tipo',
    labelFor: 'type',
    options: Options
  },
  argTypes: {
    onSelect: { action: 'sent' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<SelectProps> = args => <Select {...args} />
