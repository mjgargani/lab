import iconList from './list.json'; 

interface IconProps {
  i: string | string[]; 
}

const Icon: React.FC<IconProps> = ({ i }) => {
  const icons = Array.isArray(i) ? i : [i]; 
  return (
    <>
      {icons.map((iconAlias, index) => {    
        const icon = iconList.find((item) => item.alias === iconAlias);        
        return (
          <i
            key={index}
            className={`m-0.5 ${icon?.class || 'fa-solid fa-code'}`} 
            style={{ color: icon?.color || 'black' }}
            title={icon?.name || iconAlias} 
          />
        );
      })}
    </>
  );
};

export default Icon;
