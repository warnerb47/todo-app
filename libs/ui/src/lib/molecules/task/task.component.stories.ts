import type { Meta, StoryObj } from '@storybook/angular';
import { TaskComponent } from './task.component';

const meta: Meta<TaskComponent> = {
  component: TaskComponent,
  title: 'TaskComponent',
};
export default meta;
type Story = StoryObj<TaskComponent>;

export const UnChecked: Story = {
  args: {},
};

export const Checked: Story = {
  args: {},
};

