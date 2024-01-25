export const dataSchema = {
  title: 'Sleep Questions',
  type: 'object',
  properties: {
    'Patient Information': {
      type: 'object',
      properties: {
        'Patient First Name': { type: 'string', title: 'Patient First Name' },
        'Patient Middle Name': { type: 'string', title: 'Patient Middle Name' },
        'Patient Last Name': { type: 'string', title: 'Patient Last Name' },
      },
      required: ['Patient First Name', 'Patient Last Name'],
    },

    boolean: {
      type: 'object',
      title: 'Sleep Apnea Screening',
      properties: {
        radio1: {
          type: 'string',
          title: ' ',
          description:
            'Sleep apnea is a common disorder characterized by repetitive collapse of the pharyngeal airway during sleep leading to oxygen deprivation.',
        },
        radio3: {
          type: 'string',
          title: ' ',
          description:
            'Each choice is worth points. The higher the total, the more likely you have sleep apnea. The point amount is in parentheses.',
        },
        radio: {
          type: 'boolean',
          title: '1. SNORING',
          description: 'a) Do you snore on most nights (more than 3x/wk)?',
        },

        radio2: {
          type: 'boolean',
          title: ' ',
          description: 'b) Can your snoring be heard through a door or walls?',
        },
      },
    },

    boolean2: {
      type: 'object',
      title: '',
      properties: {
        radio: {
          type: 'boolean',
          title: '2. STOP BREATHING',
          enum: ['Never', 'Ocassionally', 'Frequently'],
          description: 'a) Has it ever been reported that you stop breathing or gasp during sleep?',
        },
      },
    },

    collarSize: {
      type: 'object',
      title: ' ',
      properties: {
        gender: {
          type: 'string',
          title: '3. COLLAR SIZE',
          enum: ['male', 'female', 'other'],
          description: 'Your gender',
        },
      },
    },

    boolean3: {
      type: 'object',
      title: ' ',
      properties: {
        radio: {
          type: 'boolean',
          title: '4. BLOOD PRESSURE',
          description: 'a) Have you had or are you being treated for high blood pressure?',
        },
      },
    },

    boolean4: {
      type: 'object',
      title: ' ',
      properties: {
        b1: {
          type: 'string',
          title: '5. DAYTIME SLEEPINESS',
          description: 'a) Do you occasionally doze or fall asleep during the day when:',
        },
        radio2: {
          type: 'boolean',
          title: ' ',
          description: 'You are not busy or active?',
        },
        radio3: {
          type: 'boolean',
          title: ' ',
          description: 'You are driving or stopped at a light?		',
        },
        b2: {
          type: 'string',
          title: 'Total Points',
          description:
            'Total Points\n\n5 points or less  -   Low probability\n\n6-8 points  -   Probability\n\n9+ points  -   High probability',
        },
      },
    },

    boolean5: {
      type: 'object',
      title: 'Sleep Apnea/Snoring Questionnaire',
      properties: {
        radio: {
          type: 'string',
          title: ' ',
          description: '1. How long have you been aware of your snoring?',
        },

        radio1: {
          type: 'boolean',
          title: ' ',
          description: '2. Have you been told that you stop breathing while you are asleep?',
        },
        radio2: {
          type: 'string',
          title: ' ',
          description: '3. Approximately how many times per night do you wake up?',
        },
        radio3: {
          type: 'boolean',
          title: ' ',
          description: '4. Do you have any difficulty falling asleep at night?',
        },
        radio4: {
          type: 'string',
          title: ' ',
          description: '5. How many hours of sleep per night do you get?',
        },
        radio5: {
          type: 'boolean',
          title: ' ',
          description: '6. Do you most often wake up feeling refreshed?',
        },
        radio6: {
          type: 'boolean',
          title: ' ',
          description: '7. Does a small amount of alcohol give you a headache?',
        },
        radio7: {
          type: 'boolean',
          title: ' ',
          description: '8. Have you seen other doctors about snoring or apnea?',
        },
        b1: {
          type: 'string',
          title: ' ',
          description: 'If Yes,Who',
        },
        b2: {
          type: 'string',
          title: ' ',
          description: 'When',
        },

        radio8: {
          type: 'boolean',
          title: ' ',
          description: '9. Have you had a sleep lab study?',
        },
        b3: {
          type: 'string',
          title: ' ',
          description: 'If Yes, When:',
        },

        radio9: {
          type: 'boolean',
          title: ' ',
          description: '10. Do you have difficulty breathing through your nose?',
        },
        radio10: {
          type: 'boolean',
          title: ' ',
          description: '11. Do you know if you have any heart irregularities?',
        },

        radio11: {
          type: 'boolean',
          title: ' ',
          description: '12. Do you have high blood pressure?',
        },

        radio12: {
          type: 'boolean',
          title: ' ',
          description: '13. Do you have any loss of memory?',
        },
        radio13: {
          type: 'boolean',
          title: ' ',
          description: '14. Are you depressed?',
        },
        b4: {
          type: 'string',
          title: ' ',
          description: '15. What is your normal bedtime?',
        },
        b5: {
          type: 'string',
          title: ' ',
          description: '16. What is your normal wakeup time?',
        },
        radio14: {
          type: 'boolean',
          title: ' ',
          description: '17. Does your work/sleep schedule change?',
        },
        radio15: {
          type: 'boolean',
          title: ' ',
          description: '18. Does pain interfere with your sleep?',
        },
        radio16: {
          type: 'boolean',
          title: ' ',
          description: '19. Have you ever fallen asleep behind the wheel?',
        },
        b6: {
          type: 'string',
          title: ' ',
          description: 'IF Yes, how many times?',
        },
      },
    },

    boolean6: {
      type: 'object',
      title: 'Adult/Child Sleep & Breathing Questionnaire',
      properties: {
        radio: {
          type: 'boolean',
          title: ' ',
          description: 'Is the patient an Adult or a Child?',
        },
      },
    },

    boolean7: {
      type: 'object',
      title: 'Adult Sleep & Breathing Questionnaire',
      properties: {
        date: {
          type: 'string',
          format: 'date',
          title: ' ',
          description: 'DOB',
        },
        radio1: {
          type: 'string',
          title: ' ',
          description: 'Age',
        },
        radio2: {
          type: 'number',
          title: 'Gender:',
          enum: ['Male', 'Female', 'Prefer Not Mention'],
        },
        radio3: {
          type: 'string',
          title: ' ',
          description: 'Your Weight',
        },
        radio4: {
          type: 'string',
          title: ' ',
          description: 'Your Height in (M):',
        },
        radio5: {
          type: 'string',
          title: ' ',
          description: 'BMI:',
        },
        radio6: {
          type: 'boolean',
          title: 'BMI Formula BMI = (Your weight in Kg) / (Your height in Meters * Your height in Meters)',
          description: 'Have you ever had a sleep test administered?',
        },
        radio7: {
          type: 'boolean',
          title: ' ',
          description: 'Have you ever had a sleep test administered?',
        },
        b1: {
          type: 'string',
          title: ' ',
          description: 'If yes - when did you have your last sleep test?',
        },
        radio8: {
          type: 'boolean',
          title: ' ',
          description: 'Have you been diagnosed with Sleep Apnea?',
        },
        radio9: {
          type: 'boolean',
          title: ' ',
          description: 'Do you currently use a CPAP or Sleep Appliance for Sleep Apnea?',
        },
        radio10: {
          type: 'boolean',
          title: ' ',
          description: 'Are you happy with your CPAP or Sleep Appliance?',
        },
        b2: {
          type: 'string',
          title: ' ',
          description: 'If you are not happy - why?',
        },
        b3: {
          type: 'string',
          title: ' ',
          description: 'How often do you get out of bed to use the restroom during the night?',
        },
        radio11: {
          type: 'boolean',
          title: ' ',
          description: 'Do you usually wake feeling tired and unrested?',
        },
        radio12: {
          type: 'boolean',
          title: ' ',
          description: 'Do you habitually snore?',
        },
        radio13: {
          type: 'boolean',
          title: ' ',
          description: 'Have you been diagnosed with Hypertension/High Blood Pressure?',
        },
        radio14: {
          type: 'boolean',
          title: ' ',
          description: 'Do you often suffer from waking headaches?',
        },
        radio15: {
          type: 'boolean',
          title: ' ',
          description: 'Do you regularly experience daytime drowsiness or fatigue?',
        },
        radio16: {
          type: 'boolean',
          title: ' ',
          description: 'Do you have blocked nasal passages?',
        },
        radio17: {
          type: 'boolean',
          title: ' ',
          description: 'Has anyone observed you stop breathing during your sleep?',
        },
        radio18: {
          type: 'boolean',
          title: ' ',
          description: 'Do you ever wake up choking or gasping?',
        },
        radio19: {
          type: 'boolean',
          title: ' ',
          description: 'Do you grind your teeth while sleeping?',
        },
        radio20: {
          type: 'boolean',
          title: ' ',
          description: 'Is your neck circumference greater than 40 cm/ 15.75" ?',
        },
        radio21: {
          type: 'boolean',
          title: ' ',
          description: 'Is your Body Mass Index (BMI) more than 35?',
        },
      },
    },
    boolean8: {
      type: 'object',
      title: 'The Epworth Sleepiness Scale',
      properties: {
        obj: {
          type: 'object',
          title: ' ',
          description:
            'How likely are you to doze off or fall asleep in the following situations, in contrast to feeling just tired? This refers to your usual way of life in recent times. Even if you have not done some of these things recently, try to work out how they would have effected you. Use the following scale to choose the most appropriate number for each situation.0 - Would Never Doze                       1 - Slight Chance of Dozing2 - Moderate Chance of Dozing          3 - High Chance of Dozing',
        },

        m1: {
          type: 'array',
          title: 'Siting and reading:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m2: {
          type: 'array',
          title: 'Watching TV:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m3: {
          type: 'array',
          title: 'Sitting inactive in public place (like a theater or a meeting):',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m4: {
          type: 'array',
          title: 'As a passenger in a car for an hour without a break:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m5: {
          type: 'array',
          title: 'Lying down to rest in the afternoon when circumstances permit:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m6: {
          type: 'array',
          title: 'Sitting and talking to someone:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m7: {
          type: 'array',
          title: 'Sitting quietly after lunch without alcohol:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        m8: {
          type: 'array',
          title: 'In a car, while stopping for a few minutes in traffic:',
          items: {
            type: 'string',
            enum: [0, 1, 2, 3],
          },
          uniqueItems: true,
        },
        b1: {
          type: 'string',
          title: ' ',
          description: 'Total Score:',
        },
        obj1: {
          type: 'object',
          title: ' ',
          description: 'From 0-7	        It is unlikely that you are abnormally sleepy',
        },
        obj2: {
          type: 'object',
          title: ' ',
          description: 'From 8-9	        You have an average amount of daytime sleepiness',
        },
        obj3: {
          type: 'object',
          title: ' ',
          description:
            'From 10-15	You may be excessively sleepy, depending on the situation. You may want to consider seeking medical attention',
        },
        obj4: {
          type: 'object',
          title: ' ',
          description: 'From 16-20	You are excessively sleep and should consider seeking medical attention',
        },
      },
    },
    boolean9: {
      type: 'object',
      title: 'Berlin Questionnaire© - Sleep Apnea',
      properties: {
        radio: {
          type: 'string',
          title: ' ',
          description: 'Please choose the correct response to each question.',
        },
        radio1: {
          type: 'string',
          title: ' ',
          description: '-> Category 1',
          properties: {},
        },
        m1: {
          type: 'array',
          title: '1. Siting and reading:',
          items: {
            type: 'string',
            enum: ['Yes', 'No', "Don't Know"],
          },
          uniqueItems: true,
        },
        m2: {
          type: 'array',
          title: '2. You snoring is:',
          items: {
            type: 'string',
            enum: ['Sligthly louder than breathing', 'As loud as talking', 'Louder than talking'],
          },
          uniqueItems: true,
        },
        m3: {
          type: 'array',
          title: '4. Has your snoring ever bothered other people?',
          items: {
            type: 'string',
            enum: ['Yes', 'No', "Don't Know"],
          },
          uniqueItems: true,
        },
        m4: {
          type: 'array',
          title: '4. Has your snoring ever bothered other people?',
          items: {
            type: 'string',
            enum: [
              'Almost Everyday',
              '3-4 times per week',
              '1-2 times per week',
              '1-2 times per month',
              'Rarely or Never',
            ],
          },
          uniqueItems: true,
        },
        radio2: {
          type: 'string',
          title: ' ',
          description: '-> Category 2',
        },
        m5: {
          type: 'array',
          title: '6. How often do you feel tired or fatigued after your sleep?',
          items: {
            type: 'string',
            enum: [
              'Almost Everyday',
              '3-4 times per week',
              '1-2 times per week',
              '1-2 times per month',
              'Rarely or Never',
            ],
          },
          uniqueItems: true,
        },
        m6: {
          type: 'array',
          title: '7. During your waking time, do you feel tired, fatigued or not up to par?',
          items: {
            type: 'string',
            enum: [
              'Almost Everyday',
              '3-4 times per week',
              '1-2 times per week',
              '1-2 times per month',
              'Rarely or Never',
            ],
          },
          uniqueItems: true,
        },
        m7: {
          type: 'array',
          title: '8. Have you ever nodded off or fallen asleep while driving a vehicle?',
          items: {
            type: 'string',
            enum: ['Yes', 'No'],
          },
          uniqueItems: true,
        },
        m8: {
          type: 'array',
          title: '9. How often does this occur?',
          items: {
            type: 'string',
            enum: [
              'Almost Everyday',
              '3-4 times per week',
              '1-2 times per week',
              '1-2 times per month',
              'Rarely or Never',
            ],
          },
          uniqueItems: true,
        },
        radio3: {
          type: 'string',
          title: ' ',
          description: '-> Category 3',
        },
        m9: {
          type: 'array',
          title: '10. Do you have high blood pressure?',
          items: {
            type: 'string',
            enum: ['Yes', 'No', "Don't Know"],
          },
          uniqueItems: true,
        },
        radio4: {
          type: 'string',
          title: ' ',
          description: 'Your BMI (kg/m2):',
        },
        date: {
          type: 'string',
          format: 'date',
          title: ' ',
          description: 'Date:*',
        },
      },
    },
  },
  required: ['Patient Information', ],
};
