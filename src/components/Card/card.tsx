import React, { useState } from 'react';

interface CardProps {
  items: string[];
}

export const Card: React.FC<CardProps> = ({ items }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className='card bg-base-100 w-96 shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
  );
};
