import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="absolute w-4/5 h-full my-0 mx-auto sm:w-3/4 sm:mx-10 lg:mx-20">
      {children}
    </div>
  );
};

export default Container;