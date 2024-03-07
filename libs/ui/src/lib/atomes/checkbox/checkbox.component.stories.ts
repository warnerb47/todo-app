import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from './checkbox.component';

const meta: Meta<CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'Atomes/CheckboxComponent',
};
export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Checked: Story = {
  args: {
    checked: true
  },
};

export const UnChecked: Story = {
  args: {
    checked: false
  },
};
