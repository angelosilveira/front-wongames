import { Story, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: Story<RibbonProps> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '40rem',
      height: '25rem',
      backgroundColor: '#888'
    }}
  >
    <Ribbon {...args} />
  </div>
)
