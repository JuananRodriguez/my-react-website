import React from 'react'
import Style from 'styled-components'
import { margin } from "../../helpers/functions"

const DayNumber = Style('text')`
  top: ${margin};
  right: ${margin};
  position: absolute;
  font-weight: 700;
`;

const DayContent = Style('text')`
  margin-top: calc(${margin} * 2);
  padding: ${margin};
  position: absolute;
`;

const Month = Style('div')`
  position: relative;
  display: grid
  grid-template-columns: auto auto auto auto auto auto auto;
  // width: 100vw;
  // display: flex;
  // display: inline-block;
  // margin: -1px;
  // width: 200px;
  // height: 150px;
  // border: #dadce0 1px solid;
  // overflow: auto;
`

class CalendarDay extends React.PureComponent{

  render(){
    const{ children } = this.props
    return(
      <Month>
        {children}
      </Month>
    )
  }

}

export default CalendarDay