// components/TodoList.tsx
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';
import {Todo} from '../../../types';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  return (
    <FlatList
      data={todos}
      renderItem={({item}) => (
        <TodoItem
          todo={item}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      )}
      keyExtractor={item => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
});

export default TodoList;
