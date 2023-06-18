import React from 'react';

import { BlogsList } from '@/components/BlogsList';

export const Blogs = ({ blogData }: any) => {
  // return <div className=' mx-auto max-w-screen-xl	 bg-black'>Testing</div>;
  return (
    <div className='card lg:card-side bg-base-100 mx-auto max-w-screen-xl shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title'>Blogs</h2>
        <p>Unlock Knowledge: Get all of the blogs list.</p>
        <div className='card-actions justify-end '>
          <BlogsList blogData={blogData} />
        </div>
      </div>
    </div>
  );
};
