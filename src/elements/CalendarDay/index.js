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

const Day = Style('div')`
  position: relative;
  // display: inline-block;
  // display: inline-grid;
  margin: -1px;
  // flex-grow: 1;
  // width: calc(100% * (1/7));
  width: 100%;
  height: 150px;
  border: #dadce0 1px solid;
  overflow: auto;
`

class CalendarDay extends React.PureComponent{

  render(){
    const{ children, day} = this.props
    return(
      <Day>
        <DayNumber divisor={2}>{day}</DayNumber>
        <DayContent divisor={2}>{children}</DayContent>
      </Day>
    )
  }

}

export default CalendarDay