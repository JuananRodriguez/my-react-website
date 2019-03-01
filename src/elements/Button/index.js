import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { margin, backgroundColorFn, colorFn } from '../../helpers/functions'



const Button = Styled.button`
  font: inherit;
  padding: 0.5em 1em;
  border: ${colorFn} 1px solid;
  background-color: ${backgroundColorFn};
  color: ${colorFn};
  border-radius: 0.25em;
  margin: ${margin};
  cursor: pointer;
  ${p => p.css}
`;

Button.propTypes = {

  /**Primary, Secondary, Danger, Warning y Success están definidos de manera predeterminada, pero pueden añadirse nuevos
   tipos desde la propiedad color en el theme, al igual que se pueden anidar modes*/
  color: PropTypes.string,

  /** Con esta propiedad se puede añadir css a los botones, así como pisar propiedades existentes*/
  css:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]) ,
  /** Esta propiedad actúa como divisor (en decimal como multiplicador) del theme.themeMargin */
  divisor: PropTypes.number
}

Button.defaultProps = {
  color: 'default',
  css: ``,
  divisor: 4
};

export default Button;
