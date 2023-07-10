import {Link }from "react-router-dom";
import {
  CardWrapper,
  ImgWrapper,
  Img,
  InfoWrapper,
  TitleBox,
  Title,
  DeleteButton,
  StyledIcon,
  DescriptionBox,
  Description,
  TimeBox,
  Time,
  FavPageButton
} from "./FavCard.styled";

export const FavCard = ({
  _id,
  title,
  preview,
  description,
  time,
  onDelete,
}) => {
  return (
    <>
      <CardWrapper key={_id}>
        <ImgWrapper>
          <Img src={preview} alt={title} />
        </ImgWrapper>
        <InfoWrapper>
          <TitleBox>
            <Title>{title}</Title>
            <DeleteButton type="button" onDelete={onDelete}>
              <StyledIcon />
            </DeleteButton>
          </TitleBox>
          <DescriptionBox>
            <Description>{description}</Description>
          </DescriptionBox>
          <TimeBox>
            <Time>{time}</Time>
            <Link to={`api/favorite${_id}`}>
              <FavPageButton>see recipe</FavPageButton>
            </Link>
          </TimeBox>
        </InfoWrapper>
      </CardWrapper>
    </>
  );
};
