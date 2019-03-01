import React from "react"
import { Link } from "gatsby"
import Badge from '../components/Badge'
import Button from '../elements/Button'
import Avatar from '../elements/Avatar'
import {ThemeProvider} from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Theme from "../configuration/theme"

class SecondPage extends React.Component {
  state={
    invisible: false
  }

  render() {
    return (
      <Layout>
        <SEO title="COMPONENTES"/>
        <h1>COMPONENTES</h1>
        <ThemeProvider theme={Theme}>
          <section>

            <Button onClick={()=>this.setState({ invisible:!this.state.invisible })}>Ocultar Badgets</Button>


            <Badge content={'algo'} variant={'square'} visible={!this.state.invisible}>
              <Button>
                BUTTON
              </Button>
            </Badge>

            <Badge content={'algo'} variant={'rounded'} visible={!this.state.invisible}>
              <Button>
                BUTTON
              </Button>
            </Badge>

            <Badge content={'algo'} variant={'circle'} visible={!this.state.invisible}>
              <Button>
                BUTTON
              </Button>
            </Badge>

            <Badge content={'algo'} variant={'dot'} backgroundColor={'green'} visible={!this.state.invisible}>
              <Button>
                BUTTON
              </Button>
            </Badge>

            <Badge content={'algo'} variant={'dot'} visible={!this.state.invisible}>
              <Avatar size={'sm'} shape={'square'}>
                sm
              </Avatar>
            </Badge>

            <Badge content={'+99'} backgroundColor={'#345564'} visible={!this.state.invisible}>
              <Avatar size={'md'}>
                md
              </Avatar>
            </Badge>

          </section>
        </ThemeProvider>

        <Link to="/">Go back to the homepage</Link>
      </Layout>

    )
  }
}

export default SecondPage
