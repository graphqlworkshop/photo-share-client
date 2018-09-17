import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Hammer from 'hammerjs'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import MenuIcon from 'material-ui/svg-icons/navigation/menu'
import CameraIcon from 'material-ui/svg-icons/image/add-a-photo'
import PhotosIcon from 'material-ui/svg-icons/image/photo-library'
import GithubIcon from 'react-icons/lib/fa/github'
import BottomNavigation from 'material-ui/BottomNavigation/BottomNavigation'
import BottomNavigationItem from 'material-ui/BottomNavigation/BottomNavigationItem'

const menuIcon = <MenuIcon color="white" />
const cameraIcon = <CameraIcon color="white" />
const photosIcon = <PhotosIcon color="white" />
const githubIcon = <GithubIcon color="white" size={28} />

class Menu extends Component {
    static propTypes = {
        breakpoint: PropTypes.number
    }

    constructor({ breakpoint = 1000 }) {
        super()
        this.state = {
            open: false,
            mobile: window.innerWidth < breakpoint
        }
        this.setMobile = this.setMobile.bind(this)
        this.openMenu = this.openMenu.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
        this.toggleMenu = this.toggleMenu.bind(this)
        this.mc = new Hammer(document.body)
    }

    setMobile() {
        const { innerWidth: w } = window
        const { breakpoint: b = 1000 } = this.props
        const { mobile: m } = this.state

        if (w < b && !m) {
            this.setState({ mobile: true })
        } else if (w >= b && m) {
            this.setState({ mobile: false })
        }
    }

    toggleMenu() {
        if (this.state.open) {
            this.closeMenu()
        } else {
            this.openMenu()
        }
    }

    openMenu() {
        const { open } = this.state
        if (!open) {
            this.setState({ open: true })
        }
    }

    closeMenu() {
        const { open } = this.state
        if (open) {
            this.setState({ open: false })
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.setMobile)
        this.mc.on('panleft', this.closeMenu)
        this.mc.on('panright', this.openMenu)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setMobile)
        this.mc.off('panleft', this.closeMenu)
        this.mc.off('panright', this.openMenu)
        this.mc.destroy()
    }

    render() {
        const { children, history, location:{pathname} } = this.props
        const { open, mobile } = this.state
        const token = localStorage.getItem('token')
        return mobile ? (
            [
                <Drawer key="a" className="dynamic-menu" open={open}>
                    {children}
                </Drawer>,
                <footer key="b">
                    <BottomNavigation className="footer-nav">
                        <BottomNavigationItem
                            label="Menu"
                            icon={menuIcon}
                            onClick={this.toggleMenu}
                        />

                        {token ? pathname === '/' ? 
                            <BottomNavigationItem 
                                onClick={() => history.push('/postPhoto')}
                                label="Post" 
                                icon={cameraIcon} /> :
                            <BottomNavigationItem 
                                onClick={() => history.push('/')}
                                label="Photos" 
                                icon={photosIcon} /> :
                            <BottomNavigationItem 
                                label="Login" 
                                onClick={this.toggleMenu}
                                icon={githubIcon} />      
                        }
                    </BottomNavigation>
                </footer>
            ]
        ) : (
            <div className="static-menu" style={{ maxWidth: '250px' }}>{children}</div>
        )
    }
}

export const ResponsiveMenu = withRouter(Menu)