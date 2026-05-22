import Icon from '@/components/atoms/Icon/index';
import randomId from '@/shared/utils/randomId';
import { type CardProps } from './types';
import React from 'react';
import mdParser from '@/shared/utils/mdParser';

const Card: React.FC<CardProps> = ({
  dataTestId = randomId('card'),
  repo
}) => {
  const thumbnail = `https://github.com/mjgargani/${repo?.name}/blob/main/thumbnail.webp?raw=true`
  return (
    <ShadcnCard className="item max-w-sm overflow-hidden bg-gray-200 border-none rounded shadow-lg p-0">
      {repo?.name ? (
        <a
          data-testid={dataTestId}
          className="card-link block h-full min-h-72"
          href={`${repo.html_url}/#README.md`}
          target="_blank"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
          rel="noreferrer"
        >
          <div className='flex flex-col h-full'>
            <div
              className='h-36 bg-cover bg-no-repeat bg-center shadow-lg w-full'
              style={{
                backgroundImage: `url(${thumbnail})`,
                userSelect: 'none',
              }}
              role="img"
              aria-label={`Thumbnail do projeto '${repo.name}'`}
            />
            <CardHeader className="p-3 pb-0 flex flex-col gap-2 items-center">
              <div className="flex gap-2 justify-center">
                <Icon i={repo.topics}/>
              </div>
              <CardTitle className="text-xl font-bold uppercase text-center mt-2">
                {repo.name.replace("-"," ").replace("_"," ")}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-3 pb-3 pt-2">
              <div className="text-sm">
                 {mdParser(repo.description)}
              </div>
            </CardContent>
          </div>
        </a>
      ) : (
        <span className='m-4'><Icon i={"loading"} /></span>
      )}
    </ShadcnCard>
  );
};

export default Card;
