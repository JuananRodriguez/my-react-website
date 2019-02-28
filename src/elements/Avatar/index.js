import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { margin, size } from './../functions'
import SIZES from './sizes'
import _DEFAULT_COLORS from '../colors'


// const reverse = (mode) =>{
//   return mode === 'light' ? 'dark' : 'light'
// }
//
// const buttonBackgroundColor  = ({theme, color}) => {
//   const STYLE = theme.color || _DEFAULT_COLORS
//   const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
//   return COLOR[theme.mode]
// }
//
// const buttonColor = ({theme, color}) => {
//   const STYLE = theme.color || _DEFAULT_COLORS
//   const COLOR = STYLE[color] || STYLE[Button.defaultProps.color] || _DEFAULT_COLORS[Button.defaultProps.color];
//   return COLOR[reverse(theme.mode)]
// };

const borderRadius = () =>{
  console.log()
  return 100
}

const Avatar = Styled.div`
  height: ${p=>size(p,SIZES)}px;
  width: ${p=>size(p,SIZES)}px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: ${margin};
  background-color: ${p=>p.backgroundColor};
  color:${p=>p.color}
  border-radius: ${borderRadius}%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${p => p.css}
`;

Avatar.propTypes = {
  /** Con esta propiedad se puede añadir css al elemento, así como pisar propiedades existentes*/
  css: PropTypes.string,

  /** Con esta propiedad se puede añadir css al elemento, así como pisar propiedades existentes*/
  size: PropTypes.oneOf(['xs','sm','md','lg','xl']),

  /** Con esta propiedad se puede añadir css al elemento, así como pisar propiedades existentes*/
  divisor: PropTypes.number,

  /** Con esta propiedad se puede añadir css al elemento, así como pisar propiedades existentes*/
  backgroundColor: PropTypes.string,

  /** Con esta propiedad se puede añadir css al elemento, así como pisar propiedades existentes*/
  color: PropTypes.string
}

Avatar.defaultProps = {
  size: 'sm',
  divisor: 4,
  color: _DEFAULT_COLORS.default.light,
  backgroundColor: _DEFAULT_COLORS.default.dark,
  css: ``
};

export default Avatar;
