import React from 'react'; 
import styled from 'styled-components';
import { QUERIES } from './constant';
const IntroSection = () => (
    <Wrapper>
    <h1>
        Why choose Easybank?
    </h1>
    <p>
        We leverage Open Banking to turn your bank account
        into your financial hub.
        Control your finances like never before.
    </p>
</Wrapper>
)
const Wrapper = styled.div`

text-align:center;
& > h1 {
    font-weight: 300;
    font-size: ${40/16}rem;
    color: var(--color-dark-blue);
    margin-bottom:16px;
}
& p {
    max-width:60ch;
    font-weight: 400;
    font-size: ${18 / 16}rem;
    color: var(--color-grayish-blue);
    margin-bottom:72px;
}

@media ${(QUERIES.tabletAndUp)} {
  
    text-align:revert;
}
`
export default IntroSection;