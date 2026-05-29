import iconList from './list.json';

interface IconProps {
  i?: string | string[];
  color?:  string;
}

const Icon: React.FC<IconProps> = ({ i, color }) => {
  const icons = Array.isArray(i) ? i : [i];
  return (
    <>
      {i ?
        icons.map((iconAlias, index) => {
          const icon = iconList.find((item) => item.alias === iconAlias);
          return (
            <i
              key={index}
              className={`m-0.5 ${icon?.class || 'fa-solid fa-code'}`}
              style={{ color: color || icon?.color || 'black' }}
              title={icon?.name || iconAlias}
            />
          );
        }) : (<></>)
      }
    </>
  );
};

export default Icon;
