import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex ;
  justify-content:center ;
  font-size: 1rem ;
  position:fixed ;
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
 max-width: 1200px;
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
 text-decoration: none;
 justify-content: center;
 height: 100%;
 cursor: pointer;
 transition: all 0.2 ease-in-out;

 &.active{
  border-bottom: 3px solid #4D3A81;
 }

 &:hover{
  transition: all 0.3s ease-in-out;
  color: #8225F8;
  transform:scale(1.1,1.1)
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
 background: #120424;
 white-space: nowrap;
 padding: 10px 22px;
 margin-right: 24px ;
 color: #fff;
 font-size: 16px;
 cursor: pointer;
 transition: all 0.2s ease-in-out ;
 text-decoration: none;

 &:hover{
  transition: all 0.2 ease-in-out;
  background: #8225F8;
 }
`
