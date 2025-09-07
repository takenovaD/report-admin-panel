import React, { useState } from 'react';
import { Plus, Edit, Trash2, ExternalLink, Check, X } from 'lucide-react';
import { Developer, PropertyType, ParserType, Schedule, AreaType } from '../types';

interface DevelopersTableProps {
  developers: Developer[];
}

const DevelopersTable: React.FC<DevelopersTableProps> = ({ developers }) => {
  const [expandedDeveloper, setExpandedDeveloper] = useState<string | null>(null);

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

  const getScheduleLabel = (schedule: Schedule): string => {
    const labels: { [key in Schedule]: string } = {
      daily: 'Раз в день',
      every4hours: 'Раз в 4 часа',
      every6hours: 'Раз в 6 часов',
      every15minutes: 'Каждые 15 минут'
    };
    return labels[schedule];
  };

  const getAreaTypeLabel = (areaType: AreaType): string => {
    const labels: { [key in AreaType]: string } = {
      reduced: 'П',
      total: 'О'
    };
    return labels[areaType];
  };

  const getParserTypeBadge = (type: ParserType) => {
    const colors = {
      automatic: 'bg-green-100 text-green-800',
      express: 'bg-yellow-100 text-yellow-800',
      manual: 'bg-red-100 text-red-800'
    };
    return colors[type];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">Застройщики и жилые комплексы</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Добавить застройщика</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Застройщик
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ЖК
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Тип недвижимости
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Источник
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Отд
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Акц
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Пл
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Офис
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Парсер
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Расписание
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Комментарий
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Действия
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {developers.map((developer) =>
              developer.complexes.map((complex) =>
                complex.properties.map((property, index) => (
                  <tr key={property.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {developer.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{complex.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {getPropertyTypeLabel(property.type)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-900 max-w-xs truncate">
                          {property.sourceUrl}
                        </span>
                        <a
                          href={property.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      <div className="text-xs text-gray-500">{property.sourceType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {property.finishParsing ? (
                        <Check className="h-4 w-4 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {property.promotionParsing ? (
                        <Check className="h-4 w-4 text-green-600 mx-auto" />
                      ) : (
                        <X className="h-4 w-4 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className="text-sm font-medium text-gray-900">
                        {getAreaTypeLabel(property.areaType)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 max-w-xs truncate">
                        {property.office}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getParserTypeBadge(property.parserType)}`}>
                        {getParserTypeLabel(property.parserType)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {getScheduleLabel(property.schedule)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900 max-w-xs">
                        {property.comment}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 transition-colors">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-800 transition-colors">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DevelopersTable;