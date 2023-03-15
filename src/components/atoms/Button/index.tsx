import React, { type PropsWithChildren } from 'react'
import { testIdName } from '../../../utils/testIdName'

import { Container } from './styles'
import { type ButtonProps } from './types'

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  dataTestId = testIdName('button'),
  active = false,
  onClick,
  icon,
  style,
  children,
}) => (
  <Container data-testid={dataTestId} onClick={onClick} active={active} style={style}>
    <h1>
      <span>{icon}</span>
      {children}
    </h1>
  </Container>
)

export default Button
