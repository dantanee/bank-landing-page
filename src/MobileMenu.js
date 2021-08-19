import React from 'react';
import {DialogOverlay,DialogContent} from '@reach/dialog'
import styled from 'styled-components';

const MobileMenu = ({isOpen,onDismiss}) => {
    return (
        <Wrapper>
            <Overlay isOpen={isOpen}>
            <Content>
                <Nav>
                    <NavLink href="/">
                        Home
                    </NavLink>
                    <NavLink href="/">
                        About
                    </NavLink>
                    <NavLink href="/">
                        Blog
                    </NavLink>
                    <NavLink href="/">
                        Contact
                    </NavLink>
                    <NavLink href="/">
                        Careers
                    </NavLink>
                </Nav>
            </Content>

        </Overlay>
        </Wrapper>
        
    )
}
const Wrapper = styled.div`
position: relative;
`
const Overlay = styled(DialogOverlay)`
position:fixed;
top:74px;
left:0;
right:0;
bottom:0;
/* background: hsl(231, 26%, 24% / 0.7); */
background-color: hsl(233deg 8% 62% / 0.8);
display:flex;
justify-content: center;
padding-top:24px;
padding:24px;
`
const Content = styled(DialogContent)`
background-color: var(--color-white);
width: 327px;
height:265px;
border-radius: 4px;
padding-top: 16px;
padding-bottom:16px;

`
const Nav = styled.nav`
display:flex;
flex-direction: column;
align-items: center;
gap:24px;
`
const NavLink = styled.a`
font-size: ${18/16}rem;
color:var(--color-darkBlue);
`
export default MobileMenu;