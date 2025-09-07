import React, { useState } from 'react';
import { Download, CheckCircle, XCircle, Calendar, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { CheckRow, PropertyType, ParserType, Schedule, AreaType } from '../types';
import { exportToExcel } from '../utils/exportUtils';

interface WeeklyChecksProps {
  checkRows: CheckRow[];
  weekDates: string[];
  onCheckToggle: (propertyId: string, date: string) => void;
  currentWeekOffset: number;
  onWeekChange: (offset: number) => void;
}

const WeeklyChecks: React.FC<WeeklyChecksProps> = ({ 
  checkRows, 
  weekDates, 
  onCheckToggle, 
  currentWeekOffset, 
  onWeekChange 
}) => {
  const getPropertyTypeLabel = (type: PropertyType): string => {
    const labels: { [key in PropertyType]: string } = {
      apartments: 'Квартиры',
      parking: 'Паркинги',
      commercial: 'Коммерция'
    };
    return labels[type];
  };

  const getParserTypeLabel = (type: ParserType): string => {
    const labels: { [key in ParserType]: string } = {
      automatic: 'Автоматический',
      express: 'Экспресс',
      manual: 'Ручной'
    };
    return labels[type];
  };

  const getAreaTypeLabel = (areaType: AreaType): string => {
    const labels: { [key in AreaType]: string } = {
      reduced: 'П',
      total: 'О'
    };
    return labels[areaType];
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const day = days[date.getDay()];
    const formatted = date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' });
    return `${day} ${formatted}`;
  };

  const getWeekTitle = (): string => {
    if (currentWeekOffset === 0) return 'Текущая неделя';
    if (currentWeekOffset === -1) return 'Прошлая неделя';
    if (currentWeekOffset === 1) return 'Следующая неделя';
    if (currentWeekOffset < 0) return `${Math.abs(currentWeekOffset)} недель назад`;
    return `Через ${currentWeekOffset} недель`;
  };

  const getTotalChecksBadgeColor = (totalChecks: number): string => {
    if (totalChecks === 0) return 'bg-red-100 text-red-800';
    if (totalChecks === 1) return 'bg-gray-100 text-gray-800';
    return 'bg-green-100 text-green-800';
  };

  const handleExport = () => {
    exportToExcel(checkRows, weekDates);
  };

  const totalChecksInWeek = checkRows.reduce((sum, row) => sum + row.totalChecks, 0);
  const averageChecksPerRow = checkRows.length > 0 ? (totalChecksInWeek / checkRows.length).toFixed(1) : 0;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-900">Недельный график проверок</h2>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => onWeekChange(currentWeekOffset - 1)}
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm font-medium text-gray-700 min-w-[120px] text-center">
                {getWeekTitle()}
              </span>
              <button
                onClick={() => onWeekChange(currentWeekOffset + 1)}
                className="p-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded transition-colors"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Всего проверок: {totalChecksInWeek} • Среднее на строку: {averageChecksPerRow}
          </p>
        </div>
        <button
          onClick={handleExport}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>Экспорт в Excel</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 min-w-[120px]">
                Застройщик
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[140px]">
                ЖК
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                Тип
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[50px]">
                Отд
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[50px]">
                Акц
              </th>
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[50px]">
                Пл
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                Офис
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[100px]">
                Парсер
              </th>
              {weekDates.map((date) => (
                <th key={date} className="px-3 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                  {formatDate(date)}
                </th>
              ))}
              <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[80px]">
                Всего
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {checkRows.map((row) => (
              <tr key={row.propertyId} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 py-4 whitespace-nowrap sticky left-0 bg-white">
                  <div className="text-sm font-medium text-gray-900">
                    {row.developerName}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{row.complexName}</div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {getPropertyTypeLabel(row.propertyType)}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {row.finishParsing ? (
                    <Check className="h-4 w-4 text-green-600 mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-red-600 mx-auto" />
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  {row.promotionParsing ? (
                    <Check className="h-4 w-4 text-green-600 mx-auto" />
                  ) : (
                    <X className="h-4 w-4 text-red-600 mx-auto" />
                  )}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-center">
                  <span className="text-sm font-medium text-gray-900">
                    {getAreaTypeLabel(row.areaType)}
                  </span>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {row.office}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    row.parserType === 'automatic' ? 'bg-green-100 text-green-800' :
                    row.parserType === 'express' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {getParserTypeLabel(row.parserType)}
                  </span>
                </td>
                {weekDates.map((date) => (
                  <td key={date} className="px-3 py-4 text-center">
                    <button
                      onClick={() => onCheckToggle(row.propertyId, date)}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
                    >
                      {row.weeklyChecks[date] ? (
                        <CheckCircle className="h-6 w-6 text-green-600 hover:text-green-700" />
                      ) : (
                        <XCircle className="h-6 w-6 text-gray-300 hover:text-gray-400" />
                      )}
                    </button>
                  </td>
                ))}
                <td className="px-4 py-4">
                  <div className="text-sm text-gray-900 max-w-xs">
                    {row.comment}
                  </div>
                </td>
                <td className="px-4 py-4 text-center">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    getTotalChecksBadgeColor(row.totalChecks)
                  }`}>
                    {row.totalChecks}
                  </div>
                </td>
              </tr>
            ))}
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[120px]">
                Комментарий
              </th>
          </tbody>
        </table>
      </div>

      {checkRows.length === 0 && (
        <div className="px-6 py-12 text-center">
          <Calendar className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Нет данных для отображения</h3>
          <p className="mt-1 text-sm text-gray-500">
            Добавьте застройщиков и жилые комплексы для начала работы.
          </p>
        </div>
      )}
    </div>
  );
};

export default WeeklyChecks;