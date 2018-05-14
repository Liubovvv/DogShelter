import styled from 'styled-components';
import { Box } from 'grid-styled';

export const Container = styled(Box)`
    max-width: 1024px;
    font-family: sans-serif;
`;

Container.defaultProps = {
    mx: 'auto'
};