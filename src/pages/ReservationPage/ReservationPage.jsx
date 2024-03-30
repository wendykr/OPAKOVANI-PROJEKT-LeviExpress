import React, { useState, useEffect } from 'react';
import './ReservationPage.css';
import { useParams } from 'react-router-dom';

export const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const { reservationId } = useParams();

  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${reservationId}`);
      const data = await response.json();
      setReservation(data.results);
    };

    fetchReservations();
  }, []);

  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. {reservationId}</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        {
          reservation && 
            <>
              <div className="reservation__info">
                <p>{reservation.date}</p>
                <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p>
                <p>{reservation.toCity.name}, {reservation.toCity.time}</p>
                <p>{reservation.seatNumber}</p>
              </div>
            </>
        }
      </div>
    </div>
  )
}
