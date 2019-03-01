import React from 'react'
import Styled from 'styled-components'

const Drawer = Styled('div')`
  width: ${p=>p.width}px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;
  background: white;
  transition: transform 176ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transform: translateX(${p=>!p.open ? -(p.width+2) : 0}px)
`;

Drawer.defaultProps = {
  width: 280,
  open: true,
}

export default Drawer;