import type { Meta, StoryObj } from '@storybook/angular';
import { TaskComponent } from './task.component';
import { StubTaskBuilder } from 'libs/ui/src/core/models/builders/task.builder';

const meta: Meta<TaskComponent> = {
  component: TaskComponent,
  title: 'Molecules / TaskComponent',
};
export default meta;
type Story = StoryObj<TaskComponent>;

export const UnChecked: Story = {
  args: {
    task: new StubTaskBuilder().withLabel('this is a pending task').build(),
  },
};

export const Checked: Story = {
  args: {
    task: new StubTaskBuilder().withLabel('this is a completed task').withChecked(true).build(),
  },
};

