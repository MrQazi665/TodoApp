import {View} from 'native-base';
import React from 'react';

import FormikFieldWrapper from '../../../../../components/molecules/formik-field-wrapper';

const TodoFields = () => {
  return (
    <View>
      <FormikFieldWrapper
        name="title"
        label="Title"
        placeholder="Title"
        required
        mt={0.1}
      />
      <FormikFieldWrapper
        name="description"
        placeholder="Write your description here"
        label="Description"
        required
      />
    </View>
  );
};

export default TodoFields;
