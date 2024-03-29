import React from 'react'

export const DatesOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {
        dates.map(date => <option value={date.dateBasic} key={date.dateBasic}>{date.dateCs}</option>)
      }
    </>
  )
}
