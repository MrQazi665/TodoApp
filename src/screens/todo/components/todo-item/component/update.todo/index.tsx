import {Button, Spinner, View} from 'native-base';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';

import NativeModal from '../../../../../../components/organisms/modal';
import FormikFieldWrapper from '../../../../../../components/molecules/formik-field-wrapper';
import {IInitialState} from '../../../../../../redux/store/initialState/types';
import {todoValidations} from '../../../../../../utilities/yup';
import {themeColors} from '../../../../../../config/theme';
import {Todo} from '../../../../../../types';

const UpdateTodo = ({
  todo,
  onUpdate,
  isEditing,
  setIsEditing,
}: {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isUpdatingTodo = useSelector(
    (state: IInitialState) => state.loading.isUpdatingTodo,
  );

  useEffect(() => {
    if (!isUpdatingTodo) {
      setIsEditing(false);
    }
  }, [isUpdatingTodo]);

  return (
    <NativeModal
      modalVisible={isEditing}
      headerTitle={'Update Todo'}
      onClose={() => setIsEditing(false)}>
      <Formik
        initialValues={{
          title: todo.title,
          description: todo.description,
        }}
        validationSchema={todoValidations}
        onSubmit={values => {
          onUpdate({...todo, ...values});
        }}>
        {({handleSubmit}) => (
          <View>
            <FormikFieldWrapper
              name="title"
              label="Todo Title"
              required
              mt={0.1}
            />
            <FormikFieldWrapper
              name="description"
              label="Todo Description"
              required
            />
            <Button.Group space={2} justifyContent={'flex-end'} mt={4}>
              <Button variant="outline" onPress={() => setIsEditing(false)}>
                Cancel
              </Button>
              <Button
                onPress={() => handleSubmit()}
                bg={themeColors.themeBlue}
                variant="solid">
                {isUpdatingTodo ? (
                  <Spinner color={themeColors.white} />
                ) : (
                  'Save'
                )}
              </Button>
            </Button.Group>
          </View>
        )}
      </Formik>
    </NativeModal>
  );
};

export default UpdateTodo;
