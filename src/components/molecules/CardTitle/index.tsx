import randomId from '../../../utils/randomId';
import IconReplacer from '../../atoms/Icon';
import { Container, Title } from './styles';
import { type CardTitleProps } from './types';
import React, { type PropsWithChildren } from 'react';

const replaceRegExpTitle = /.+(?<=_)/gi;
const replaceRegExpIcons = /(?=_).+/gi;

const CardTitle: React.FC<PropsWithChildren<CardTitleProps>> = ({
  dataTestId = randomId('card-title'),
  isContent = false,
  styledCss,
  children,
}) => (
  <Container isContent={isContent} data-testid={dataTestId} styledCss={styledCss}>
    <Title>
      {(children as string).replaceAll(replaceRegExpTitle, '').replaceAll('-', ' ')}
      <br />
      <IconReplacer text={(children as string).replaceAll(replaceRegExpIcons, '')} darker={true} />
    </Title>
  </Container>
);

export default CardTitle;
