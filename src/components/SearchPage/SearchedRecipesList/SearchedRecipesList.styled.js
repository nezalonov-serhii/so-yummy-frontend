import styled from "styled-components";
const RecipesList = styled.ul`
  margin-top: 42px;
  margin-bottom: 140px;
  margin: 0 auto;
  /* 40px from pagination */
  /* @media screen and (min-width: 768px) */
  @media (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 250px;
    /* 40px from pagination */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
    border-radius: 8px;
  }

  @media (min-width: 1280px) {
    min-width: 1280px;
    gap: 100px 14px;
    /* margin-top: 90px; */
    margin-top: 100px;
    margin-bottom: 200px;
  }
`;
const RecipeItem = styled.li`
  /* flex-basis: 100%; */
  width: 343px;
  height: 323px;
  :not(:last-child) {
    margin-bottom: 28px;
  }

  border-radius: 8px;
  position: relative;
  @media (min-width: 768px) {
    width: 336px;
    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media (min-width: 1024px) {
    width: 300px;
    :not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
export { RecipesList, RecipeItem };
