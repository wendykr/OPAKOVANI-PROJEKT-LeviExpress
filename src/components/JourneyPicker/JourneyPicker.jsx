import React, { useEffect, useState } from 'react';
import './JourneyPicker.css';
import { CityOptions } from '../CityOptions/CityOptions';
import { DatesOptions } from '../DatesOptions/DatesOptions';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities');
      const data = await response.json();
      setCities(data.results);
    };

    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const response = await fetch('https://apps.kodim.cz/daweb/leviexpress/api/dates');
      const data = await response.json();
      setDates(data.results);
    };

    fetchDates();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch(`https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`);
      const data = await response.json();
      onJourneyChange(data.results);
    } catch (error) {
      console.error('Chyba při získávání dat z API:', error);
    }
  }

  const handleSelectFrom = (event) => {
    setFromCity(event.target.value);
  }

  const handleSelectTo = (event) => {
    setToCity(event.target.value);
  }

  const handleSelectDate = (event) => {
    setDate(event.target.value);
  }

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={handleSelectFrom}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={handleSelectTo}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={handleSelectDate}>
              <DatesOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button 
              className="btn" 
              type="submit"
              onClick={handleSubmit}
              disabled={!fromCity || !toCity || !date}
            > 
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  )
};