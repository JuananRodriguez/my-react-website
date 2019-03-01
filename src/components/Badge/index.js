import React from 'react'
import Styled from 'styled-components'
import Avatar from './../../elements/Avatar'
import PropTypes from 'prop-types'
import _DEFAULT_COLORS from "../../helpers/colors"

const Dot = Styled('div')`
  height: 8px;
  padding: 0;
  width: 8px;
  position: absolute;
  transition: transform 200ms;
  transform: translateX(4px) translateY(-4px) scale(${p=>p.visible ? 1 : 0});
  background-color: ${p=>p.backgroundColor};
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
  transition: transform 200ms;
  transform: translateX(10px) translateY(-10px) scale(${p=>p.visible ? 1 : 0});
  top: 0;
  right: 0;
}
`
const BadgeS = Styled('div')`
  position: relative;
  width: max-content;
`

class Badge extends React.PureComponent{
  render(){

    const {color, children, variant, content, backgroundColor, visible} = this.props
    const Variant = variant === 'dot' ? Dot : BadgeA;

    return(
      <BadgeS>
        <Variant
          visible={visible}
          backgroundColor={backgroundColor}
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
  /** muestra u oculta el badge */
  visible: PropTypes.bool,

  /** define la forma del badge */
  variant: PropTypes.oneOf(['dot','square','circle', 'rounded']),

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
  visible: true,
  variant:"circle",
  content: null,
  color: _DEFAULT_COLORS.white,
  backgroundColor: _DEFAULT_COLORS.danger.dark,

}

export default Badge