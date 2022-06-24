import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR} from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const SidebarContainer = styled.aside`
 position:fixed;
 z-index:999;
 width:100%;
 height:100%;
 background: #0d0d0d;
 display:grid;
 align-items: center;
 top:0;
 right:1px;
 transition:all 0.3s ease-out;
 will-change: transform, opacity;
 opacity: ${({ isOpen }) => (isOpen ? '97%' : '0')};
 top: ${({ isOpen }) => (isOpen ? '0' : '-100%')} ;
`

export const ClosedIcon = styled(FaTimes)`
 color: #fff;
`

export const Icon = styled.div`
 position: absolute;
 top: 1.2rem;
 right: 20px;
 background:transparent;
 font-size: 2rem;
 cursor: pointer;
 outline:none;
`

export const SidebarMenu = styled.ul`
 display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(5,100px);
 text-align: center;
 padding: 10px;

 @media screen and (max-width: 480px){
    grid-template-rows: repeat(6,60px);
 }
`

export const SidebarWrapper = styled.div`
 color: #fff;
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content:center;
  font-size: 1.5rem;
  text-decoration:none;
  list-style:none ;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor:pointer;

  &:hover{
    color: #784284;
    transition: 0.2s ease-in-out;
    transform:translate(1px, 0);
    transform:scale(1.1,1.1)
  }
`

export const SideBtnWrap =styled.div`
 display:flex ;
 justify-content:center;
`

export const SidebarRoute = styled(LinkR)`
 border-radius: 50px;
 background: #1A2653;
 white-space:nowrap ;
 padding: 16px 64px;
 color: #fff;
 font-size: size 16px;
 outline:none;
 border:none;
 cursor: pointer;
 transition:all 0.2s ease-in-out;
 text-decoration:none;

 &:hover{
    transition:all 0.2s ease-in-out;
    background: #784284;
    color: #fff;
 }
`