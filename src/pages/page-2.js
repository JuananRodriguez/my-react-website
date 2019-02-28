import React from "react"
import { Link } from "gatsby"
import Badge from '../components/Badge'
import Button from '../elements/Button'
import Avatar from '../elements/Avatar'
import {ThemeProvider} from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../configuration/theme"

const SecondPage = () => (
  <Layout>
    <SEO title="COMPONENTES" />
    <h1>COMPONENTES</h1>

    <ThemeProvider theme={Theme}>
      <section>
        <Badge content={'algo'}>
          <Button>
            BUTTON
          </Button>
        </Badge>

        <Badge content={'algo'} variant={'rounded'}>
          <Button>
            BUTTON
          </Button>
        </Badge>

        <Badge content={'algo'} variant={'circle'}>
          <Button>
            BUTTON
          </Button>
        </Badge>

        <Badge content={'algo'} variant={'dot'}>
          <Button>
            BUTTON
          </Button>
        </Badge>

        <Badge content={'algo'} variant={'dot'}>
          <Avatar size={'xl'} shape={'square'}>
            XL
          </Avatar>
        </Badge>

      </section>
    </ThemeProvider>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
