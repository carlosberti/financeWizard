import { Story, Meta } from '@storybook/react/types-6-0'
import TextArea, { TextAreaProps } from '.'

export default {
  title: 'TextArea',
  component: TextArea,
  args: {
    label: 'Descrição',
    labelFor: 'description'
  },
  argTypes: {
    onTextArea: { action: 'sent' }
  },
  parameters: {
    backgrounds: {
      default: 'light'
    }
  }
} as Meta

export const Default: Story<TextAreaProps> = args => <TextArea {...args} />
