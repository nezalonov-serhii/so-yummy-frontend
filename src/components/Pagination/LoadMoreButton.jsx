import { PaginationButton } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onClick, isDisabled, children }) => {
   return (
      <PaginationButton onClick={onClick} disabled={isDisabled}>
         {children}
      </PaginationButton>
   );
};
