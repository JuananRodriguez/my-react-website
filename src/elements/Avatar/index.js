import React from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import { margin, size } from './../functions'
import SIZES from './sizes'
import SHAPES from './shapes'
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

const shape = (props) =>{
  const DEFAULT = (
    props.forwardedComponent &&
    props.forwardedComponent.defaultProps &&
    props.forwardedComponent.defaultProps.shape
  ) ? props.forwardedComponent.defaultProps.shape : 'circle'

  console.log(SHAPES[props.shape])

  return SHAPES[props.shape] === undefined ? SHAPES[DEFAULT] : SHAPES[props.shape]
}

const Avatar = Styled.div`
  height: ${p=>size(p,SIZES)}px;
  width: ${p=>size(p,SIZES)}px;
  font-size: ${p=>size(p,SIZES)/2}px;
  white-space: nowrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: ${margin};
  background-color: ${p=>p.backgroundColor};
  color:${p=>p.color}
  border-radius: ${shape}%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  img{
    width: 100%;
    margin: 0;
  }
  ${p => p.css}
`;

Avatar.propTypes = {
  /** Puedes asignar una imagen como imagen de fondo*/
  img: PropTypes.string,

  /** Puedes elegir entre 3 formas de avatar [square, rounded, circle]*/
  shape: PropTypes.oneOf(['square', 'rounded', 'circle']),

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
  shape: 'circle',
  color: _DEFAULT_COLORS.default.light,
  backgroundColor: _DEFAULT_COLORS.default.dark,
  css: ``
};

export default Avatar;
