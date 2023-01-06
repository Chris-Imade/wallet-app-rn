import React, { FunctionComponent } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { Container } from "../components/shared";
import { colors } from "../components/colors";

const WelcomeContainer = styled(Container)`
    background-color: ${colors.secondary};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const TopSection = styled.View`
    width: 100%;
    flex: 1;
    max-height: 55%;
`;

const TopImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: stretch;
`;

const BottomSection = styled.View`
    width: 100%;
    padding: 25px;
    flex: 1;
`;

const Welcome: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light" />
            <WelcomeContainer>
                <TopSection></TopSection>
                <BottomSection></BottomSection>
            </WelcomeContainer>
        </>
    )
}

export default Welcome;