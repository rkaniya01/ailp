import { useRouter } from 'next/router';
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

async function getArtistAlbums(email: any, password: any) {
  const url = 'https://ailp-server.onrender.com/users/login';
  // const res = await fetch(`https://ailp-server.onrender.com/users/login`);
  const res = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify({
      email: email,
      password: password,
    }), // body data type must match "Content-Type" header
  });

  return res.json();
}

export default function LoginPage() {
  const router = useRouter();

  // React.useEffect(() => {
  async function fetchData(email: any, password: any) {
    try {
      const res = await getArtistAlbums(email, password);
      if (res.status !== 'failed') {
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  }
  // fetchData(email, password);
  // }, []);

  const handleClick = (e: any) => {
    e.preventDefault();

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    const email = e.target[0].value;
    const password = e.target[1].value;
    fetchData(email, password);
  };

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
            <form className='space-y-4' onSubmit={handleClick}>
              <div>
                <label className='label'>
                  <span className='label-text text-base'>Email</span>
                </label>
                <input
                  type='text'
                  name='email'
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
                  name='password'
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
                <button className='btn btn-primary' type='submit'>
                  Login
                </button>
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
