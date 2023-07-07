import { TitleText, Wrapper, Section } from "./TitleText.styled";

export const Title = ({ children }) => {
  return (
    <Section>
      <Wrapper>
        <TitleText>{children}</TitleText>
      </Wrapper>
    </Section>
  );
};
