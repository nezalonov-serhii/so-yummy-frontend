import styled from "styled-components";

export const Title = styled.h3`
  color: rgba(62, 68, 98, 1);
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.48px;
  @media screen and (min-width: 768px) {
    color: var(--text-primary);
    letter-spacing: -0.24px;
  }
`;
