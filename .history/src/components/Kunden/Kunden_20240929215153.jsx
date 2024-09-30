import React, { useState } from 'react';
import './Kunden.scss';
import { kunden } from '../../data/kunden';
import backBtn from '../../assets/back-icon.png';
import nextBtn from '../../assets/next-icon.png';

const Card = ({ img, name, address, text }) => {
  return (
    <div className='card'>
      <div class>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{address}</p>
      </div>
      <p>{text}</p>
    </div>
  );
};

const Kunden = () => {
  const [startIndex, setStartIndex] = useState(0);

  const usersPerPage = 3;

  const handleNext = () => {
    if (startIndex + usersPerPage < kunden.length) {
      setStartIndex(startIndex + usersPerPage);
    }
  };

  const handleBack = () => {
    if (startIndex - usersPerPage >= 0) {
      setStartIndex(startIndex - usersPerPage);
    }
  };

  const visibleKunden = kunden.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className='kunden'>
      <img src={backBtn} alt="back-icon" className='back-btn' onClick={handleBack} />

      <div className='kunden-content'>
        <h2>Was unsere Kunden sagen</h2> 
        <div className="content">
          {visibleKunden.map((kunde) => (
            <Card key={kunde.id} {...kunde} />
          ))}
        </div>
      </div>

      <img src={nextBtn} alt="next-icon" className='next-btn' onClick={handleNext} />
    </div>
  );
};

export default Kunden;
