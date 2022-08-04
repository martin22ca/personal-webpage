import React from 'react'
import { Button } from '../ButtonElement'
import {
    InfoContainer, InfoWrapper, InfoRow,
    Column1, Column2, TopLine, TextWrapper,
    Heading, Subtitle, BtnWrap, ImgWrap, Img

} from './InfoElements'

const InfoSection = ({
    lightBg, id, imgStart, topLine,
    lightText, headline, description,
    buttonLabel, darkText, img, alt}) => {


    console.log(lightBg)
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine lightText={lightText}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home">{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection