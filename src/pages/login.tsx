import * as React from 'react';

import ArrowLink from '@/components/links/ArrowLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function LoginPage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <div className='mockup-window bg-base-200 bg-base-100 m-auto mt-56 max-w-xl border shadow-xl'>
          <div className='bg-base-100 flex flex-col justify-center px-12 py-16'>
            <h1 className='mb-6 text-center text-3xl font-semibold'>
              Login to AILP
            </h1>
            <form className='space-y-4'>
              <div>
                <label className='label'>
                  <span className='label-text text-base'>Email</span>
                </label>
                <input
                  type='text'
                  placeholder='Email Address'
                  className='input input-bordered input-primary w-full'
                />
              </div>
              <div>
                <label className='label'>
                  <span className='label-text text-base'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Enter Password'
                  className='input input-bordered input-primary w-full'
                />
              </div>
              <a
                href='#'
                className='text-xs text-gray-600 hover:text-blue-600 hover:underline'
              >
                Forget Password?
              </a>
              <div>
                <button className='btn btn-primary'>Login</button>
              </div>
            </form>
            <div className='w-fill flex'>
              <ArrowLink className='mt-8 justify-end md:text-lg' href='/'>
                Back to Home
              </ArrowLink>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
