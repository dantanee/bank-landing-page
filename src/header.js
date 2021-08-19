import React,{useState} from 'react';
import styled from 'styled-components/macro';
import Logo from './assets/images/logo.svg'
import { QUERIES } from './constant';
import Nav from './Nav';
import Menu from './assets/images/icon-hamburger.svg';
import Close from './assets/images/icon-close.svg';
import MobileMenu from './MobileMenu';
import Button from './Button';

const Header = () => {
    const [showMobileNav,setShowMobileNav] = useState(false);
    return (
        <Wrapper>
        <LogoWrapper>
            <Image src={Logo} alt="logo"/>
        </LogoWrapper>
        <NavSection>
        <Nav />
        </NavSection>
        <ButtonWrapper>
        <Button>Request Invite</Button>
        </ButtonWrapper>
        {showMobileNav ? 
        <IconButton onClick={() => setShowMobileNav(false)}>
        <img src={Close} alt="close"/>
        </IconButton>
        :<IconButton onClick={() => setShowMobileNav(true)}>
            <img src={Menu} alt="menu"/>
        </IconButton>
        }
        <MenuWrapper>
        <MobileMenu isOpen={showMobileNav}/>
        </MenuWrapper>
        
    </Wrapper>
    )
}

const Wrapper = styled.header`
display:flex;
    align-items: center;
    grid-template-columns: revert;
    padding:24px;
    /* padding-left: 24px;
    padding-right:24px; */
    position:relative;

@media ${(QUERIES.laptopAndUp)} {
    display: grid;
grid-template-columns: 1fr auto 1fr;
align-content: center;
background-color: var(--color-white);
height: 80px;
/*Optical alignment */
/* padding-top:12px; */
padding-left: 165px;
padding-right: 165px;

}
`
const LogoWrapper = styled.div`

`
const ButtonWrapper = styled.div`
display: none;
@media ${(QUERIES.laptopAndUp)} {
    justify-self:end;
    display:revert;
}
`
const NavSection = styled.div`
display:none;
@media ${(QUERIES.laptopAndUp)} {
    display:revert;
}
`
const Image = styled.img`
display:block;
`
const IconButton = styled.button`
   margin-left:auto;
& svg {
    display:block;
}
@media ${(QUERIES.laptopAndUp)} {
    display:none;
 
}

`
const MenuWrapper = styled.div`
position: relative;
`
export default Header;