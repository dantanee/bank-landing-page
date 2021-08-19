import styled from 'styled-components';
import { QUERIES } from './constant';

const GridWrapper = styled.div`
display:grid;
justify-items: center;
grid-template-columns: repeat(auto-fill,minmax(238px,1fr));
gap:20px;
@media ${(QUERIES.tabletAndUp)} {
    justify-items: revert;
}
`
export default GridWrapper;