import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import Menu from "../components/Menu"
import SEO from "../components/seo"
import Theme from '../configuration/theme.js'
import ListItem from '../elements/ListItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Elements" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <>
        <section>
          <h2>List Item</h2>
          <Menu openComponent={({onClick})=><button onClick={onClick}>Abrir menu</button>}>
            <ListItem component={Link} active to="/page-2/" >
              Item1
            </ListItem>
            <ListItem component={Link}  to="/page-2/" >
              Item2
            </ListItem>
            <ListItem component={Link}  to="/page-2/" >
              Item3
            </ListItem>
          </Menu>
        </section>

      </>
    </ThemeProvider>
  </Layout>
)

export default IndexPage
