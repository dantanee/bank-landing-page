import React from 'react';
import styled from 'styled-components';
import ArticleSection from './ArticleGridSection';
import { QUERIES } from './constant';
import FooterSection from './FooterSection';
import InfoGridSection from './InfoGridSection';
import IntroSection from './InroSection';

const MainSection = () => (
    <Wrapper>
       <IntroSection />
        <InfoGridSection />
        
         {/* <FooterSection /> */}
    </Wrapper>
);
const Wrapper = styled.div`
background-color: var(--color-light-grayish-blue);
padding:64px 24px;
@media ${(QUERIES.tabletAndUp)} {

   padding:96px 165px 94px 165px;
}
`






export default MainSection;