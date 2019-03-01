import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import Menu from "../components/Menu"
import Button from "../elements/Button"
import Drawer from "../components/DrawerMenu"
import SEO from "../components/seo"
import Theme from '../configuration/theme.js'
import ListItem from '../elements/ListItem'

const IndexPage = () => (
  <Layout>
    <SEO title="Elements" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <>
        <section>
          <h2>Menu</h2>

          <Drawer openComponent={({onClick})=><Button onClick={onClick}>Abrir Drawer Menu</Button>}>
            <ListItem component={Link} active to="/page-2/" >
              Item1
            </ListItem>
            <ListItem component={'span'}  to="/page-2/" >
              Item2
            </ListItem>
            <ListItem component={Link}  to="/page-2/" >
              Item3
            </ListItem>
          </Drawer>

          <Menu
            maxHeight={'150px'}
            openComponent={({onClick})=><Button onClick={onClick}>Con max-height</Button>}
            openFrom={'top center'}
          >
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

          <Menu
            maxWidth={'150px'}
            openFrom={'bottom right'}
            openComponent={({onClick})=><Button onClick={onClick}>Con max-width</Button>}
          >
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
