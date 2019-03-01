import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button  from '../elements/Button'
import Avatar  from '../elements/Avatar'
import Theme from '../configuration/theme.js'
import Image from './../images/gatsby-icon.png'
import Day from '../elements/CalendarDay';
import Month from '../elements/CalendarMonth';


function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
}


const renderDays = () =>{
  console.log(daysInMonth(7,2009))
  const days = []
  for(let i = 0 ; daysInMonth(7,2009) > i ; i++){
    days.push(
      <Day day={i + 1} key={i + 1}>
        <p>asdasd asd alksdjlasd kljasldj lkasdklj alksdjakl jsdalskdj</p>
      </Day>
    )
  }
  return days;
}

const IndexPage = () => (
  <>
    <SEO title="Elements" keywords={[`gatsby`, `application`, `react`]} />
    <ThemeProvider theme={Theme}>
      <>
        <section>
          <Month>
            {renderDays()}
          </Month>
        </section>
      </>
    </ThemeProvider>
  </>
)

export default IndexPage
