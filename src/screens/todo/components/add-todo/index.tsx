import React from 'react';
import {Button, View} from 'native-base';
import {Formik} from 'formik';

import FormikFieldWrapper from '../../../../components/molecules/formik-field-wrapper';
import {todoValidations} from '../../../../utilities/yup';
import {styles} from './styles';
import {Todo} from '../../../../types';
import {TodoFormValues} from '../../interface';

interface AddTodoProps {
  onAdd: (todo: TodoFormValues) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({onAdd}) => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
        }}
        validationSchema={todoValidations}
        onSubmit={(values, {resetForm}) => {
          onAdd(values);
          resetForm();
        }}>
        {({handleSubmit}) => (
          <View>
            <FormikFieldWrapper name="title" label="Todo Title" />
            <FormikFieldWrapper name="description" label="Todo Description" />

            <Button mt="3" size={'lg'} onPress={() => handleSubmit()}>
              Add Todo
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTodo;
