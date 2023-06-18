import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import { Blogs } from '@/components/Blogs';
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

interface CardProps {
  items: string[];
}

async function getArtistAlbums() {
  const res = await fetch(`https://ailp-server.onrender.com/blog`);
  return res.json();
}

export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const items = ['tri', 'tri', 'tri', 'trisd'];

  const displayedItems = showAll ? items : items.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const res = await getArtistAlbums();
        console.log('🚀 ~ HomePage ~ resss  ( ~_~ )   ::', res.data);
        setBlogData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='hero mb-56 h-96 pt-20	'>
            <div className='hero-content flex-col lg:flex-row-reverse'>
              <img
                src='https://res.cloudinary.com/dbpfhcujh/image/upload/v1686987395/hackathon/undraw_transfer_money_re_6o1h_rgiqmw.svg'
                className='max-w-sm '
              />
              <div>
                <h1 className='text-5xl font-bold'>Blogs page!</h1>
                <p className='py-6'>
                  Discover blog blog, improve leaning, keep growing, keep
                  improving
                </p>
                <button className='btn btn-primary'>Find Blog</button>
              </div>
            </div>
          </div>
          <Blogs blogData={blogData} />
          <div className='h-40' />
        </section>
      </main>
    </Layout>
  );
}
