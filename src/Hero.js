import React from 'react';
import styled from 'styled-components';
import Intro from './assets/images/bg-intro-desktop.svg';
import Mobile from './assets/images/image-mockups.png';
import Button from './Button';
import IntroMobile from './assets/images/bg-intro-mobile.svg';
import {QUERIES} from './constant';
const Hero = () => (
        <Wrapper>
        {/* <Image src={Mobile} alt="" />  */}
        
        <TextSection>
            <TextWrapper>
            <Heading>Next generation digital banking</Heading> 
        <Text>
        Take your financial life online.Your 
        Easybank account will be a one-stop-shop for spending,
         saving, budgeting, investing, and much more.
        </Text>
            </TextWrapper>
          <ButtonWrapper>
          <Button>
            Request Invite
        </Button>
          </ButtonWrapper>
        </TextSection>
        <ImageSection>
        <MobileMockup src={Mobile} alt=""/> 
        </ImageSection>
        </Wrapper>
        
)
const Wrapper = styled.div`
display:flex;
flex-direction: column-reverse;
padding-bottom:96px;
background-color: var(--color-light-gray);
@media ${(QUERIES.tabletOnly)} {
    display: grid;
    justify-items:center;
grid-template-columns:1fr 1fr;
grid-template-areas: 
'image image'
'text text'
;
}
@media ${(QUERIES.laptopAndUp)}{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
`
const TextSection = styled.div`
flex:1;
padding:0 24px;
text-align: center;
@media ${(QUERIES.tabletOnly)} {
    /* flex:revert; */
    grid-area: text;
    text-align: revert;
}
@media ${(QUERIES.laptopAndUp)} {
    text-align: left;
    /* padding:170px 0px 165px 170px; */
    padding-left:165px;
    padding-top:165px;
    padding-bottom:170px;

}
`
const Heading = styled.h2`
    font-size: ${40 / 16}rem;
    font-weight: 300;
    line-height: 47px;
    color:var(--color-dark-blue);
    margin-bottom:16px;
    @media ${(QUERIES.laptopAndUp)} {
    font-size: ${56/16}rem;
    line-height: 64px;
}
`
const Text = styled.p`
font-weight: 400;
font-size: ${15/16}rem;
margin-bottom:32px;
color:var(--color-grayish-blue);
line-height: 24px;
@media ${(QUERIES.laptopAndUp)} {
    font-size: ${18/16}rem;
    line-height: 28px;
    margin-bottom:36px;
}
`
const TextWrapper = styled.div`
max-width:447px;
`
const ButtonWrapper = styled.div`
display:flex;
justify-content: center;
@media ${(QUERIES.laptopAndUp)} {
    display: revert;
}
`
const ImageSection = styled.div`
position:relative;
background-image: url(${IntroMobile});
background-repeat: no-repeat;
/* background-size: cover; */
overflow-y:hidden;
flex-basis:400px;
@media ${(QUERIES.tabletOnly)} {
   
    grid-area:image;
    background-size:cover;
} 
@media ${(QUERIES.tabletAndUp)}{
    overflow-y: revert;
    flex-basis:revert;
}

@media ${(QUERIES.laptopAndUp)} {
   background-image:url(${Intro});
    background-position: 10% 62%;
}
`
const MobileMockup = styled.img`
top:0;
width:100%;
object-fit: contain;
position:absolute;
clip: rect(132px,auto, auto, auto);
transform:translateY(-132px);
@media ${(QUERIES.tabletOnly)} {
    position: revert; 
    transform: none;
    clip: rect(132px,auto, auto, auto);

}
@media ${(QUERIES.laptopAndUp)} {
    clip:rect(95px,auto,auto,auto);
    transform:translate(120px,-95px)
}
`
// const GridSection = styled.div`
// display:grid;
// padding-left:165px;
// position:relative;
// grid-template-columns: 1fr 2fr;
// gap: 40px;
// background-color:var(--color-light-gray);
// @media ${(QUERIES.tabletAndDown)}{
//     /* grid-template-columns: 1fr;
//     grid-template-rows: 350px 1fr;
//     grid-template-areas: 
//     'image'
//     'intro'
//     ; */
//     padding:0;
// }
// `
// const ImageSection = styled.div`

// position: relative;
// background-image: url(${Intro});
// background-position: 10% 85%; 
// background-repeat:no-repeat;
// @media ${(QUERIES.tabletAndDown)} {
//     padding:0 24px;
//     background-image: url(${IntroMobile});
//     background-repeat:no-repeat;
//     background-size:cover;
//     background-position: 50% 50%;
// }
// `
// const TextSection = styled.div`
// /* width:447px; */

// max-width:447px;
// padding-top:170px;
// padding-bottom:170px;

// & h3 {
//     font-size: ${56 / 16}rem;
//     font-weight: 300;
//     line-height: 47px;
//     color:var(--color-dark-blue);
    
// }
// & p {
//     margin-top:24px;
//     margin-bottom:36px;
//     color:var(--color-grayish-blue);
//     font-size:${18 / 16}rem;
   
// }
// @media ${(QUERIES.tabletAndDown)} {
//         padding-left:24px;
//         padding-right: 24px;
//         margin-top:40px;
//         padding-top:revert;
//         /* padding-left: 24px;
//         padding-right:24px; */
//     }
// `
// const TextWrapper = styled.div``
// const Image = styled.img`
// position:absolute;
// z-index:2;
// right:0;
// transform:translate(130px,-120px);
// clip: rect(120px, 640px,auto,auto);
// @media ${(QUERIES.tabletAndDown)} {
//     display:block;
//     width:100%;
//     object-fit: cover;
//     clip:rect(147px,auto,auto,auto);
//     transform:translateY(-146px);
// }

// `

export default Hero;