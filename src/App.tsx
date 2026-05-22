import Frame from './widgets/Frame';
import MainTemplate from './components/templates/Main';
import { Outlet } from '@tanstack/react-router';

function App() {
  return (
    <>
      <Frame />
      <MainTemplate>
        <Outlet />
      </MainTemplate>
    </>
  );
}

export default App;
