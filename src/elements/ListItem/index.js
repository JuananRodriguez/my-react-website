import React from 'react'
import Styled from 'styled-components'
import _DEFAULT_COLORS from "../../helpers/colors"
import { lighten, darken } from 'polished'

import { margin } from "../../helpers/functions"

const ListItemHoc = (props) => {
  return Styled(props.component)`
    width: 100%;
    background-color: ${p => p.backgroundColor}
    color: ${p => p.color}
    padding: ${margin};
    position: relative;
    text-decoration:none;
    display: block;
    
    &:hover{
    background-color: ${p => lighten(0.1, p.backgroundColor)}
    color: ${p => p.color}
    }
    
    &:active{
    background-color: ${p => darken(0.1, p.backgroundColor)}
    color: ${p => p.color}
    }
        
    ${p => p.css}
`;
}


const ListItem = (props) => {
  const DOM = ListItemHoc(props)
  return <DOM {...props}/>
}


ListItem.defaultProps = {
  color: _DEFAULT_COLORS.default.dark ,
  backgroundColor: _DEFAULT_COLORS.default.light,
  divisor: 2,
  component: 'span',
  css: ``
}

export default ListItem
