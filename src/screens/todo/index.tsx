// App.tsx
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Todo} from '../../types';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

const initialTodos: Todo[] = [
  // Your provided data here
];

const TodoScreen: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

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
    // Implement your logout logic here
    console.log('Logout pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header onLogout={handleLogout} />
      <View style={styles.content}>
        <AddTodo onAdd={addTodo} />
        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
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
