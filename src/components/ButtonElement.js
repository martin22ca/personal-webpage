import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
 border-radius: 50px;
 background: ${({ prinary }) => (prinary ? '#8225F8' : '#120424')};
 white-space : nowrap;
 padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
 color: ${({ dark }) => (dark ? '#120424' : '#fff')};
 font-size: ${({ fontBig }) => (fontBig ? '20px' : ' 16px')};
 outline: none ;
 border: none ;
 cursor: pointer;
 display:flex ;
 justify-content: center ;
 align-items: center;
 transition: all 0.2s ease-in-out ;

 &:hover{
    transition: all 0.2s ease-in-out ;
    background: ${({ prinary }) => (prinary ? '#fff' : '#8225F8')};
 }
`