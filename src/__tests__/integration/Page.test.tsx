import { cleanup, screen } from '@testing-library/react'

import Page from '../../components/templates/Page'
import { render } from '../utils/render'

afterEach(cleanup)

test.each([
  [true, 'conteúdo'],
  [false, ''],
])('verify if component shows children correctly (show: %p)', (show, content) => {
  const currentDataTestId = 'page_rtl'

  render(
    <Page dataTestId={currentDataTestId} show={show}>
      conteúdo
    </Page>,
  )

  const page = screen.getByTestId(currentDataTestId)
  expect(page).toBeInTheDocument()

  expect(page).toHaveTextContent(content)
})
