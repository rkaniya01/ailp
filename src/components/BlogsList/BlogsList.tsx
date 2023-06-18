import React from 'react';

export const BlogsList = ({ blogData }: any) => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title</th>
            <th>Votes</th>
            <th>Author</th>
            <th>Created Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {blogData?.map((blog: any, idx: number) => (
            <tr key={blog._id}>
              <th>{idx + 1}</th>
              <td>
                <div className='flex items-center space-x-3'>
                  <div>
                    <div className='font-bold'>{blog.title || ''}</div>
                  </div>
                </div>
              </td>
              <td>{blog.vote || 0}</td>
              <td>{blog?.user?.name || 'Anonymous'}</td>
              <td>{blog?.createdAt}</td>
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
