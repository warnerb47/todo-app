import type { Meta, StoryObj } from '@storybook/angular';
import { StubTaskBuilder } from 'libs/ui/src/core/models/builders/task.builder';
import { TaskListComponent } from './task-list.component';

const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  title: 'Organismes / TaskListComponent',
};
export default meta;
type Story = StoryObj<TaskListComponent>;

export const TaskList: Story = {
  args: {
    tasks: [
      new StubTaskBuilder().withLabel('This is a pending task').build(),
      new StubTaskBuilder().withLabel('This is a completed task').withChecked(true).build(),
    ],
  },
};

export const EmptyList: Story = {
  args: {
    tasks: [],
  },
};

