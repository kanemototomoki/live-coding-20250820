import { userEvent, within, waitFor, expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite'
import Calculator from '.'
import '../Components.css'

const meta: Meta<typeof Calculator> = {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    initialValue: {
      control: 'number',
      description: '初期値を設定します',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    initialValue: 0,
  },
}

export const WithInitialValue: Story = {
  args: {
    initialValue: 5,
  },
}

export const WithCallbacks: Story = {
  args: {
    initialValue: 1,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement.ownerDocument.body);
    await userEvent.click(await canvas.findByRole('button', { name: 'x2' }));
    await waitFor(() => expect(canvas.queryByPlaceholderText('数値を入力してください', { exact: true })).toHaveValue(2));
    await userEvent.click(await canvas.findByRole('button', { name: 'x3' }));
    await waitFor(() => expect(canvas.queryByPlaceholderText('数値を入力してください', { exact: true })).toHaveValue(6));
  }
}
