import styled from 'styled-components';

import { SeeMoreButton } from 'containers/Home/BreedsBlock/BreedsBlock.style';

export const ImagesInput = styled.input`
    width: 100%;
    padding: 10px;
    margin: 20px 0;
    box-sizing: border-box;
`;

export const FindButton = SeeMoreButton.extend`
    width: 100%;
    background-color: blue;
    
    &:hover {
        background-color: #071e8e
    }
`;