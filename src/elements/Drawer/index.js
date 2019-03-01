import React from 'react'
import Styled from 'styled-components'

const Drawer = Styled('div')`
  width: ${p=>p.fullWidth ? '100%' : p.width+'px' };
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  background: white;
  transition: transform 176ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: translateX(
  ${p=>!p.open ? p.fullWidth ? '-100%' : -(p.width+2) + 'px' : '0px'}
  )
`;

Drawer.defaultProps = {
  width: 280,
  fullWidth: true,
  open: false,
}

export default Drawer;