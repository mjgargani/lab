import Icon from '../../atoms/Icon';
import React from 'react';

const FooterInfo: React.FC = () => (
  <p className="text-center opacity-75">
    <Icon
      i="potion"
    /> {new Date().getFullYear()}; Este
    portfólio foi feito com{' '}
    <Icon
      i={["nodejs","typescript","vite","reactjs","tailwind"]}
    />{' '}
    e{' '}
    <Icon
      i="heart"
    />
  </p>
);

export default FooterInfo;
