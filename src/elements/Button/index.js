import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import _DEFAULT_COLORS from '../colors.js'

const reverse = (mode) =>{
  return mode === 'light' ? 'dark' : 'light'
}

const buttonBackgroundColor  = ({theme, color}) => {
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
  return COLOR[theme.mode]
}

const buttonColor = ({theme, color}) => {
  const STYLE = theme.color || _DEFAULT_COLORS
  const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
  return COLOR[reverse(theme.mode)]
};

const Button = Styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: ${buttonColor} 1px solid;
  background-color: ${buttonBackgroundColor};
  color: ${buttonColor};
  border-radius: 0.25em;
  margin-right: 0.5em;
  cursor: pointer;
  ${p => p.css}
`;

Button.propTypes = {
  /**Primary, Secondary, Danger, Warning y Success están definidos de manera predeterminada, pero pueden añadirse nuevos
   tipos desde la propiedad color en el theme, al igual que se pueden anidar modes*/
  color: PropTypes.string,
  /** Con esta propiedad se puede añadir css a los botones, así como pisar propiedades existentes*/
  css: PropTypes.string
}

Button.defaultProps = {
  color: 'default',
  css: ``
};

export default Button;
