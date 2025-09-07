import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DevelopersTable from './components/DevelopersTable';
import WeeklyChecks from './components/WeeklyChecks';
import { mockDevelopers, mockDevelopersByRegion, mockWeeklyChecks, getWeekDates } from './data/mockData';
import { CheckRow, Region } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'developers' | 'weekly'>('developers');
  const [selectedRegion, setSelectedRegion] = useState<Region>('moscow');
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);
  const [weeklyChecks, setWeeklyChecks] = useState(mockWeeklyChecks);
  const weekDates = getWeekDates(currentWeekOffset);

  const currentDevelopers = mockDevelopersByRegion[selectedRegion] || [];

  const generateCheckRows = (): CheckRow[] => {
    const checkRows: CheckRow[] = [];

    currentDevelopers.forEach(developer => {
      developer.complexes.forEach(complex => {
        complex.properties.forEach(property => {
          const propertyChecks = weeklyChecks[property.id] || {};
          const totalChecks = Object.values(propertyChecks).filter(Boolean).length;

          checkRows.push({
            developerId: developer.id,
            developerName: developer.name,
            complexId: complex.id,
            complexName: complex.name,
            propertyId: property.id,
            propertyType: property.type,
            sourceUrl: property.sourceUrl,
            parserType: property.parserType,
            schedule: property.schedule,
            finishParsing: property.finishParsing,
            promotionParsing: property.promotionParsing,
            areaType: property.areaType,
            office: property.office,
            comment: property.comment,
            weeklyChecks: propertyChecks,
            totalChecks
          });
        });
      });
    });

    return checkRows;
  };

  const handleCheckToggle = (propertyId: string, date: string) => {
    setWeeklyChecks(prev => ({
      ...prev,
      [propertyId]: {
        ...prev[propertyId],
        [date]: !prev[propertyId]?.[date]
      }
    }));
  };

  const checkRows = generateCheckRows();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'developers' ? (
          <DevelopersTable developers={currentDevelopers} />
        ) : (
          <WeeklyChecks
            checkRows={checkRows}
            weekDates={weekDates}
            onCheckToggle={handleCheckToggle}
            currentWeekOffset={currentWeekOffset}
            onWeekChange={setCurrentWeekOffset}
          />
        )}
      </main>
    </div>
  );
}

export default App;