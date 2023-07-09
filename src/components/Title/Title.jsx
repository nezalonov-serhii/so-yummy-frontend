import { TitleText, Wrapper, Section } from "./TitleText.styled";
import { Points } from  '../../components/Points/Points';

export const Title = ({ children }) => {
  return (
    <Section>
      <Points />
      <Wrapper>
        <TitleText>{children}</TitleText>
      </Wrapper>
    </Section>
  );
};
