import React from 'react';
import styled from 'styled-components/macro'

const Nav = () => (
    <Wrapper>
        <ListItem>
            <Link href="/">Home</Link>
        </ListItem>
        <ListItem>
            <Link href="/">About</Link>
        </ListItem>
        <ListItem>
            <Link href="/">Contact</Link>
        </ListItem>
        <ListItem>
            <Link href="/">Blog</Link>
        </ListItem>
        <ListItem>
            <Link href="/">Careers</Link>
        </ListItem>
    </Wrapper>
)

const Wrapper = styled.ul`
display: flex;
gap:30px;
height:100%;

`
const ListItem = styled.li`
list-style: none;
`
const Link = styled.a`
text-decoration:none;
color:var(--color-grayish-blue);
&:hover::before {
    content:"";
    width:50px;
    height:3px;
    margin-top: 10px;
    position: absolute;
   bottom: 0;
    background-color: var(--color-limegreen);
}
`

export default Nav;