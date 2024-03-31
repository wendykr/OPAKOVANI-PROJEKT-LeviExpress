import React, { useState } from 'react';
import './HomePage.css';
import { useNavigate } from "react-router-dom";
import { JourneyPicker } from "../../components/JourneyPicker/JourneyPicker";
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { SeatPicker } from '../../components/SeatPicker/SeatPicker';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  const navigate = useNavigate();

  const handleJourneyChange = (journey) => {
    setJourney(journey);
  }

  const handleBuy = async () => {
    try {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'create',
          seat: journey.autoSeat,
          journeyId: journey.journeyId,
        }),
      });
      const data = await response.json();
      navigate(`/reservation/${data.results.reservationId}`);
    } catch (error) {
      console.error('Chyba při získávání dat z API:', error);
    }
  }

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange}/>
      {
        journey && 
        <>
          <JourneyDetail journey={journey}/>
          <SeatPicker />
          <div className="controls container">
            <button className="btn btn--big" type="button" onClick={handleBuy}>Rezervovat</button>
          </div>
        </>
      }
    </main>
  );
};
