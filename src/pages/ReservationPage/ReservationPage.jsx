import React, { useState, useEffect } from 'react';
import './ReservationPage.css';
import { NavLink, useParams } from 'react-router-dom';

export const ReservationPage = () => {
  const [reservation, setReservation] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { reservationId } = useParams();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${reservationId}`);
        if (!response.ok) {
          if (response.status === 400) {
            setError('Chyba: Neplatné číslo e-jízdenky');
            setIsLoading(false);
          } else {
            setError('Chyba při spojení s API');
            setIsLoading(false);
          }
          return;
        }
        const data = await response.json();
        setReservation(data.results);
        setIsLoading(false);
      } catch (error) {
        setError('Chyba při spojení s API');
        setIsLoading(false);
        console.error('Chyba při spojení s API:', error);
      }
    };

    fetchReservations();
  }, []);

  return (
    <div className="reservation container">
      {
        isLoading ?
          <h2>Načítám data ...</h2>
        :
        error ? (
          <div className="reservation_error">
            <h2>{error}</h2>
            <p><NavLink to="/" className="error__link">Zpět</NavLink> vyhledat spoj.</p>
          </div>
        ) : (
          reservation &&
            <>
              <h2>Vaše e-jízdenka č. {reservationId}</h2>
              <div className="reservation__body">
                <div className="reservation__headings">
                  <p>Datum cesty:</p>
                  <p>Odjezd:</p>
                  <p>Příjezd:</p>
                  <p>Sedadlo:</p>
                </div>
                <div className="reservation__info">
                  <p>{reservation.date}</p>
                  <p>{reservation.fromCity.name}, {reservation.fromCity.time}</p>
                  <p>{reservation.toCity.name}, {reservation.toCity.time}</p>
                  <p>{reservation.seatNumber}</p>
                </div>
              </div>
            </>
        )
      }
    </div>
  );
};