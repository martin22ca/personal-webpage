import React, { useState } from 'react'
import Video from '../../videos/Space.mp4'
import { Button } from '../ButtonElement'
import { 
  HeroContainer, HeroBg,VideoBg,
  HeroContent, HeroH1, HeroP,
  HeroBtnWrapper, ArrowForward, ArrowRight
 } from './HeroElements'

const HeroSection = () => {
  const [hover,setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <>
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
          <HeroH1> Queres alto Ing en sistemas? </HeroH1>
          <HeroP>
            Llamame hoy si queres que tus programas lleguen al  espacio
          </HeroP>
          <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
              Get started {hover ? <ArrowForward /> : <ArrowRight/>}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    </>
  )
}

export default HeroSection