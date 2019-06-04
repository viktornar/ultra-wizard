export const wizardConfig = {
  questions: [
    {
      "text": "What the size of loan you want to get?",
      "step": 1,
      "answer": {
        "min": 10000,
        "max": 30000,
      },
    },
    {
      "text": "Choose the term of loan?",
      "step": 2,
      "depends": {
        "on": 1,
        "condition": {
          "min": 20000
        }
      },
      "answers": [
        "1 year",
        "2 years",
        "3 years",
        "4 years",
        "5 years",
      ],
    },
    {
      "text": "Payment frequency per year?",
      "step": 3,
      "answers": [
        'Every month',
        'Every quarter',
        'Every half year',
      ],
    },
    {
      "text": "Interest rate?",
      "step": 4,
      "answer": {
        "min": 1,
        "max": 5,
      },
    }
  ]
};
