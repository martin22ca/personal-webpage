import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const HeroContainer = styled.div`
 overflow: hidden;
 background: #0c0c0c;
 display: flex;
 justify-content:center;
 align-items:center;
 width: 100%;
 height: 100vh;
 max-height:1080;
 position: relative;
 z-index: 1;
 content: '';
 
 &:before{
   content: '';
   position:absolute;
   top:0 ;
   left: 0;
   right: 0;
   bottom: 0;
   background: 
   linear-gradient(
      45deg, 
      rgba(89,138,233,0.3) 0%, 
      rgba(127,79,134,0.3) 65%, 
      rgba(228,101,96,0.3) 100%);
   z-index: 2;
 } 
`

export const HeroBg = styled.div`
 position:relative;
 top: 0;
 right: 0;
 bottom: 0;
 left:0;
 width: 100%;
 height: 100%;
 overflow: hidden;
 clip-path: inset(0);
 z-index: 1;
`

export const VideoBg = styled.video`
 object-fit: cover;
 position: fixed;
 width:100%;
 height: 100%;
 -o-object-fit: cover;
 object-fit:cover ;
 background: #232a34;
 overflow: hidden;
 
`

export const HeroContent = styled.div`
 z-index: 3;
 max-width: 1200px;
 position: absolute;
 padding: 8xp 24px;
 display:flex ;
 flex-direction: column;
 align-items: center;
`

export const HeroH1 = styled.h1`
 color: #fff;
 font-size: 48px;
 font-weight: 900;
 text-align: center;

 @media screen and (max-width:768px) {
    font-size: 40px;
 }

 @media screen and (max-width: 480px) {
    font-size: 32px ;
 }
`

export const HeroP = styled.p`
 margin-top: 24px;
 color: #fff;
 font-size: 24px;
 text-align: center;
 max-width: 600px;

 @media screen and (max-width:768px) {
    font-size: 24px;
 }

 @media screen and (max-width: 480px) {
    font-size: 18px ;
 }
`

export const HeroBtnWrapper = styled.div`
 margin-top:32px ;
 display:flex ;
 flex-direction: column;
 align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
 margin-left:8px;
 font-size: 20px;
`
export const ArrowRight = styled(MdKeyboardArrowRight)`
 margin-left:8px;
 font-size: 20px;
`


