import React from 'react';

export const InterviewsList = ({ interviewData }: any) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Comapany</th>
            <th>CTC</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {interviewData?.map((interview: any, idx: number) => (
            <tr key={interview._id}>
              <th>{idx + 1}</th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div>
                    <div className='font-bold'>{interview.title || ''}</div>
                  </div>
                </div>
              </td>
              <td>{interview?.company?.name || '-'}</td>
              <td>{`\u20A8 ${interview?.salary?.total}` || '-'}</td>
              {/* <td>{blog?.createdAt}</td> */}
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
