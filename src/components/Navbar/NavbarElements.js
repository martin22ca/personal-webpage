import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: #040119;
  height: 80px;
  margin-top : -80px ;
  display: flex ;
  justify-content:center ;
  font-size: 1rem ;
  position:sticky ;
  top:0 ;
  z-index:10 ;

  @media screen and (max-width: 960px){
    transition:0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
 display:flex ;
 justify-content: space-between ;
 height: 80px;
 z-index: 1;
 width:100%;
 padding: 0 10px;
 max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size:1.5rem;
 align-items: center;
 margin-top: 24px;
 margin-left: 24px;
 font-weight: 24px ;
 font-weight: bold ;
 text-decoration: none ;
`

export const MobileIcon = styled.div`
 display:none;
 
 @media screen and (max-width: 768px){
  display:block ;
  position: absolute;
  top: 0;
  right:0;
  transform:translate(-100%,60%) ;
  font-size:1.5rem;
  cursor: pointer;
  color: #fff ;
 }
 `

 export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none ;
  text-align: center;

  @media screen and (max-width: 768px){
    display: none;
  }
 `
 export const NavItem = styled.li`
  width: 130px;
  align-items:center;
  padding: 7px 3px;
  margin: 1px 1px ;
`
export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 padding-left: 22px;
 text-align:center;
 text-decoration: none;
 height: 100%;
 cursor: pointer;

 &.active{
  border-bottom: 3px solid #01bf71;
 }
` 
export const NavBtn = styled.nav`
 display:flex;
 align-items: center;

 @media screen and (max-width: 768px){
  display:none;
 }
`
export const NavBtnLink = styled(LinkR)`
 border-radius: 50px;
 background: #0F0F43;
 white-space: nowrap;
 padding: 10px 22px;
 color: #fff;
 font-size: 16px;
 outline: none;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease-in-out ;
 text-decoration: none;

 &:hover{
  transition: all 0.2 ease-in-out;
  background: #6161DC;
  color: #fff;
 }
`