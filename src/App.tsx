import FooterInfo from './components/molecules/FooterInfo';
import Frame from './components/molecules/Frame';
import MainTemplate from './components/templates/Main';
import GitHubButtons from './components/molecules/GitHubButtons';
import TranslateBtn from './components/molecules/TranslateBtn';
import { GitHubDataContext, useGitHubDataValues } from './context/GitHubData';
import { type PageEndPoints } from './globals';
import usePrevious from './hooks/usePrevious';
import About from './pages/About';
import Home from './pages/Home';
import Repos from './pages/Repos';
import { ContainerBase, ContainerFooter, ContainerNavigation, ContainerPage, ContainerTop } from './styles';
import { defaultTheme } from './styles/defaults/defaultTheme';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

function App() {
  // const { pathname } = useLocation();
  // const page = pathname as PageEndPoints;
  // const prevPage = usePrevious<PageEndPoints>(page);
  const appData = useGitHubDataValues();

  return (<>
    <GitHubDataContext.Provider value={appData}>
      <Frame />
      <MainTemplate>
        <Home />
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Repos />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes> */}
      </MainTemplate>
    </GitHubDataContext.Provider>
  </>);
}

export default App;
