import React from 'react';

export const InterviewsList = () => {
  return (
    <div className='w-full overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Company Name</th>
            <th>Job title</th>
            <th>CTC</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle h-12 w-12'>
                    <img
                      src='/tailwind-css-component-profile-2@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Hart Hagerty</div>
                  <div className='text-sm opacity-50'>United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className='badge badge-ghost badge-sm'>
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <td>India</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle h-12 w-12'>
                    <img
                      src='/tailwind-css-component-profile-3@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Brice Swyre</div>
                  <div className='text-sm opacity-50'>China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className='badge badge-ghost badge-sm'>Tax Accountant</span>
            </td>
            <td>Red</td>
            <td>India</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>2</th>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle h-12 w-12'>
                    <img
                      src='/tailwind-css-component-profile-4@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Marjy Ferencz</div>
                  <div className='text-sm opacity-50'>Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className='badge badge-ghost badge-sm'>
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <td>USA</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
          {/* row 4 */}
          <tr>
            <th>4</th>
            <td>
              <div className='flex items-center space-x-3'>
                <div className='avatar'>
                  <div className='mask mask-squircle h-12 w-12'>
                    <img
                      src='/tailwind-css-component-profile-5@56w.png'
                      alt='Avatar Tailwind CSS Component'
                    />
                  </div>
                </div>
                <div>
                  <div className='font-bold'>Yancy Tear</div>
                  <div className='text-sm opacity-50'>Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className='badge badge-ghost badge-sm'>
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <td>India</td>
            <th>
              <button className='btn btn-ghost btn-xs'>details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
