import React from 'react';
import Form from '@rjsf/core';
import { dataSchema } from './dataSchema';
import { uiSchema } from './uiSchema';
import validator from '@rjsf/validator-ajv8';
import { formData } from './formData';

const CustomCheckbox = function (props: any) {
  return (
    <button id="custom" className={props.value ? 'checked' : 'unchecked'} onClick={() => props.onChange(!props.value)}>
      {String(props.value)}
    </button>
  );
};

const widgets: any = {
  CheckboxWidget: CustomCheckbox,
};

const DynamicForm = () => {
  return (
    <Form
      schema={dataSchema}
      validator={validator}
      // onChange={log('changed')}
      // onSubmit={log('submitted')}
      // onError={log('errors')}
      widgets={widgets}
      uiSchema={uiSchema}
      formData={formData}
    />
  );
};

export default DynamicForm;
