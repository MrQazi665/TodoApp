import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {View, Text, Checkbox, Spinner} from 'native-base';
import {useSelector} from 'react-redux';

import {IInitialState} from '../../../../redux/store/initialState/types';
import EditIcon from '../../../../assets/icons/svg/edit.svg';
import DeleteIcon from '../../../../assets/icons/svg/delete.svg';
import {themeColors} from '../../../../config/theme';
import UpdateTodo from './component/update.todo';
import {TodoItemProps} from './interface';
import {styles} from './styles';

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const isUpdatingTodo = useSelector(
    (state: IInitialState) => state.loading.isUpdatingTodo,
  );
  const isDeletingTodo = useSelector(
    (state: IInitialState) => state.loading.isDeletingTodo,
  );
  const itemId = useSelector((state: IInitialState) => state.todo.itemId);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsEditing(true)}>
        <View style={[styles.item, todo.completed ? styles.completed : null]}>
          <View style={styles.textContainer}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              width="100%">
              <Text style={styles.title} numberOfLines={2}>
                {todo.title}
              </Text>
              <View style={styles.actionContainer}>
                <View style={styles.actions}>
                  <Pressable
                    onPress={() => setIsEditing(true)}
                    style={styles.actionButton}>
                    <EditIcon width={20} height={20} />
                  </Pressable>
                  {isDeletingTodo && todo.id == itemId ? (
                    <Spinner />
                  ) : (
                    <Pressable
                      onPress={() => onDelete(todo.id)}
                      style={styles.actionButton}>
                      <DeleteIcon width={20} height={20} />
                    </Pressable>
                  )}
                </View>
              </View>
            </View>
            <Text style={styles.description}>{todo.description}</Text>
            <View
              flexDirection="row"
              justifyContent="space-between"
              width="100%">
              <Text
                mt={1.5}
                fontSize={13}
                color={themeColors.themeBlue}
                fontWeight={'extrabold'}>
                {new Date(todo.createdAt).toLocaleDateString()}
              </Text>

              <Checkbox
                isDisabled={isUpdatingTodo && todo.id == itemId}
                isChecked={!!todo.completed}
                onChange={() => onToggle(todo)}
                value={todo.completed ? 'Completed' : 'Pending'}>
                {todo.completed ? 'Completed' : 'Pending'}
              </Checkbox>
            </View>
          </View>
        </View>
      </Pressable>

      <UpdateTodo
        todo={todo}
        onUpdate={onUpdate}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      />
    </View>
  );
};

export default TodoItem;
