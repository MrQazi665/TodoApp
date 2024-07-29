import React, {useEffect} from 'react';
import {Keyboard, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'native-base';

import Header from '../../components/molecules/header';
import AddTodo from './components/add-todo';
import TodoItem from './components/todo-item';
import Loader from '../../components/loader';
import {authCreators} from '../auth/redux/auth.action';
import {todoCreators} from './redux/todo.action';
import {IInitialState} from '../../redux/store/initialState/types';
import {removeItemFromStorage} from '../../utilities/storage-service';
import {themeColors} from '../../config/theme';
import {StorageKeys} from '../../enums';
import {TodoFormValues} from './interface';
import {Todo} from '../../types';
import useCustomToast from '../../hooks/useCustomToast';
import {styles} from './styles';

const TodoScreen: React.FC = () => {
  const todoData = useSelector((state: IInitialState) => state.todo.todoData);
  const isFetchingTodos = useSelector(
    (state: IInitialState) => state.loading.isFetchingTodos,
  );
  const showToast = useCustomToast();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoCreators.getAllTodos({page: 1, limit: 5}));
  }, []);

  const addTodo = (todoPayload: TodoFormValues, resetForm: () => void) => {
    dispatch(todoCreators.addTodo({todoPayload, resetForm, showToast}));
    Keyboard.dismiss();
  };

  const toggleTodo = (updatedTodo: Todo) => {
    const data = {
      ...updatedTodo,
      completed: updatedTodo.completed === 0 ? 1 : 0,
    };

    dispatch(todoCreators.updateTodo({id: updatedTodo.id, data: data}));
  };

  const updateTodo = (updatedTodo: Todo) => {
    const data = {
      title: updatedTodo.title,
      description: updatedTodo.description,
    };

    dispatch(
      todoCreators.updateTodo({id: updatedTodo.id, data: data, showToast}),
    );
  };

  const deleteTodo = (id: number) => {
    dispatch(todoCreators.deleteTodo({id, showToast}));
  };

  const handleLogout = () => {
    removeItemFromStorage(StorageKeys.User);
    dispatch(authCreators.handleSignOut());
    dispatch(todoCreators.getAllTodosSuccess());
  };

  const onEndReached = () => {
    if (
      todoData.data?.length &&
      todoData.data.length < todoData.totalRecords &&
      !isFetchingTodos
    ) {
      dispatch(
        todoCreators.getAllTodos({
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
          data={todoData.data}
          renderItem={({item}) => (
            <TodoItem
              todo={item}
              onToggle={toggleTodo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          )}
          ListEmptyComponent={
            isFetchingTodos ? (
              <View mt={5}>
                <Loader color={themeColors.themeBlue} />
              </View>
            ) : (
              <View />
            )
          }
          showsVerticalScrollIndicator={false}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.1}
          keyExtractor={item => item?.id?.toString()}
          ListFooterComponent={
            isFetchingTodos && todoData.data?.length ? (
              <Loader color={themeColors.themeBlue} />
            ) : (
              <View />
            )
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default TodoScreen;
