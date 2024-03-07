import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'Atomes/ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Active: Story = {
  args: {
    label: 'active btn',
    active: true
  },
};
export const unActive: Story = {
  args: {
    label: 'unactive btn',
    active: false
  },
};

