import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {View, Text, Checkbox} from 'native-base';

import {Todo} from '../../../../types';
import EditIcon from '../../../../assets/icons/svg/edit.svg';
import DeleteIcon from '../../../../assets/icons/svg/delete.svg';
import NativeModal from '../../../../components/organisms/modal';
import {Formik} from 'formik';
import {todoValidations} from '../../../../utilities/yup';
import FormikFieldWrapper from '../../../../components/molecules/formik-field-wrapper';
import {themeColors} from '../../../../config/theme';
import {styles} from './styles';

interface TodoItemProps {
  todo: Todo | any;
  onToggle: (todo: Todo) => void;
  onUpdate: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onUpdate,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => onToggle(todo)}>
        <View style={[styles.item, todo.completed ? styles.completed : null]}>
          <View style={styles.textContainer}>
            <View
              flexDirection="row"
              justifyContent="space-between"
              width="100%">
              <Text style={styles.title}>{todo.title}</Text>
              <View style={styles.actionContainer}>
                <View style={styles.actions}>
                  <Pressable
                    onPress={() => setIsEditing(true)}
                    style={styles.actionButton}>
                    <EditIcon width={20} height={20} />
                  </Pressable>
                  <Pressable
                    onPress={() => onDelete(todo.id)}
                    style={styles.actionButton}>
                    <DeleteIcon width={20} height={20} />
                  </Pressable>
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
                By {todo.user.username} on{' '}
                {new Date(todo.createdAt).toLocaleDateString()}
              </Text>
              <Checkbox
                isChecked={todo.completed}
                onChange={() => onToggle(todo)}
                value={'completed'}>
                Completed
              </Checkbox>
            </View>
          </View>
        </View>
      </Pressable>

      <Formik
        initialValues={{title: todo.title, description: todo.description}}
        validationSchema={todoValidations}
        onSubmit={values => {
          onUpdate({...todo, ...values});
          setIsEditing(false);
        }}>
        {({handleSubmit}) => (
          <View>
            <NativeModal
              modalVisible={isEditing}
              headerTitle={'Update Todo'}
              handleSubmit={handleSubmit}
              onClose={() => setIsEditing(false)}>
              <View>
                <FormikFieldWrapper name="title" label="Todo Title" mt={0.1} />
                <FormikFieldWrapper
                  name="description"
                  label="Todo Description"
                />
              </View>
            </NativeModal>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default TodoItem;
