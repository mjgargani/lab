import { RenderOptions, render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../../styles/defaults/defaultTheme'

const customRender = (component: React.ReactElement<any>, options?: RenderOptions) =>
  render(
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>
    </BrowserRouter>,
    { ...options },
  )

export { customRender as render }
