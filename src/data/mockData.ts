import { Developer, ResidentialComplex, Property, Region } from '../types';

export const mockDevelopersByRegion: { [key in Region]: Developer[] } = {
  moscow: [
    {
      id: '1',
      name: 'ПИК',
      complexes: [
        {
          id: '1',
          name: 'ЖК Саларьево Парк',
          developerId: '1',
          properties: [
            {
              id: '1',
              complexId: '1',
              type: 'apartments',
              sourceUrl: 'https://pik.ru/salarevo-park/apartments',
              sourceType: 'Официальный сайт',
              parserType: 'automatic',
              schedule: 'every4hours',
              finishParsing: true,
              promotionParsing: false,
              areaType: 'reduced',
              office: 'Центральный офис',
              comment: 'Основной проект, высокий приоритет'
            },
            {
              id: '2',
              complexId: '1',
              type: 'parking',
              sourceUrl: 'https://pik.ru/salarevo-park/parking',
              sourceType: 'Официальный сайт',
              parserType: 'automatic',
              schedule: 'daily',
              finishParsing: false,
              promotionParsing: true,
              areaType: 'total',
              office: 'Офис Москва-Сити',
              comment: 'Проверять акции еженедельно'
            }
          ]
        },
        {
          id: '2',
          name: 'ЖК Румянцево Парк',
          developerId: '1',
          properties: [
            {
              id: '3',
              complexId: '2',
              type: 'apartments',
              sourceUrl: 'https://pik.ru/rumyantsevo-park/apartments',
              sourceType: 'Официальный сайт',
              parserType: 'express',
              schedule: 'every6hours',
              finishParsing: true,
              promotionParsing: true,
              areaType: 'reduced',
              office: 'Офис Арбат',
              comment: 'Новый проект, требует внимания'
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Группа ЛСР',
      complexes: [
        {
          id: '3',
          name: 'ЖК Царицыно',
          developerId: '2',
          properties: [
            {
              id: '4',
              complexId: '3',
              type: 'apartments',
              sourceUrl: 'https://lsr.ru/tsaritsyno/apartments',
              sourceType: 'Официальный сайт',
              parserType: 'manual',
              schedule: 'daily',
              finishParsing: false,
              promotionParsing: false,
              areaType: 'total',
              office: 'Офис Тверская',
              comment: 'Ручная проверка, сложный сайт'
            },
            {
              id: '5',
              complexId: '3',
              type: 'commercial',
              sourceUrl: 'https://lsr.ru/tsaritsyno/commercial',
              sourceType: 'Официальный сайт',
              parserType: 'automatic',
              schedule: 'every15minutes',
              finishParsing: true,
              promotionParsing: true,
              areaType: 'reduced',
              office: 'Центральный офис',
              comment: 'Коммерческая недвижимость, высокая частота'
            }
          ]
        }
      ]
    }
  ],
  spb: [
    {
      id: '3',
      name: 'Setl Group',
      complexes: [
        {
          id: '4',
          name: 'ЖК Северная Долина',
          developerId: '3',
          properties: [
            {
              id: '6',
              complexId: '4',
              type: 'apartments',
              sourceUrl: 'https://setlgroup.ru/severnaya-dolina',
              sourceType: 'Официальный сайт',
              parserType: 'automatic',
              schedule: 'every4hours',
              finishParsing: true,
              promotionParsing: false,
              areaType: 'total',
              office: 'Офис Невский',
              comment: 'СПб проект, стандартная проверка'
            }
          ]
        }
      ]
    }
  ],
  ekaterinburg: [
    {
      id: '4',
      name: 'Атомстройкомплекс',
      complexes: [
        {
          id: '5',
          name: 'ЖК Академический',
          developerId: '4',
          properties: [
            {
              id: '7',
              complexId: '5',
              type: 'apartments',
              sourceUrl: 'https://ask-ural.ru/akademicheskiy',
              sourceType: 'Официальный сайт',
              parserType: 'express',
              schedule: 'daily',
              finishParsing: false,
              promotionParsing: true,
              areaType: 'reduced',
              office: 'Офис Екатеринбург-Центр',
              comment: 'Региональный проект'
            }
          ]
        }
      ]
    }
  ],
  novosibirsk: [
    {
      id: '5',
      name: 'Сибпромстрой',
      complexes: [
        {
          id: '6',
          name: 'ЖК Матрешкин двор',
          developerId: '5',
          properties: [
            {
              id: '8',
              complexId: '6',
              type: 'apartments',
              sourceUrl: 'https://sibpromstroy.ru/matreshkin-dvor',
              sourceType: 'Официальный сайт',
              parserType: 'manual',
              schedule: 'daily',
              finishParsing: true,
              promotionParsing: false,
              areaType: 'total',
              office: 'Офис Новосибирск-Центр',
              comment: 'Сибирский регион, особенности парсинга'
            }
          ]
        }
      ]
    }
  ]
};

export const mockDevelopers: Developer[] = [
  {
    id: '1',
    name: 'ПИК',
    complexes: [
      {
        id: '1',
        name: 'ЖК Саларьево Парк',
        developerId: '1',
        properties: [
          {
            id: '1',
            complexId: '1',
            type: 'apartments',
            sourceUrl: 'https://pik.ru/salarevo-park/apartments',
            sourceType: 'Официальный сайт',
            parserType: 'automatic',
            schedule: 'every4hours',
            finishParsing: true,
            promotionParsing: false,
            areaType: 'reduced',
            office: 'Центральный офис',
            comment: 'Основной проект, высокий приоритет'
          },
          {
            id: '2',
            complexId: '1',
            type: 'parking',
            sourceUrl: 'https://pik.ru/salarevo-park/parking',
            sourceType: 'Официальный сайт',
            parserType: 'automatic',
            schedule: 'daily',
            finishParsing: false,
            promotionParsing: true,
            areaType: 'total',
            office: 'Офис Москва-Сити',
            comment: 'Проверять акции еженедельно'
          }
        ]
      },
      {
        id: '2',
        name: 'ЖК Румянцево Парк',
        developerId: '1',
        properties: [
          {
            id: '3',
            complexId: '2',
            type: 'apartments',
            sourceUrl: 'https://pik.ru/rumyantsevo-park/apartments',
            sourceType: 'Официальный сайт',
            parserType: 'express',
            schedule: 'every6hours',
            finishParsing: true,
            promotionParsing: true,
            areaType: 'reduced',
            office: 'Офис Арбат',
            comment: 'Новый проект, требует внимания'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    name: 'Группа ЛСР',
    complexes: [
      {
        id: '3',
        name: 'ЖК Царицыно',
        developerId: '2',
        properties: [
          {
            id: '4',
            complexId: '3',
            type: 'apartments',
            sourceUrl: 'https://lsr.ru/tsaritsyno/apartments',
            sourceType: 'Официальный сайт',
            parserType: 'manual',
            schedule: 'daily',
            finishParsing: false,
            promotionParsing: false,
            areaType: 'total',
            office: 'Офис Тверская',
            comment: 'Ручная проверка, сложный сайт'
          },
          {
            id: '5',
            complexId: '3',
            type: 'commercial',
            sourceUrl: 'https://lsr.ru/tsaritsyno/commercial',
            sourceType: 'Официальный сайт',
            parserType: 'automatic',
            schedule: 'every15minutes',
            finishParsing: true,
            promotionParsing: true,
            areaType: 'reduced',
            office: 'Центральный офис',
            comment: 'Коммерческая недвижимость, высокая частота'
          }
        ]
      }
    ]
  }
];

export const getWeekDates = (weekOffset: number = 0): string[] => {
  const dates = [];
  const today = new Date();
  const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1 + (weekOffset * 7)));
  
  for (let i = 0; i < 7; i++) {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    dates.push(date.toISOString().split('T')[0]);
  }
  
  return dates;
};

export const mockWeeklyChecks: { [propertyId: string]: { [date: string]: boolean } } = {
  '1': {
    [getWeekDates()[0]]: true,
    [getWeekDates()[1]]: false,
    [getWeekDates()[2]]: true,
    [getWeekDates()[3]]: false,
    [getWeekDates()[4]]: true,
    [getWeekDates()[5]]: false,
    [getWeekDates()[6]]: false,
  },
  '2': {
    [getWeekDates()[0]]: false,
    [getWeekDates()[1]]: true,
    [getWeekDates()[2]]: true,
    [getWeekDates()[3]]: true,
    [getWeekDates()[4]]: false,
    [getWeekDates()[5]]: true,
    [getWeekDates()[6]]: false,
  },
  '3': {
    [getWeekDates()[0]]: true,
    [getWeekDates()[1]]: true,
    [getWeekDates()[2]]: false,
    [getWeekDates()[3]]: true,
    [getWeekDates()[4]]: true,
    [getWeekDates()[5]]: false,
    [getWeekDates()[6]]: true,
  },
  '4': {
    [getWeekDates()[0]]: false,
    [getWeekDates()[1]]: false,
    [getWeekDates()[2]]: false,
    [getWeekDates()[3]]: true,
    [getWeekDates()[4]]: true,
    [getWeekDates()[5]]: true,
    [getWeekDates()[6]]: false,
  },
  '5': {
    [getWeekDates()[0]]: true,
    [getWeekDates()[1]]: true,
    [getWeekDates()[2]]: true,
    [getWeekDates()[3]]: true,
    [getWeekDates()[4]]: true,
    [getWeekDates()[5]]: true,
    [getWeekDates()[6]]: true,
  },
};