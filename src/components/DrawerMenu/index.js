import React from 'react'
import Drawer from '../../elements/Drawer';

export const Menu = (OpenComponent) =>{
  class innerMenu extends React.Component{
    state = {
      open: this.props.open
    }

    DrawerRef = null;

    handleLister = (e) =>{
      if(!e.path.includes(this.DrawerRef))
        this.setState({open:false}, this.handleEvent)
    }

    handleEvent = () => {
      if (this.state.open)
        window.addEventListener('click',this.handleLister, true)
      else {
        window.removeEventListener('click',this.handleLister, true)
      }
    }

    handleOpen = () => {
      this.setState({ open: !this.state.open }, this.handleEvent)
    }

    render(){
      const {open} = this.state;
      const {children, fullWidth, width} = this.props;
      return (
        <>
          <OpenComponent onClick={this.handleOpen}/>
          <Drawer ref={(node)=>this.DrawerRef = node} open={open} fullWidth={fullWidth} width={width}>
            {children}
          </Drawer>
        </>
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