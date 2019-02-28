import React,{Component} from 'react'
import Styled from 'styled-components'
import Avatar from './../../elements/Avatar'
import PropTypes from 'prop-types'

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

    const {children, variant, content} = this.props
    const Variant = variant === 'dot' ? Dot : BadgeA;

    return(
      <BadgeS>
        <Variant
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
  /** 4 Opciones [dot, square, circle, rounded]*/
  img: PropTypes.oneOf(['dot', 'square', 'circle', 'rounded']),
}

Badge.defaultProps = {
  variant:"square"
}

export default Badge