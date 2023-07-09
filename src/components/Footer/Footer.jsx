import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
  const FooterContainer = styled.div`
    height: 445px;
    background-color: grey;
    margin-bottom: 66px;
    background-color: rgba(0, 0, 0, 0.5);

    @media (min-width: 768px) and (max-width: 1439px) {
      height: 423px;
    }

    @media (min-width: 1440px) {
      height: 414px;
    }
  `;

  return (
    <FooterContainer>
      <h2>Hi, I'm footer</h2>
    </FooterContainer>
  );
};
