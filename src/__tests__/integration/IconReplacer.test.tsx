import IconReplacer from '../../components/atoms/Icon';
import repos from '../mock/repos.json';
import { render } from '../utils/render';
import { cleanup, screen } from '@testing-library/react';

afterEach(cleanup);

test('verify if component receives `children` and render the icons correctly', () => {
  const currentDataTestId = 'icon-replacer_rtl';
  const projectName = repos[0].name; // > archive-nodejs-typescript-reactjs-styledcomp_color-diff-test

  render(<IconReplacer dataTestId={currentDataTestId} text={projectName} />);

  const iconReplacer = screen.getByTestId(currentDataTestId);
  const archiveIcon = screen.getByTestId(/^icon-archive_\d+/);
  const njsIcon = screen.getByTestId(/^icon-nodejs_\d+/);
  const tsIcon = screen.getByTestId(/^icon-typescript_\d+/);
  const rjsIcon = screen.getByTestId(/^icon-reactjs_\d+/);

  expect(iconReplacer).toBeInTheDocument();
  expect(archiveIcon).toBeInTheDocument();
  expect(njsIcon).toBeInTheDocument();
  expect(tsIcon).toBeInTheDocument();
  expect(rjsIcon).toBeInTheDocument();

  expect(iconReplacer).not.toHaveTextContent('_color-diff-test');
});
