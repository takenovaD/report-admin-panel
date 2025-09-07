import React from 'react';
import { Building2, Calendar, FileSpreadsheet, User, MapPin } from 'lucide-react';
import { Region } from '../types';

interface NavigationProps {
  activeTab: 'developers' | 'weekly';
  onTabChange: (tab: 'developers' | 'weekly') => void;
  selectedRegion: Region;
  onRegionChange: (region: Region) => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeTab, 
  onTabChange, 
  selectedRegion, 
  onRegionChange 
}) => {
  const regions = [
    { value: 'moscow' as Region, label: 'Москва' },
    { value: 'spb' as Region, label: 'СПб' },
    { value: 'ekaterinburg' as Region, label: 'Екатеринбург' },
    { value: 'novosibirsk' as Region, label: 'Новосибирск' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Портал недвижимости</h1>
            </div>
            <div className="flex items-center space-x-2 ml-8">
              <MapPin className="h-4 w-4 text-gray-500" />
              <select
                value={selectedRegion}
                onChange={(e) => onRegionChange(e.target.value as Region)}
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {regions.map((region) => (
                  <option key={region.value} value={region.value}>
                    {region.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onTabChange('developers')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                activeTab === 'developers'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Building2 className="h-4 w-4" />
              <span>Застройщики и ЖК</span>
            </button>
            <button
              onClick={() => onTabChange('weekly')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 ${
                activeTab === 'weekly'
                  ? 'bg-blue-100 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Calendar className="h-4 w-4" />
              <span>Недельный график</span>
            </button>
            <button className="ml-4 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;