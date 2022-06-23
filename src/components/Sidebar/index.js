import React from 'react'
import { 
    SidebarContainer, Icon, ClosedIcon,
    SidebarWrapper,SidebarLink, SideBtnWrap,
    SidebarRoute,SidebarMenu
} from './SidebarElements'


const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <ClosedIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="About me" onClick={toggle}>About me</SidebarLink>
                    <SidebarLink to="Projects" onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to="Contact me" onClick={toggle}>Contact me</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign in</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar