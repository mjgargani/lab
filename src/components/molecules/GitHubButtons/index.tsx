import { type CommonProps } from '../../../globals';
import randomId from '@/shared/utils/randomId';
import { Container } from './styles';

const GitHubButtons: React.FC<CommonProps> = ({ dataTestId = randomId('github-btns'), styledCss }) => (
  <Container data-testid={dataTestId} styledCss={styledCss}>
    <ul>
      <li>
        <a href="https://github.com/mjgargani/mjgargani/releases" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/github/package-json/v/mjgargani/mjgargani" alt="Latest release" />
        </a>
      </li>
      <li>
        <a href="https://github.com/mjgargani/mjgargani" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/github/stars/mjgargani/mjgargani?style=social" alt="Repo stars" />
        </a>
      </li>
    </ul>
  </Container>
);

export default GitHubButtons;
