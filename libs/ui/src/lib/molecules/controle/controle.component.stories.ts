import type { Meta, StoryObj } from '@storybook/angular';
import { ControleComponent } from './controle.component';

const meta: Meta<ControleComponent> = {
  component: ControleComponent,
  title: 'Molecules/ControleComponent',
};
export default meta;
type Story = StoryObj<ControleComponent>;

export const Primary: Story = {
  args: {},
};

