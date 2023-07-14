import React from "react";
// import styled from "styled-components";
import Container from "../Container";
import { CommonSearchForm } from "../CommonSearchForm/CommonSearchForm";
import { useScreenWidth } from "../../hooks"
import {
    Section,
    Title,
    Span,
    TextHero,
    CustomButtonStyles,
    CustomSearchFormContainer
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
                <CommonSearchForm 
                    CustomButtonComponent={CustomButtonStyles} 
                    SearchFormContainer={CustomSearchFormContainer}
                    />
            </Container>
        </Section>
    )
};


