import React from 'react';
import styled from 'styled-components';
import { QUERIES } from './constant';
import {ArticleData} from './data';
import GridWrapper from './GridWrapper';
const ArticleSection = () => (
    <ArticleGridSection>
            <Intro>Latest Articles</Intro>
            <GridWrapper>
                {ArticleData.map(item => (
                    <ArticleGridItem key={item.id}>
                        <Image src={item.image.src} alt={item.image.alt}/>
                        <TextSection>
                        <Span>{item.author}</Span>
                        <Heading>{item.title}</Heading>
                        
                        <Article>{item.article}</Article>
                        </TextSection>
                    </ArticleGridItem>
                ))}
            </GridWrapper>
        </ArticleGridSection>
)
const ArticleGridItem = styled.article`
border-bottom-left-radius:5px;
border-bottom-right-radius: 5px;
background-color: var(--color-white);
`
const TextSection = styled.section`
padding:24px;
`
const Intro = styled.h1`
    font-size: ${40 / 16}rem;
    font-weight: 300;
    color:var(--color-dark-blue);
    margin-bottom:40px;
    text-align:center;
    @media ${(QUERIES.tabletAndUp)} {
        text-align: revert;
    }
`
const Image = styled.img`
height:200px;
display:block;
height:200px;
 width:100%; 
object-fit: cover;
border-top-left-radius:5px;
border-top-right-radius: 5px;

`

const Heading = styled.h2`
font-weight: 300;
font-size: 1rem;
margin-bottom: 8px;
color:var(--color-dark-blue);
&:hover {
    color:var(--color-limegreen);
    cursor:pointer;
}
`
const Span = styled.span`
font-size: ${10/16}rem;
font-weight: 400;
color:var(--color-grayish-blue);
`
const Article = styled.p `
font-weight: 400;
color: var(--color-grayish-blue);

`

const ArticleGridSection = styled.section`
background-color: var(--color-light-gray);
padding:88px 24px;
@media ${(QUERIES.tabletAndUp)} {
    padding: 78px 165px 80px;
}
`

export default ArticleSection;