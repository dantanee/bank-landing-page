import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import {QUERIES} from './constant';
import Facebook from './assets/images/icon-facebook.svg';
const FooterSection = () => (
    <Wrapper>
            <LogoSide>
                <Logo href="/">
                <img src="/images/whitelogo.svg" alt=""/>
                </Logo>
            <Social>
                <a href="/">
                    <img src="/images/icon-facebook.svg" alt=""/>
                </a>
                <Icons href="/">
                    <img src="/images/icon-youtube.svg" alt=""/>
                </Icons>
                <a href="/">
                    <img src="/images/icon-twitter.svg" alt=""/>
                </a>
                <a href="/">
                    <img src="/images/icon-pinterest.svg" alt=""/>
                </a>
                <a href="/">
                    <img src="/images/icon-instagram.svg" alt=""/>
                </a>
            </Social>
            </LogoSide>
            <NavWrapper>
            <InfoSection>
                <Link href="/">About Us</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                </InfoSection>
                <CareerSection>
                <Link href="/">Career</Link>
                <Link href="/">Support</Link>
                <Link href="/">Privacy</Link>
                </CareerSection>
            </NavWrapper>
               
            <DisclaimerSection>
                <ButtonWrapper>
                <Button>Request Invite</Button>
                </ButtonWrapper>

                <Disclaimer>&copy;Easybank.All Rights Reserved</Disclaimer>
            </DisclaimerSection>
    </Wrapper>
);
const Wrapper = styled.footer`
display:flex;
flex-direction: column;
gap:32px;
align-items:center;
padding-top:40px;
padding-bottom:40px;
background-color: var(--color-dark-blue);
@media ${(QUERIES.laptopAndUp)} {
    flex-direction:row;
    padding:48px 165px;
}
@media ${ (QUERIES.tabletOnly)}{
    flex-direction:row;
    padding-right:32px;
    padding-left:32px;
}
`
const NavWrapper = styled.nav`
@media ${(QUERIES.tabletAndUp)} {
    display:grid;
    grid-template-columns: 160px 160px;
    margin-left:135px;
}
@media ${(QUERIES.tabletOnly)} {
    margin-left  :48px ;
    gap:32px;
    grid-template-columns:auto auto;
}
`
const LogoSide = styled.div`
display:flex;
flex-direction: column;

`
const Icons = styled.a`
&:hover {
    color:blue;
}
`
const Link = styled.a`
color:var(--color-white);
font-size: ${15 /16}rem;
font-weight: 400;
`
const Social = styled.div`
display: flex;
margin-top: 55px;
gap:12px;
`
const Logo = styled.a`
`

const InfoSection = styled.div`
display:flex;
flex-direction: column;
gap:8px;

`
const CareerSection = styled(InfoSection)``;
const DisclaimerSection = styled.div`

display:flex;
flex-direction:column;
align-items:center;
gap:24px;
@media ${(QUERIES.tabletAndUp)}{
    margin-left:auto;
}
`
const ButtonWrapper = styled.div`
/* align-self:flex-end; */
`
const Disclaimer = styled.p`
color:var(--color-white);
opacity:0.5;
font-size: ${15/16}rem;
`
export default FooterSection;