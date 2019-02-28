import React from "react"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button  from '../elements/Button'
import Avatar  from '../elements/Avatar'
import Theme from '../configuration/theme.js'
import Image from './../images/gatsby-icon.png'

const CSS = {
  backgroundColor: 'white'
}


const IndexPage = () => (
  <Layout>
    <SEO title="Elements" keywords={[`gatsby`, `application`, `react`]} />

    <ThemeProvider theme={Theme}>
      <>
        <section>
          <h2>Botones</h2>
          <Button color={"primary"} divisor={10} css={CSS} >Click</Button>
          <Button color={"primary"} >Click</Button>
          <Button color={"secondary"} >Click</Button>
          <Button color={"danger"} >Click</Button>
        </section>
        <hr/>
        <section>
          <h2>Avatares</h2>
          <Avatar size={'xs'} >XS</Avatar>
          <Avatar >SM</Avatar>
          <Avatar size={'md'}
                  shape={'square'} >MD</Avatar>
          <Avatar size={'lg'}
                  shape={'rounded'}>LG</Avatar>
          <Avatar size={'xl'} >XL</Avatar>

          <h2>Avatares + img tag</h2>

          <Avatar size={'xs'} >
            <img src={Image} alt=""/>
          </Avatar>
          <Avatar >
            <img src={Image} alt=""/>
          </Avatar>
          <Avatar
            size={'md'}
            shape={'square'}
            backgroundColor={'#639'}
          >
            <img src={Image} alt=""/>
          </Avatar>
          <Avatar
            size={'lg'}
            shape={'rounded'}
            backgroundColor={'#639'}
          >
            <img src={Image} alt=""/>
          </Avatar>
          <Avatar size={'xl'} >
            <img src={Image} alt=""/>
          </Avatar>
        </section>
        <hr/>
      </>
    </ThemeProvider>

    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
