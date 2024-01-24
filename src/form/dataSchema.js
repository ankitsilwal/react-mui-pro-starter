export const dataSchema = {
  title: 'Sleep Questions',
  type: 'object',
  properties: {
    100: {
      type: 'object',
      title: 'Patient Information',
      properties: {
        'Patient First Name': {
          type: 'string',
          format: 'Patient First Name',
          required: true,
        },
        'Patient Middle Name': {
          type: 'string',
          format: 'Patient Middle Name',
        },
        'Patient Last Name': {
          type: 'string',
          format: 'Patient Last Name',
          required: true,
        },
      },
    },
    101: {
      type: 'object',
      title: 'Sleep Apnea Screening',
      description:
        'Sleep apnea is a common disorder characterized by repetitive collapse of the pharyngeal airway during sleep leading to oxygen deprivation.<br/>Each choice is worth points. The higher the total, the more likely you have sleep apnea. The point amount is in parentheses.',
      properties: {
        'Patient First Name': {
          type: 'string',
          format: 'Patient First Name',
          required: true,
        },
        'Patient Middle Name': {
          type: 'string',
          format: 'Patient Middle Name',
        },
        'Patient Last Name': {
          type: 'string',
          format: 'Patient Last Name',
          required: true,
        },
      },
    },

    // boolean: {
    //   type: 'object',
    //   title: 'Boolean field',
    //   properties: {
    //     default: {
    //       type: 'boolean',
    //       title: 'checkbox (default)',
    //       description: 'This is the checkbox-description',
    //     },
    //     radio: {
    //       type: 'boolean',
    //       title: 'radio buttons',
    //       description: 'This is the radio-description',
    //     },
    //     select: {
    //       type: 'boolean',
    //       title: 'select box',
    //       description: 'This is the select-description',
    //     },
    //   },
    // },
    // string: {
    //   type: 'object',
    //   title: 'String field',
    //   properties: {
    //     default: {
    //       type: 'string',
    //       title: 'text input (default)',
    //     },
    //     textarea: {
    //       type: 'string',
    //       title: 'textarea',
    //     },
    //     placeholder: {
    //       type: 'string',
    //     },
    //     color: {
    //       type: 'string',
    //       title: 'color picker',
    //       default: '#151ce6',
    //     },
    //   },
    // },
    // secret: {
    //   type: 'string',
    //   default: "I'm a hidden string.",
    // },
    // disabled: {
    //   type: 'string',
    //   title: 'A disabled field',
    //   default: 'I am disabled.',
    // },
    // readonly: {
    //   type: 'string',
    //   title: 'A readonly field',
    //   default: 'I am read-only.',
    // },
    // readonly2: {
    //   type: 'string',
    //   title: 'Another readonly field',
    //   default: 'I am also read-only.',
    //   readOnly: true,
    // },
    // widgetOptions: {
    //   title: 'Custom widget with options',
    //   type: 'string',
    //   default: 'I am yellow',
    // },
    // selectWidgetOptions: {
    //   title: 'Custom select widget with options',
    //   type: 'string',
    //   enum: ['foo', 'bar'],
    // },
    // selectWidgetOptions2: {
    //   title: 'Custom select widget with options, overriding the enum titles.',
    //   type: 'string',
    //   oneOf: [
    //     {
    //       const: 'foo',
    //       title: 'Foo',
    //     },
    //     {
    //       const: 'bar',
    //       title: 'Bar',
    //     },
    //   ],
    // },
  },
};
