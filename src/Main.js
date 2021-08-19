import React from 'react';
import styled from 'styled-components';
import ArticleSection from './ArticleGridSection';
import FooterSection from './FooterSection';
import Hero from './Hero';
import MainSection from './MainSection';

const Main = () => (
    <Wrapper>
        <Hero />
        <MainSection />
        <ArticleSection />
        <FooterSection />
    </Wrapper>
)

const Wrapper = styled.div`

`
export default Main;