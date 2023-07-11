import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    gap: 13px;
  }
`;

export const Item = styled.li`
  position: relative;
  width: 343px;
  height: 323px;
  margin: 0 auto;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    width: 336px;
    margin: 0px;
  }
  @media (min-width: 1280px) {
    width: 300px;
    margin-bottom: 86px;
  }
`;

export const Picture = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Title = styled.p`
  position: absolute;
  top: 245px;
  left: 18px;
  background-color: var(--background-primary);
  width: 307px;
  height: 52px;
  padding-top: 16px;
  padding-left: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 500;
  @media (min-width: 768px) {
    width: 300px;
  }
  @media (min-width: 1280px) {
    width: 268px;
  }
`;
