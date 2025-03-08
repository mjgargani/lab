import { type CommonProps } from '../../../globals';
import randomId from '../../../utils/randomId';
import Button from '../../atoms/Button';
import IconReplacer from '../../atoms/Icon';
import { Container } from './styles';
import React from 'react';

const TranslateBtn: React.FC<CommonProps> = ({ dataTestId = randomId('translate-btn'), styledCss }) => (
  <Container data-testid={dataTestId} styledCss={styledCss}>
    <a
      href="https://gargani-dev.translate.goog/?_x_tr_sl=pt&_x_tr_tl=en&_x_tr_hl=pt-BR&_x_tr_pto=wapp"
      target="_self"
      rel="noreferrer"
    >
      <Button icon={<IconReplacer text="gtranslate" />} />
    </a>
  </Container>
);

export default TranslateBtn;
