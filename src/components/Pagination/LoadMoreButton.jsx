import { PaginationButton } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onClick }) => {
  return (
    <PaginationButton onClick={onClick}>
      Load more
    </PaginationButton>
  );
};

