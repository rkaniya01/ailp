import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import { Salaries } from '@/components/Salaries';
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
export default function HomePage() {
  const [showAll, setShowAll] = useState(false);
  const items = ['tri', 'tri', 'tri', 'trisd'];

  const displayedItems = showAll ? items : items.slice(0, 3);

  const handleShowMore = () => {
    setShowAll(true);
  };

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
                <h1 className='text-5xl font-bold'>
                  Salary Filter: Find Your Ideal Pay Scale!
                </h1>
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
          <Salaries />
          <div className='h-40' />
        </section>
      </main>
    </Layout>
  );
}
