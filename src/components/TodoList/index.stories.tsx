// import { userEvent, within, waitFor, expect } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-vite';
import TodoList from '.';
import '../Components.css';

const meta: Meta<typeof TodoList> = {
  title: 'Components/TodoList',
  component: TodoList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
