import FooterInfo from '@/components/molecules/FooterInfo';
import Navigation from '@/components/molecules/Navigation';
import React, { PropsWithChildren } from 'react';
const MainTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (<div className="fixed flex flex-col w-full h-full z-0">
    <div className="flex-24 justify-items-center m-4 pb-2 overflow-y-auto md:min-w-1/2 md:mx-auto">
      {children}
    </div>

    <div className="flex-2 justify-items-center mx-4 md:min-w-1/2 md:mx-auto">
      <Navigation />
    </div>

    <div className="flex-1 justify-items-center m-4 text-white">
      <FooterInfo />
    </div>
  </div>);
};

export default MainTemplate;
