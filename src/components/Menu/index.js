import React from 'react'
import Styled from 'styled-components'
import { margin } from "../../helpers/functions"

const MenuS = Styled('div')`
  position:absolute;
  z-index: 1000;
  width: 100%;
  overflow: auto;
  box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
  top: 0;
  padding: ${margin} 0;
  background: #fff;
  border-radius: 4px;
  transform: scale(${p=>p.open ? '1': '0' });
  opacity: ${p=>p.open ? '1': '0' };
  transform-origin: ${p=>p.openFrom};
  transition: opacity 264ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 176ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const MenuA = Styled('div')`
  position:relative;
  width: 100%;
  ${MenuS}{
    max-width: ${p=>p.maxWidth};
    height: ${p=>p.maxHeight};
  }
`;

export const Menu = (OpenComponent) =>{
  class innerMenu extends React.Component{
    state = {
      open: this.props.open
    }

    handleLister = () =>{
      this.setState({open:false})
    }

    handleEvent = (e) => {
      if (this.state.open)
        window.addEventListener('click',this.handleLister, true)
      else {
        window.removeEventListener('click',this.handleLister, true)
      }
    }

    handleOpen = () => {
      this.setState({
        open: !this.state.open
      }, this.handleEvent)
    }

    render(){
      const {open} = this.state;
      const {children, maxWidth, maxHeight, openFrom} = this.props;
      return (
        <MenuA maxWidth={maxWidth} maxHeight={maxHeight}>
          <OpenComponent onClick={this.handleOpen}/>
          <MenuS divisor={2} open={open} openFrom={openFrom}>{children}</MenuS>
        </MenuA>
      )
    }
  }

  innerMenu.defaultProps = {
    open: false,
    openFrom: 'top left',
    maxWidth: "300px",
    maxHeight: "max-content"
  }

  return innerMenu
}

const MenuDOM = (props) => {
  const DOM = Menu(props.openComponent)
  return <DOM {...props}/>
}


export default MenuDOM