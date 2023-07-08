import React from "react";
import Container from "../Container"
import { useScreenWidth } from "../../hooks"
import {
    Section,
    Title,
    Span,
    TextHero,
    Form,
    Input,
    Button,
    SeeRecipe,
    TextSeeRecipe,
    SpanSeeRecipe,
    TextLink,
    SpanTextLink,
    IconSpanTextLink
} from "./HeroMain.styled"


export const HeroMain = () => {
    const { mobile } = useScreenWidth();

    return(
        <Section>
            <Container>
                <Title>
                  <Span>So</Span>Yummy
                </Title>
                    {mobile && (
                        <TextHero>
                        "What to cook?" is not only a recipe<br/>
                        app, it is, in fact, your cookbook. You<br/>
                        can add your own recipes to save<br/>
                        them for the future.
                        </TextHero>
                    )}
                    {!mobile && (
                        <TextHero>
                        "What to cook?" is not only a recipe app, it is, in fact,<br/>
                        your cookbook. You can add your own recipes to<br/>
                        save them for the future.
                        </TextHero>
                    )}
                <Form>
                <Input placeholder="Search..."/>
                <Button type="submit">Search</Button>
                </Form>
                <SeeRecipe>
                    {mobile && (
                      <TextSeeRecipe>
                        <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to enjoy<br/>
                        a variety of fresh ingredients in one<br/>
                        satisfying meal
                      </TextSeeRecipe>
                    )}
                    {!mobile && (
                      <TextSeeRecipe>
                        <SpanSeeRecipe>Delicious and healthy</SpanSeeRecipe> way to<br/>
                        enjoy a variety of fresh ingredients<br/>
                        in one satisfying meal
                      </TextSeeRecipe>
                    )}
                    <TextLink to="/categories/Breakfast" >
                      See recipes
                      <SpanTextLink aria-label="go to breakfast">
                        <IconSpanTextLink />
                      </SpanTextLink>
                    </TextLink>
                </SeeRecipe>
            </Container>
        </Section>
    )
}


