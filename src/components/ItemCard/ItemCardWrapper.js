import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`;

const ItemCardWrapper = ({ children }) => <CardWrapper>{children}</CardWrapper>;

export default ItemCardWrapper;
