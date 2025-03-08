import randomId from '../../../utils/randomId';
import IconReplacer from '../Icon';
import { Container, HomePage, IsNew, IsPinned, Stars, Watchers } from './styles';
import { type CardThumbnailProps } from './types';
import React from 'react';

const CardThumbnail: React.FC<CardThumbnailProps> = ({
  dataTestId = randomId('card-thumb'),
  homePage,
  bgImg,
  styledCss,
}) =>
  bgImg ? (
    <Container data-testid={dataTestId} bgImg={bgImg} styledCss={styledCss}>
      <IsNew data-testid={randomId('card-thumb-is-new')} bgImg={bgImg}>
        <p>{bgImg.new && <IconReplacer text="new" />}</p>
      </IsNew>
      <IsPinned data-testid={randomId('card-thumb-is-pinned')} bgImg={bgImg}>
        <p>{bgImg.pinned && <IconReplacer text="pin" />}</p>
      </IsPinned>
      <Stars data-testid={randomId('card-thumb-stars')} bgImg={bgImg}>
        <p>
          <IconReplacer text="star" />
          <span data-testid={randomId('card-thumb-stars-count')} className="card-counter">
            {bgImg.stars && bgImg.stars > 999 ? '999+' : bgImg.stars ?? 0}
          </span>
        </p>
      </Stars>
      <HomePage
        data-testid={randomId('card-thumb-homepage')}
        homePage={Boolean(homePage) && !homePage!.includes('https://gargani.dev') ? homePage : undefined}
      >
        <p>
          <a href={homePage} target="_blank" rel="noreferrer">
            <IconReplacer text="globe-extlink" />
          </a>
        </p>
      </HomePage>
      <Watchers data-testid={randomId('card-thumb-watchers')} bgImg={bgImg}>
        <p>
          <IconReplacer text="eye" />
          <span data-testid={randomId('card-thumb-watchers-count')} className="card-counter">
            {bgImg.watchers && bgImg.watchers > 999 ? '999+' : bgImg.watchers ?? 0}
          </span>
        </p>
      </Watchers>
    </Container>
  ) : (
    <></>
  );

export default CardThumbnail;
