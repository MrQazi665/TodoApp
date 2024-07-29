import React from 'react';
import {Button, View} from 'native-base';
import {Formik} from 'formik';
import {useSelector} from 'react-redux';

import Loader from '../../../../components/loader';
import {todoValidations} from '../../../../utilities/yup';
import {IInitialState} from '../../../../redux/store/initialState/types';
import {TodoFormValues} from '../../interface';
import {styles} from './styles';
import TodoFields from '../todo-item/todo-fields';

interface AddTodoProps {
  onAdd: (todo: TodoFormValues, resetForm: () => void) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({onAdd}) => {
  const isAddingTodo = useSelector(
    (state: IInitialState) => state.loading.isAddingTodo,
  );

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={todoValidations}
        onSubmit={(values, {resetForm}) => {
          onAdd(values, resetForm);
        }}>
        {({handleSubmit}) => (
          <View>
            <TodoFields />

            <Button
              mt="3"
              size={'lg'}
              onPress={() => handleSubmit()}
              disabled={isAddingTodo}>
              {isAddingTodo ? <Loader /> : 'Add Todo'}
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTodo;
