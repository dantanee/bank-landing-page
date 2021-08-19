import React from 'react';
import styled from 'styled-components';
import {InfoData} from './data';
import GridWrapper from './GridWrapper';
import { QUERIES } from './constant';
const InfoGridSection = () => (
    <Wrapper>
        <GridWrapper>
        {InfoData.map(item => (
                <GridItem key={item.id}>
                <img src={item.image.src} alt={item.image.alt} />
                <h1>
                    {item.title}
                </h1>
                <p>
                    {item.info}
                </p>
                </GridItem>
            ))}
        </GridWrapper>
        </Wrapper>
);
const Wrapper = styled.section`

`
const GridItem = styled.article`
display:flex;
flex-direction: column;
align-items: center;
text-align:center;
& img {
    margin-bottom: 40px;
}
& h1 {
    margin-bottom:26px;
    font-size: ${24 / 16}rem;
    color:var(--color-dark-blue);
    font-weight: 300;
}
& p {
    color:var(--color-grayish-blue);
    font-size: 1rem;
    
}
@media ${(QUERIES.laptopAndUp)} {
    display:revert;
    text-align:left;
}
`
export default InfoGridSection;