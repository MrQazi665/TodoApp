import {Todo} from '../../../../types';

export interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: number) => void;
}
