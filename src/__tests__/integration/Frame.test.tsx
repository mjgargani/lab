import { cleanup, screen, waitFor } from '@testing-library/react'

import Frame from '../../components/molecules/Frame'
import { PageEndPoints } from '../../globals'
import frameStyles from '../../styles/defaults/frame'
import potionStyles from '../../styles/defaults/potion'
import { render } from '../utils/render'

afterEach(cleanup)

test('verify if component shows child components correctly', async () => {
  const currentDataTestId = 'frame_rtl'

  render(<Frame dataTestId={currentDataTestId} page={'/'} />)

  const frame = screen.getByTestId(currentDataTestId)
  const tiles = screen.getByTestId(/^frame-tiles_\d+/)
  const shadow = screen.getByTestId(/^frame-shadow_\d+/)

  let potion
  await waitFor(async () => (potion = await screen.findByTestId(/^potion_\d+/)), { timeout: 5000 })

  expect(frame).toBeInTheDocument()
  expect(tiles).toBeInTheDocument()
  expect(shadow).toBeInTheDocument()
  expect(potion).toBeInTheDocument()
})

test.each(['/', '/projects', '/about'])(
  'verify if components changes when the `page` prop changes (value: %p)',
  async (page) => {
    const currentPage = page as PageEndPoints
    const currentDataTestId = 'frame_rtl'

    render(<Frame dataTestId={currentDataTestId} page={currentPage} />)

    const frame = screen.getByTestId(currentDataTestId)
    expect(frame).toBeInTheDocument()

    const shadow = screen.getByTestId(/^frame-shadow_\d+/)

    let potion
    await waitFor(async () => (potion = await screen.findByTestId(/^potion_\d+/)), {
      timeout: 5000,
    })

    expect(frame).toHaveStyle(
      `background: linear-gradient(315deg, ${frameStyles[currentPage].color.join(', ')});`,
    )
    expect(shadow).toHaveStyle(`opacity: ${frameStyles[currentPage].shadow}`)
    expect(potion).toHaveStyle(`opacity: ${potionStyles[currentPage].opacity}`)
  },
)
