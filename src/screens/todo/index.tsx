import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {FlatList} from 'native-base';

import {authCreators} from '../auth/redux/auth.action';
import Header from '../../components/molecules/header';
import AddTodo from './components/add-todo';
import TodoItem from './components/todo-item';
import {removeItemFromStorage} from '../../utilities/storage-service';
import {StorageKeys} from '../../enums';
import {Todo} from '../../types';

const initialTodos: Todo[] = [];

const TodoScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const dispatch = useDispatch();
  const addTodo = (newTodo: Todo) => {
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, completed: todo.completed ? 0 : 1} : todo,
      ),
    );
  };
  const updateTodo = (updatedTodo: Todo) => {
    setTodos(
      todos.map(todo => (todo.id === updatedTodo.id ? updatedTodo : todo)),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleLogout = () => {
    removeItemFromStorage(StorageKeys.User);
    dispatch(authCreators.handleSignOut());
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onLogout={handleLogout} />
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        <FlatList
          mt={2}
          data={todos}
          renderItem={({item}) => (
            <TodoItem
              todo={item}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default TodoScreen;
