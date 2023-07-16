import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

export const Box = styled.div`
position:absolute;
width:330px;
    height: 179px;
right: 0;
top: 160px;
z-index:9;
padding:44px;
background-color:white;
border-radius:10px;
@media (min-width: 768px) {
    width:480px;
    height: 215px;
    top:-1px;
    right:200px;
}
@media (min-width: 1280px) {
    width:500px;
height: 215px;
right: -150px;
top:170px;
}
`
export const Text = styled.p`
display: flex;
justify-content: center;
font-weight:400;
font-size:14px;
line-height:18px
@media (min-width: 768px) {
    font-size:18px;
}
@media (min-width: 1280px) {
    font-size:18px;
    line-height:24px
}

`
export const BoxLogout =styled.div`
display:flex;
margin-top:20px;
@media (min-width: 768px) {
    margin-top:40px;
}
@media (min-width: 1280px) {
margin-top:40px;
}
`

export const ButtonLogOut = styled.button`
width:137px;
height: 49px;
color:white;
margin-right:20px;
background-color:#8BAA36;
border:none;
border-radius:6px;
@media (min-width: 768px) {
    width:192px;
height: 59px;
}
@media (min-width: 1280px) {
width:192px;
height: 59px;

}
`
export const ButtonCancel = styled.button`
color:black;
background-color:#D9D9D9;
border:none;
border-radius:6px;
width:137px;
height: 49px;
@media (min-width: 768px) {
    width:192px;
    height: 59px;
    }
@media (min-width: 1280px) {
width:192px;
height: 59px;
}
`
export const IconClose = styled(VscClose)`
width:20px;
height: 20px;
position: absolute;
    top: 15px;
    right: 15px;
    @media (min-width: 768px) {
        width:24px;
        height: 24px;
        }

@media (min-width: 1280px) {
width:24px;
height: 24px;
}
`