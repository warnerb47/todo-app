import { Task } from "../task";

export class TaskBuilder {
    protected index!: number;
    protected label!: string;
    protected checked!: boolean;

    withIndex(index: number): TaskBuilder {
        this.index = index;
        return this;
    }

    withLabel(label: string): TaskBuilder {
        this.label = label;
        return this;
    }

    withChecked(checked: boolean): TaskBuilder {
        this.checked = checked;
        return this;
    }

    build(): Task {
        return {
            checked: this.checked,
            index: this.index,
            label: this.label,
        };
    }
}

export class StubTaskBuilder extends TaskBuilder {
    protected override index = 1; 
    protected override label = 'label'; 
    protected override checked = false; 
}