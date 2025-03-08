import QrCodeDonate from '../../assets/qr-code-donate.webp';
import Avatar from '../../components/atoms/Avatar';
import CoinFountain from '../../components/atoms/CoinFountain';
import GridCell from '../../components/atoms/GridCell';
import GridContainer from '../../components/atoms/GridContainer';
import Loading from '../../components/atoms/Loading';
import Card from '../../components/molecules/Card';
import IconReplacer from '../../components/atoms/Icon';
import Page from '../../components/templates/Page';
import { GitHubDataContext } from '../../context/GitHubData';
import { type CommonProps } from '../../globals';
import { device } from '../../utils/devices';
import imgLoader from '../../utils/imgLoader';
import mdParser from '../../utils/mdParser';
import randomId from '../../utils/randomId';
import React, { useContext, useEffect, useState } from 'react';
import { css } from 'styled-components';

const About: React.FC<CommonProps> = ({ dataTestId = randomId('page-about') }) => {
  const { profile } = useContext(GitHubDataContext);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (Boolean(profile?.avatar_url) && !isLoaded) {
      imgLoader([profile!.avatar_url, QrCodeDonate])
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoaded(true);
        });
    }
  }, [profile, isLoaded]);

  return isLoaded ? (
    <Page>
      <GridContainer
        dataTestId={dataTestId}
        templateColumns={{ desktop: ['9fr', '4fr'] }}
        templateRows={{ mobile: ['min-content', '30vh'] }}
        columnGap={2}
        rowGap={2}
        styledCss={css`
          position: absolute;
          width: inherit;
          min-height: 100%;
        `}
      >
        <GridCell>
          <div style={{ width: '100%', height: '100%' }}>
            <Card dataTestId={randomId('card-about')} title={`Olá! Sou ${profile!.name}`} isContent={true}>
              <CoinFountain />
              <GridContainer
                templateColumns={{
                  desktop: ['2fr', '8fr'],
                  mobile: ['3fr', '7fr'],
                }}
                columnGap={2}
              >
                <GridCell
                  styledCss={css`
                    z-index: 2000;
                  `}
                >
                  <Avatar dataTestId={randomId('card-about-avatar')} src={profile!.avatar_url} />
                </GridCell>
                <GridCell
                  dataTestId={randomId('card-about-bio')}
                  styledCss={css`
                    position: relative;
                    background-color: rgb(0, 0, 0, 0.05);
                    border-radius: ${(props) => props.theme.common.border.radius};
                    text-align: justify;
                    line-height: 150%;
                    padding: 0 1.5vw;
                    z-index: 2000;
                  `}
                >
                  {mdParser(profile!.bio)}
                </GridCell>
              </GridContainer>
              <GridContainer
                styledCss={css`
                  margin-top: 2%;
                `}
              >
                <GridCell
                  dataTestId={randomId('card-about-contacts')}
                  styledCss={css`
                    z-index: 2000;
                    ul {
                      list-style: none;
                      margin: 0.25vh 0 0 0;
                      padding: 0;
                      text-align: center;
                    }
                    li {
                      display: inline;
                      border-radius: ${(props) => props.theme.common.border.radius};
                      background-color: rgba(255, 255, 255, 0.35);
                      padding: 0.25vw;
                      margin: 0 0.25vw;
                      font-size: 110%;
                    }
                  `}
                >
                  <ul>
                    <li>
                      <IconReplacer text="github" />
                      <a href="https://github.com/mjgargani" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </li>
                    <li>
                      <IconReplacer text="linkedin" />
                      <a href="https://www.linkedin.com/in/rod-olv/" target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <IconReplacer text="email" />
                      <a href="mailto:mjgargani@gmail.com" rel="noreferrer">
                        E-mail
                      </a>
                    </li>
                  </ul>
                </GridCell>
              </GridContainer>
              <GridContainer dataTestId={randomId('card-about-desc')}>
                <GridCell
                  styledCss={css`
                    z-index: 2000;
                    p {
                      text-align: center;
                      font-size: 120%;
                    }
                    @media ${device.tablet} {
                      p {
                        font-size: 90%;
                      }
                    }
                    span {
                      border-radius: ${(props) => props.theme.common.border.radius};
                      background-color: rgba(255, 255, 255, 0.35);
                      padding: 0.25vw;
                    }
                  `}
                >
                  <p>
                    <span>
                      🪙 Você contribui com meu trabalho divulgando-o e/ou{' '}
                      <a
                        href="https://nubank.com.br/cobrar/txmfc/6553c2c7-457e-4672-8ab9-08ee3e1fcc18"
                        target="_blank"
                        rel="noreferrer"
                      >
                        fazendo uma doação!
                      </a>{' '}
                      <i style={{ fontSize: 'smaller' }}>(PIX NuBank)</i>
                    </span>
                  </p>
                </GridCell>
              </GridContainer>
            </Card>
          </div>
        </GridCell>

        <a
          href="https://nubank.com.br/cobrar/txmfc/6553c2c7-457e-4672-8ab9-08ee3e1fcc18"
          target="_blank"
          rel="noreferrer"
        >
          <GridCell
            dataTestId={randomId('img-qr-code-donate')}
            bgImg={{ source: QrCodeDonate, size: 'contain' }}
            styledCss={css`
              min-height: 100%;
            `}
          />
        </a>
      </GridContainer>
    </Page>
  ) : (
    <Loading />
  );
};

export default About;
