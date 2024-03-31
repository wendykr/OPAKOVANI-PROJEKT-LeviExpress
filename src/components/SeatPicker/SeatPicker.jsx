import React from 'react';
import './SeatPicker.css'
import { SeatRow } from '../SeatRow/SeatRow';

export const SeatPicker = ({ seats }) => {

  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        <div className="seat-row">
          {
            seats.map((seat, index) => <SeatRow key={index} row={seat} />)
          }
        </div>
      </div>
    </div>
  )
}