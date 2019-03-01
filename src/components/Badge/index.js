import React,{Component} from 'react'
import Styled from 'styled-components'
import Avatar from './../../elements/Avatar'
import PropTypes from 'prop-types'
import _DEFAULT_COLORS from "../../helpers/colors"

const Dot = Styled('div')`
  height: 8px;
  padding: 0;
  width: 8px;
  position: absolute;
  transform: translateX(4px) translateY(-4px);
  background-color: red;
  border-radius: 100%;
  top: 0;
  right: 0;
`;

const BadgeA = Styled(Avatar)`
{
  background-color: ${p=>p.backgroundColor};
  color: ${p=>p.color};
  width: max-content;
  padding: 0 4px
  position: absolute;
  transform: translateX(10px) translateY(-10px);
  top: 0;
  right: 0;
}
`
const BadgeS = Styled('div')`
  position: relative;
  width: max-content;
`

class Badge extends Component{
  render(){

    const {color, children, variant, content} = this.props
    const Variant = variant === 'dot' ? Dot : BadgeA;

    return(
      <BadgeS>
        <Variant
          color={color}
          shape={variant}
          size={'xs'}
          children={variant === 'dot' ? null : content}
        />
        {children}
      </BadgeS>
    )
  }
}

Badge.propTypes = {
  /** Contenido del badge (del flotante) */
  content: PropTypes.any,

  /** 4 Opciones [dot, square, circle, rounded]*/
  img: PropTypes.oneOf(['dot', 'square', 'circle', 'rounded']),

  /** define el color de fondo del badge*/
  backgroundColor: PropTypes.string,

  /** define el color del texto que contiene el badge*/
  color: PropTypes.string
}

Badge.defaultProps = {
  variant:"square",
  content: null,
  color: _DEFAULT_COLORS.default.light,
  backgroundColor: _DEFAULT_COLORS.default.dark,

}

export default Badge