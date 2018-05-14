import React from 'react';
import styled from 'styled-components';

import { menuBackgroudColor } from 'theme/Global';

export const Ul = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
`;

export const Li = styled.li`
    margin: 0 20px;
    text-decoration: none;
`;

export const Nav = styled.nav`
    background-color: #F5F5F5;
    padding: 10px 0;
   
    a{
        color: #B1AAB1;
        text-decoration: none;
      
        &:hover{
            color: blue;
        }
    }
`;