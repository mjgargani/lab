import FooterInfo from '@/components/molecules/FooterInfo';
import Navigation from '@/components/molecules/Navigation';
import React, { PropsWithChildren } from 'react';
const MainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (<div className="fixed flex flex-col w-full h-full z-0">
    <div className="flex-1 p-4 text-white pointer-events-none" />

    <div className="flex-12 p-4 ">
      {children}
    </div>

    <div className="flex-2 p-4">
      <Navigation />
    </div>

    <div className="flex-1 p-4 text-white">
      <FooterInfo />
    </div>
  </div>);
};

export default MainTemplate;
