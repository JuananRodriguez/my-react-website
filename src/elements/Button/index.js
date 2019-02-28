import React from 'react'
import Styled from 'styled-components'
import colors from './colors.js'

const reverse = (mode) =>{
  return mode === 'light' ? 'dark' : 'light'
}

const style = {
  default: { light: colors.defaultLight, dark: colors.defaultDark },
  primary: { light: colors.blueLight, dark: colors.blueDark },
  success: { light: colors.greenLight, dark: colors.greenDark, },
  warning: { light: colors.yellowLight, dark: colors.yellowDark, },
  danger: { light: colors.redLight, dark: colors.redDark, },
}

const buttonBackgroundColor  = ({theme, color}) => {
  const COLOR = style[color] ? style[color] : style[Button.defaultProps.color];
  return COLOR[theme.mode]
}

const buttonColor = ({theme, color}) => {
  const COLOR = style[color] ? style[color] : style[Button.defaultProps.color];
  return COLOR[reverse(theme.mode)]
};

const Button = Styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: ${buttonColor};
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  border-radius: 0.25em;
  margin-right: 0.5em;
  cursor: pointer;
`;

Button.defaultProps = {
  color: 'default',
};

export default Button;
