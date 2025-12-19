import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'text',
    },
    shadow: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is a card component with some content inside it.',
    width: 400,
  },
};

export const WithoutTitle: Story = {
  args: {
    children: 'This is a card without a title.',
    width: 400,
  },
};

export const NoShadow: Story = {
  args: {
    title: 'Card Without Shadow',
    children: 'This card has no shadow effect.',
    shadow: false,
    width: 400,
  },
};

export const LongContent: Story = {
  args: {
    title: 'Card with Long Content',
    children: (
      <div>
        <p>This is a paragraph with more content.</p>
        <p>It demonstrates how the card handles multiple paragraphs and longer text content.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    ),
    width: 400,
  },
};

