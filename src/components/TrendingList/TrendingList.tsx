import React from 'react';

export const TrendingList = ({ trendingData }: any) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Blog title</th>
            <th>Topic/Subtitle</th>
            <th>Author</th>
            <th>Published at</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trendingData?.map((data: any, index: number) => (
            // eslint-disable-next-line react/jsx-key
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div>
                    <div className='font-bold'>{data.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <p>{data.tags[0]}</p>
                <span className='badge badge-ghost badge-md'>
                  {data.subtitle}
                </span>
              </td>
              <td>{data.user.name}</td>
              <td>{data.createdAt}</td>
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
