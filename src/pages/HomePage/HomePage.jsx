import React, { useState } from 'react';
import { JourneyPicker } from "../../components/JourneyPicker/JourneyPicker";

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {(journey && 'Nalezeno spojení s id ' + journey)}
    </main>
  );
};
