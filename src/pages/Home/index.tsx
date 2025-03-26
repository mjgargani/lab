import React from 'react';
import styles from './Home.module.css'

const Home: React.FC = () => (
  <div className="flex flex-col justify-end items-center h-full w-full pointer-events-none">
    <h1 className={`${styles.logo} font-mjgarganisLab text-3xl sm:text-3xl md:text-5xl lg:text-10xl`}>
      mjgargani&apos;s Lab <span></span>
    </h1>
  </div>
);

export default Home;
