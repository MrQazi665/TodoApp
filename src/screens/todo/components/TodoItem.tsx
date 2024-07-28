// components/TodoItem.tsx
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
} from 'react-native';
import {Todo} from '../../../types';
import {themeColors} from '../../../config/theme';
import EditIcon from '../../../assets/icons/svg/edit.svg';
import DeleteIcon from '../../../assets/icons/svg/delete.svg';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
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
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleUpdate = () => {
    onUpdate({...todo, title: editedTitle, description: editedDescription});
    setIsEditing(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onToggle(todo.id)}>
        <View style={[styles.item, todo.completed ? styles.completed : null]}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{todo.title}</Text>
            <Text style={styles.description}>{todo.description}</Text>
            <Text style={styles.meta}>
              By {todo.username} on{' '}
              {new Date(todo.createdAt).toLocaleDateString()}
            </Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => setIsEditing(true)}
                style={styles.actionButton}>
                <EditIcon width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onDelete(todo.id)}
                style={styles.actionButton}>
                <DeleteIcon width={20} height={20} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => onToggle(todo.id)}
              style={styles.completeButton}>
              <Text style={styles.completeText}>
                {todo.completed ? 'completed' : 'complete'}
              </Text>
              <View
                style={[
                  styles.status,
                  todo.completed ? styles.statusCompleted : null,
                ]}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      <Modal visible={isEditing} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              value={editedTitle}
              onChangeText={setEditedTitle}
              placeholder="Title"
            />
            <TextInput
              style={styles.input}
              value={editedDescription}
              onChangeText={setEditedDescription}
              placeholder="Description"
              multiline
            />
            <TouchableOpacity
              onPress={handleUpdate}
              style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsEditing(false)}
              style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  completed: {
    opacity: 0.7,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  meta: {
    fontSize: 12,
    color: '#999',
  },
  actionContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  actions: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  actionButton: {
    marginHorizontal: 5,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  completeText: {
    color: themeColors.themeBlue,
    fontWeight: 'bold',
    marginRight: 5,
  },
  status: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  statusCompleted: {
    backgroundColor: themeColors.themeBlue,
    borderColor: themeColors.themeBlue,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  updateButton: {
    backgroundColor: themeColors.themeBlue,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  updateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoItem;
