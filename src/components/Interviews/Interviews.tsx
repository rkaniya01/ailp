import React from 'react';

import { InterviewsList } from '@/components/InterviewsList';

export const Interviews = () => {
  // return <div className=' mx-auto max-w-screen-xl	 bg-black'>Testing</div>;
  return (
    <div className='card lg:card-side bg-base-100 mx-auto max-w-screen-xl shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Interviews</h2>
        <p>
          Unlock Opportunities: Filter Companies by Salary and Open New Doors to
          Your Ideal Career.
        </p>
        <div className='card-actions justify-end '>
          <InterviewsList />
        </div>
      </div>
    </div>
  );
};
