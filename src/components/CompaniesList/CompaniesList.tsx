import React from 'react';

export const CompaniesList = ({ salariesData }: any) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Job title/Company Name</th>
            <th>Total CTC</th>
            <th>Fixed</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {salariesData?.map((data: any, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div>
                    <div className='font-bold'>{data.jobTitle}</div>
                    <div className='text-sm opacity-50'>Google</div>
                  </div>
                </div>
              </td>
              <td>
                <span className='badge badge-ghost badge-sm'>{data.total}</span>
              </td>
              <td>{data.fixed}</td>
              <td>India</td>
              <th>
                <button className='btn btn-ghost btn-xs'>details</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
