import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CheckRow } from '../types';

export const exportToExcel = (data: CheckRow[], weekDates: string[]) => {
  const worksheet = XLSX.utils.json_to_sheet(
    data.map(row => ({
      'Застройщик': row.developerName,
      'ЖК': row.complexName,
      'Тип недвижимости': getPropertyTypeLabel(row.propertyType),
      'Ссылка на источник': row.sourceUrl,
      'Тип парсера': getParserTypeLabel(row.parserType),
      'Расписание': getScheduleLabel(row.schedule),
      'Парсинг отделки': row.finishParsing ? 'Да' : 'Нет',
      'Парсинг акций': row.promotionParsing ? 'Да' : 'Нет',
      'Площадь': getAreaTypeLabel(row.areaType),
      'Офис': row.office,
      'Комментарий': row.comment,
      ...weekDates.reduce((acc, date) => ({
        ...acc,
        [formatDateForExcel(date)]: row.weeklyChecks[date] ? 'Да' : 'Нет'
      }), {}),
      'Всего проверок за неделю': row.totalChecks
    }))
  );

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Недельный отчет');

  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const data_blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
  const fileName = `weekly_report_${new Date().toISOString().split('T')[0]}.xlsx`;
  saveAs(data_blob, fileName);
};

const getPropertyTypeLabel = (type: string): string => {
  const labels: { [key: string]: string } = {
    apartments: 'Квартиры',
    parking: 'Паркинги',
    commercial: 'Коммерция'
  };
  return labels[type] || type;
};

const getParserTypeLabel = (type: string): string => {
  const labels: { [key: string]: string } = {
    automatic: 'Автоматический',
    express: 'Экспресс',
    manual: 'Ручной'
  };
  return labels[type] || type;
};

const getScheduleLabel = (schedule: string): string => {
  const labels: { [key: string]: string } = {
    daily: 'Раз в день',
    every4hours: 'Раз в 4 часа',
    every6hours: 'Раз в 6 часов',
    every15minutes: 'Каждые 15 минут'
  };
  return labels[schedule] || schedule;
};

const getAreaTypeLabel = (areaType: string): string => {
  const labels: { [key: string]: string } = {
    reduced: 'Приведенная',
    total: 'Общая'
  };
  return labels[areaType] || areaType;
};

const formatDateForExcel = (dateString: string): string => {
  const date = new Date(dateString);
  const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  return `${days[date.getDay()]} ${date.toLocaleDateString('ru-RU')}`;
};