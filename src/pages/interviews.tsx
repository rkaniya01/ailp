import * as React from 'react';
import { useState } from 'react';

import { Interviews } from '@/components/Interviews';
import Layout from '@/components/layout/Layout';
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
  const res = await fetch(`https://ailp-server.onrender.com/interview-experience`);
  return res.json();
}

export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const [interviewData, setInterviewData] = useState([]);
  const items = ['tri', 'tri', 'tri', 'trisd'];

  const displayedItems = showAll ? items : items.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

  React.useEffect(() => {
    async function fetchData() {
      console.log('Helllo');
      try {
        const res = await getArtistAlbums();
        console.log('🚀 ~ HomePage ~ resss  ( ~_~ )   ::', res.data);
        setInterviewData(res.data);
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
                src='https://res.cloudinary.com/dbpfhcujh/image/upload/v1687007203/hackathon/undraw_interview_re_e5jn_hdkish.svg'
                className='max-w-sm '
              />
              <div>
                <h1 className='text-5xl font-bold'>Interview Experiences!</h1>
                <p className='py-6'>
                  Discover companies tailored to your salary expectations. Use
                  our powerful salary filter to refine your job search and find
                  the perfect match for your financial goals.
                </p>
                <button className='btn btn-primary'>
                  Find Salary-Matched Companies!
                </button>
              </div>
            </div>
          </div>
          <Interviews interviewData={interviewData} />
          <div className='h-40' />
        </section>
      </main>
    </Layout>
  );
}
