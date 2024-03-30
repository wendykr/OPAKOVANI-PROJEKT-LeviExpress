import React from 'react';
import './ReservationPage.css';

export const ReservationPage = () => {
  return (
    <div className="reservation container">
      <h2>Vaše e-jízdenka č. HAQBAQASf7M</h2>
      <div className="reservation__body">
        <div className="reservation__headings">
          <p>Datum cesty:</p>
          <p>Odjezd:</p>
          <p>Příjezd:</p>
          <p>Sedadlo:</p>
        </div>
        <div className="reservation__info">
          <p>pá 28. květen 2021</p>
          <p>Bratislava, 21:15</p>
          <p>Budapest, 23:55</p>
          <p>18</p>
        </div>
      </div>
    </div>
  )
}
