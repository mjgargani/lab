import styled from 'styled-components'
import { CommonProps } from '../../../globals'

import animation from '../../../styles/utils/animation'

export const Container = styled.div<CommonProps>`
  min-height: 100%;
  width: 100%;
  animation: ${animation.opacity(0, 1)} 0.5s ease;

  ${(props) => props.styledCss}
`
