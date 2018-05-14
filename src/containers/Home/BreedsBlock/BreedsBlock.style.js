import React from 'react';
import styled from 'styled-components';

export const SeeMoreButton = styled.input`
    width: auto;
    padding: 10px 20px;
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    outline: none;
    color: #fff;
    background-color: #4CAF50;
    border: none;
    border-radius: 15px;
    box-shadow: 0 5px #999;
    
    &:hover {
        background-color: #3e8e41
    }
    &:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(3px);
    }
`;