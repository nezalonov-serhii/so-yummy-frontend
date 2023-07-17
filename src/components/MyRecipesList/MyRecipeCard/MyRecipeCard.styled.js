import { RiDeleteBinLine } from "react-icons/ri";
import styled from "styled-components";

export const CardWrapper = styled.li`
  display: flex;
  border-radius: 8px;
  background-color: var(--background-secondary);
  padding: 9px 14px;
  gap: 14px;
  margin-bottom: 18px;
  &:not(:last-child) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 768px) {
    padding: 24px 28px;
    gap: 40px;
    &:not(:last-child) {
      margin-bottom: 40px;
    }
  }
  @media screen and (min-width: 1280px) {
    padding: 40px;
    gap: 50px;
    &:not(:last-child) {
      margin-bottom: 50px;
    }
  }
`;
export const ImgWrapper = styled.div``;

export const Img = styled.img`
  max-width: 124px;
  height: 124px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    max-width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 318px;
    height: 324px;
  }
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;
export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }
`;
export const Title = styled.h3`
  color: var(--text-primary);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
  }
`;
export const DeleteButton = styled.button`
  border: none;
  padding: 5px;
  width: 24px;
  height: 24px;

  border-radius: 4px;
  background-color: var(--button-background-other);

  @media screen and (min-width: 768px) {
    padding: 8px;
    width: 38px;
    height: 38px;
  }

  @media screen and (min-width: 1280px) {
    padding: 10px;
    width: 44px;
    height: 44px;
  }
`;
export const StyledIcon = styled(RiDeleteBinLine)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  color: var(--text-light);

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }

  @media screen and (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;
export const DescriptionBox = styled.div``;
export const Description = styled.p`
  overflow: hidden;
  color: var(--text-recipe-card);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: -0.16px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 18px;
    letter-spacing: -0.28px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
export const TimeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export const Time = styled.p`
  color: var(--text-primary);
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.24px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const FavPageButton = styled.button`
  border-radius: 20px 60px;
  border: 2px solid var(--button-background-primary);
  padding: 6px 14px;
  font-size: 10px;
  padding: 12px 24px;
  background-color: var(--button-background-primary);
  text-decoration: none;
  color: var(--text-light);

  transition: all 250ms var(--cubic-bezier);

  &:hover {
    background-color: var(--button-background-secondary);
    border: 2px solid var(--button-background-secondary);
    color: var(--text-light);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    padding: 14px 38px;
    font-size: 16px;
  }
`;
