import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button  from '../elements/Button'
import Avatar  from '../elements/Avatar'
import Theme from '../configuration/theme.js'
import Image from './../images/gatsby-icon.png'
import ListItem from '../elements/ListItem'
import Styled from 'styled-components'

const CSS = {
  backgroundColor: 'white'
}

const FullWidth = Styled('div')`
  width: 100%;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Elements" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <>
        <section>
          <h2>List Item</h2>
          <FullWidth>
            <ListItem component={Link}  to="/page-2/" >
              Item1
            </ListItem>
            <ListItem component={Link}  to="/page-2/" >
              Item2
            </ListItem>
            <ListItem component={Link}  to="/page-2/" >
              Item3
            </ListItem>
          </FullWidth>
        </section>

      </>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
