import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, 
  NavLogo, 
  NavbarContainer,
  NavItem, 
  NavMenu, 
  NavLinks,
  MobileIcon,
  NavBtn,
  NavBtnLink
} from './NavbarElements' 

const Navbar = ({ toggle }) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
        <NavLogo to="/">Welcome</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to='about'>About me</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='projects'>Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='contact'>Contact me</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/singin">Sign in</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar