import React from 'react'
import { Button } from 'react-scroll'
import {
    InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2, TopLine, TextWrapper,
    Heading, Subtitle, BtnWrap, ImgWrap, Img

} from './InfoElements'

const InfoSection = ({
    lightBg, id, imgStart, topLine,
    lightText, headline, description,
    darkText, alt}) => {


    console.log(lightBg)
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home"></Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection