export interface Developer {
  id: string;
  name: string;
  complexes: ResidentialComplex[];
}

export interface ResidentialComplex {
  id: string;
  name: string;
  developerId: string;
  properties: Property[];
}

export interface Property {
  id: string;
  complexId: string;
  type: PropertyType;
  sourceUrl: string;
  sourceType: string;
  parserType: ParserType;
  schedule: Schedule;
  finishParsing: boolean;
  promotionParsing: boolean;
  areaType: AreaType;
  office: string;
  comment: string;
}

export type PropertyType = 'apartments' | 'parking' | 'commercial';

export type ParserType = 'automatic' | 'express' | 'manual';

export type Schedule = 'daily' | 'every4hours' | 'every6hours' | 'every15minutes';

export type AreaType = 'reduced' | 'total';

export type Region = 'moscow' | 'spb' | 'ekaterinburg' | 'novosibirsk';

export const OFFICES = [
  'Центральный офис',
  'Офис Москва-Сити',
  'Офис Арбат',
  'Офис Тверская',
  'Офис Невский',
  'Офис Садовая',
  'Офис Екатеринбург-Центр',
  'Офис Новосибирск-Центр'
];

export interface WeeklyCheck {
  id: string;
  propertyId: string;
  date: string;
  checked: boolean;
  checkedBy?: string;
}

export interface CheckRow {
  developerId: string;
  developerName: string;
  complexId: string;
  complexName: string;
  propertyId: string;
  propertyType: PropertyType;
  sourceUrl: string;
  parserType: ParserType;
  schedule: Schedule;
  finishParsing: boolean;
  promotionParsing: boolean;
  areaType: AreaType;
  office: string;
  comment: string;
  weeklyChecks: { [date: string]: boolean };
  totalChecks: number;
}