import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button'; // Usando o componente Button
import React from 'react';

const Navigation: React.FC = () => {
  // const navigate = useNavigate();
  const navigate = (_text = '') => null; // Mock
  const page = '/'; // Mock

  return (
    <div className="flex flex-col md:w-max md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4 mx-4 md:mx-auto">
      <Button
        active={page === '/'}
        onClick={() => navigate('')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Início
      </Button>
      <Button
        // active={page === '/projects'}
        onClick={() => navigate('projects')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Projetos
      </Button>
      <Button
        // active={page === '/about'}
        onClick={() => navigate('about')}
        className="px-4 py-2 text-center w-full md:w-auto"
      >
        Sobre
      </Button>
    </div>
  );
};

export default Navigation;
