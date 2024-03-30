import React, { useState } from 'react';
import { JourneyPicker } from "../../components/JourneyPicker/JourneyPicker";
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {
        journey && <JourneyDetail journey={journey}/>
      }
    </main>
  );
};
