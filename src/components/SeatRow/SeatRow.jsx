import React from 'react';
import { Seat } from '../Seat/Seat';

export const SeatRow = ({ row, rowSelectedSeat }) => {

  return (
    <div className="seat-row">
      {
        row.map((row, index) => <Seat key={index} number={row.number} isOccupied={row.isOccupied} isSelected={rowSelectedSeat} />)
      }
    </div>
  )
}