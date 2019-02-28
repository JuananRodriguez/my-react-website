import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button  from '../elements/Button'
import Theme from '../configuration/theme.js'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <div>
        <Button color={"default"}>Click</Button>
        <Button color={"primary"}>Click</Button>
        <Button color={"secondary"}>Click</Button>
        <Button color={"danger"}>Click</Button>
      </div>
    </ThemeProvider>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
