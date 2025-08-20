// import { userEvent, within, waitFor, expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import Calculator from '.';
import '../Components.css';

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
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialValue: 0,
  },
};
