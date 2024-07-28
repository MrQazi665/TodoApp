import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'native-base';

import {authCreators} from '../auth/redux/auth.action';
import Header from '../../components/molecules/header';
import AddTodo from './components/add-todo';
import TodoItem from './components/todo-item';
import {removeItemFromStorage} from '../../utilities/storage-service';
import {StorageKeys} from '../../enums';
import {Todo} from '../../types';
import {todoCreators} from './redux/todo.action';
import {IInitialState} from '../../redux/store/initialState/types';
import {TodoFormValues} from './interface';

const initialTodos: Todo[] = [];

const TodoScreen: React.FC = () => {
  const {todoData} = useSelector((state: IInitialState) => state.todo);
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoCreators.getAllTodo({page: 1, limit: 10}));
  }, []);

  const addTodo = (newTodo: TodoFormValues) => {
    dispatch(todoCreators.newTodoCreate(newTodo));
  };

  const toggleTodo = (updatedTodo: Todo) => {
    console.log('xx- updatedTodo', updatedTodo);
    const data = {
      title: updatedTodo.title,
      description: updatedTodo.description,
      completed: updatedTodo.completed === 0 ? 1 : 0,
    };

    dispatch(todoCreators.todoUpdate({id: updatedTodo.id, data: data}));
  };
  const updateTodo = (updatedTodo: Todo) => {
    const data = {
      title: updatedTodo.title,
      description: updatedTodo.description,
    };

    dispatch(todoCreators.todoUpdate({id: updatedTodo.id, data: data}));
  };

  const deleteTodo = (id: number) => {
    dispatch(todoCreators.todoDelete({id: id}));
  };

  const handleLogout = () => {
    removeItemFromStorage(StorageKeys.User);
    dispatch(authCreators.handleSignOut());
  };
  const onEndReached = () => {
    if (todoData.data.length < todoData.totalRecords) {
      dispatch(
        todoCreators.getAllTodo({
          page: todoData.page + 1,
          append: true,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onLogout={handleLogout} />
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        <FlatList
          mt={2}
          data={todoData.data}
          renderItem={({item}) => (
            <TodoItem
              todo={item}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          )}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.6}
          keyExtractor={item => item?.id?.toString()}
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
