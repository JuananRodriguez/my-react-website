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
  transform: translateX( ${p=>!p.open ? p.fullWidth ? '-100%' : -(p.width+2) + 'px' : '0px'} );
  box-shadow: 0px 8px 10px -5px rgba(0,0,0,0.2), 0px 16px 24px 2px rgba(0,0,0,0.14), 0px 6px 30px 5px rgba(0,0,0,0.12);

`;

Drawer.defaultProps = {
  width: 280,
  fullWidth: false,
  open: false,
}

export default Drawer;