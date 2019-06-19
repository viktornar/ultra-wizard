export const wizardConfig = {
  questions: [
    {
      "id": 0,
      "text": "What the size of loan you want to get?",
      "tip": "Depending on entered value next step will differ :)",
      "answer": {
        "min": 1000,
        "max": 30000,
        "prefix": "eur",
      },
    },
    {
      "id": 1,
      "text": "Choose the term of loan?",
      "depends": {
        "id": 0,
        "condition": {
          "min": 15000,
          "renderIndex": 5,
        }
      },
      "answers": [
        "1 year",
        "2 years",
        "3 years",
        "4 years",
        "5 years",
        "10 years",
        "25 years",
        "30 years",
      ],
    },
    {
      "id": 2,
      "text": "Payment frequency per year?",
      "answers": [
        'Every month',
        'Every quarter',
        'Every half year',
      ],
    },
    {
      "id": 3,
      "text": "Interest rate?",
      "answer": {
        "min": 1,
        "max": 5,
        "prefix": "%",
      },
    }
  ]
};
