import { Button } from "./LoadMoreButton.styled";

export const LoadMoreButton = ({ onClick, isDisabled, children }) => {
  return (
    <Button onClick={onClick} disabled={isDisabled}>
      {children}
    </Button>
  );
};
