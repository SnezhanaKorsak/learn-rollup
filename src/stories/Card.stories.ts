import type { Meta, StoryObj } from '@storybook/react';

import { Card } from '../Card';

const meta = {
    title: 'Example/Card',
    component: Card,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      title: {control: 'text'},
    },
    args: {  },
  } satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

  export const Basic: Story = {
    args: {
      title: 'Test Card Title',
      disabled: false,
      onClick: () => {console.log('click')}
    },
  }; 