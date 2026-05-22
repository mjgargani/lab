import { toCamelCase } from '../utils/stringFormatter';
import { useEffect, useState } from 'react';

type GenericObject = Record<string, unknown>;

function useLocalStorage<T>(): T | false {
  const [data, setData] = useState<GenericObject | false>(false);

  useEffect(() => {
    if (Boolean(localStorage.length) && data === false) {
      let newData: GenericObject | false = false;

      Object.entries(localStorage).forEach(([key, value]: [key: string, value: string]) => {
        let item;

        try {
          item = JSON.parse(value) as GenericObject;
        } catch (error) {
          item = value;
        }

        newData = Object.assign(newData, { [toCamelCase(key)]: item });
      });

      setData(newData);
    }
  }, [data]);

  return data as T;
}

export default useLocalStorage;
