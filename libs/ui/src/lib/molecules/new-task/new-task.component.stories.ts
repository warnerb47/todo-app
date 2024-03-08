import type { Meta, StoryObj } from '@storybook/angular';
import { NewTaskComponent } from './new-task.component';

const meta: Meta<NewTaskComponent> = {
  component: NewTaskComponent,
  title: 'Molecules/NewTaskComponent',
};
export default meta;
type Story = StoryObj<NewTaskComponent>;

export const Primary: Story = {
  args: {},
};

