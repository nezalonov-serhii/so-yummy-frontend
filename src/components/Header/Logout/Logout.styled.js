import styled from "styled-components";
import { VscClose } from "react-icons/vsc";

export const Box = styled.div`

position:absolute;
width:500px;
height: 215px;
right: -150px;
top: 160px;
z-index:9;
padding:50px;
background-color:white;
border-radius:10px;
`
export const Text = styled.p`
display: flex;
justify-content: center;
}
`
export const BoxLogout =styled.div`

display:flex;
margin-top:40px;

`

export const ButtonLogOut = styled.button`

width:192px;
height: 59px;
color:white;
margin-right:20px;
background-color:#8BAA36;
border:none;
border-radius:6px;

`
export const ButtonCancel = styled.button`

width:192px;
height: 59px;
color:black;
background-color:#D9D9D9;
border:none;
border-radius:6px;

`
export const IconClose = styled(VscClose)`

width:24px;
height: 24px;
position: absolute;
    top: 15px;
    right: 15px;

`