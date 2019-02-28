import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button  from '../elements/Button'
import Avatar  from '../elements/Avatar'
import Theme from '../configuration/theme.js'

const CSS = {
  backgroundColor: 'white'
}


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <>
        <section>
          <h2>Botones</h2>
          <Button color={"danger"} divisor={10} css={CSS}>Click</Button>
          <Button color={"primary"}>Click</Button>
          <Button color={"secondary"}>Click</Button>
          <Button color={"danger"}>Click</Button>
        </section>
        <hr/>
        <section>
          <h2>Avatares</h2>
          <Avatar size={'xs'} >Cliasd asdsdck</Avatar>
          <Avatar  >Click</Avatar>
          <Avatar size={'md'} >Click</Avatar>
          <Avatar size={'lg'} >Click</Avatar>
          <Avatar size={'xl'} >Click</Avatar>
        </section>
        <hr/>

      </>
    </ThemeProvider>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
