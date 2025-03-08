import randomId from '../../../utils/randomId';
import Button from '../Button';
import { Container, FilterBox } from './styles';
import { type FilterProps } from './types';
import IconReplacer from '@/components/atoms/Icon';
import React, { useState, type PropsWithChildren } from 'react';
import { BsFilter } from 'react-icons/bs';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';

const Filter: React.FC<PropsWithChildren<FilterProps>> = ({
  dataTestId = randomId('filter'),
  repoLength,
  filteredLength,
  filters,
  handleFilter,
  styledCss,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <Container data-testid={dataTestId} styledCss={styledCss}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          maxHeight: showFilter ? 'none' : 0,
          overflow: 'hidden',
          fontSize: 'small',
        }}
      >
        <FilterBox>
          <input
            data-testid={randomId('filter_check_all')}
            type="checkbox"
            id="all"
            name="all"
            value="all"
            onChange={handleFilter}
            style={{ cursor: 'pointer' }}
            checked={!filters.some((el) => !el.selected)}
          />
          <label htmlFor="all" style={{ cursor: 'pointer', padding: '4px' }} data-testid={randomId(`filter_label_all`)}>
            <IconReplacer text="all" brighter={true} />
            TODOS ({repoLength})
          </label>
        </FilterBox>
        {filters?.map((el) => (
          <FilterBox key={randomId(`filter_check_${el.name}`, true)}>
            <input
              data-testid={randomId(`filter_check_${el.name}`)}
              type="checkbox"
              id={el.name}
              name={el.name}
              value={el.name}
              checked={el.selected}
              onChange={handleFilter}
              style={{ cursor: 'pointer' }}
            />
            <label
              htmlFor={el.name}
              style={{ cursor: 'pointer', padding: '4px' }}
              data-testid={randomId(`filter_label_${el.name}`)}
            >
              <IconReplacer text={el.name} brighter={true} />
              {el.name.replace('archive', 'ARQUIVO').replace('lrn', 'APRENDIZAGEM').toUpperCase()} ({el.recurrence})
            </label>
          </FilterBox>
        ))}
      </div>
      <div
        style={{
          padding: '0 25%',
          height: 35,
          fontSize: '80%',
        }}
      >
        <Button
          icon={showFilter ? '' : <BsFilter />}
          onClick={() => {
            setShowFilter(!showFilter);
          }}
          active={showFilter}
        >
          {showFilter ? 'Ocultar' : 'Filtrar'}{' '}
          <span>
            ({filteredLength ? <FaEye /> : <FaEyeSlash />} {filteredLength})
          </span>
        </Button>
      </div>
    </Container>
  );
};

export default Filter;
