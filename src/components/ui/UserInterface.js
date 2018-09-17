import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { ResponsiveMenu } from './'
import './index.css'

const {
    primary1Color,
    primary2Color,
    canvasColor
} = theme.palette

const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  font-family: ${theme.fontFamily};
  
  div.dynamic-menu>div:first-child {
    background: linear-gradient(${primary1Color}, ${primary2Color});
  }

  div.static-menu {
    width: 724px;
    background: linear-gradient(${primary1Color}, ${primary2Color});
    overflow-y: scroll;
  }

  div.menu-button {
    position: fixed;
    bottom: 10px;
    left: 10px; 
    height: 36px;
    z-index: 99;
    button>div>div {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
  }

  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 99;
    width: 100%;

    .footer-nav {
      background: linear-gradient(${primary1Color}, ${primary2Color});
    }
  }

  >section:last-child {
    position: relative;
    background-color: ${canvasColor}
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    height: auto;
    overflow-x: scroll;
    width: 100%;
  }
`

class UI extends Component {

    constructor() {
      super()
      this.drop = this.drop.bind(this)
    }
  
    componentDidMount() {
      window.addEventListener("dragenter", this.dragging)
      window.addEventListener("dragover", this.dragging)
      window.addEventListener("drop", this.drop)
    }
  
    componentWillUnmount() {
      window.removeEventListener("dragenter", this.dragging)
      window.removeEventListener("dragover", this.dragging)
      window.removeEventListener("drop", this.drop)
    }
  
    dragging(e) {
      e.stopPropagation();
      e.preventDefault();
    }
  
    drop(e) {
      e.stopPropagation();
      e.preventDefault();

      var photoToUpload = e.dataTransfer.files[0]
      var reader = new FileReader()
      reader.onload = event => {
        this.props.history.push({
          pathname: '/newPhoto',
          state: { photoToUpload, photoSrc: event.target.result, photoLocation: e.dataTransfer.value }
        })
      }
      reader.readAsDataURL(photoToUpload)
  
    }
  
    render() {
      return (
        <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
            <Container>
                <ResponsiveMenu breakpoint={800}>
                    {this.props.menu}
                </ResponsiveMenu>
                <section>
                    {this.props.children}
                </section>
            </Container>
        </MuiThemeProvider>
      )
    }

}

export const UserInterface = withRouter(UI)