import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiForkKnifeBold } from "react-icons/pi";

export const LogoIcon = styled(PiForkKnifeBold)`
  width: 30px;
  height: 30px;
  color: #8baa36;
  transition: all 0.5s var(--cubic-bezier);
`;

export const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background: #ebf3d4;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
  }
  @media (min-width: 1280px) {
    width: 44px;
    height: 44px;
    border-radius: 12px;
  }
`;

export const Title = styled.h2`
  margin-left: 8px;
  font-style: normal;
  font-weight: 700px;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0.27px;
  color: var(--text-light);

  @media (min-width: 768px) {
    font-size: 28px;
    margin-left: 12px;
  }
`;

export const LogoLink = styled(Link)``;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    justify-content: left;
    padding-top: 0;
  }
  @media (min-width: 1280px) {
    padding-top: 0;
    margin-bottom: 40px;
  }
`;
