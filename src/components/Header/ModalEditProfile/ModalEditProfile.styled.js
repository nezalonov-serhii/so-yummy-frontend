import styled from "styled-components";

export const Box = styled.div`
position:absolute;
top: 100px;
z-index:9;
width:161px;
    height: 130px;
padding:18px;
background-color:white;
border-radius:10px;
@media (min-width: 768px) {
    width:177px;
    height: 134px;
}
@media (min-width: 1280px) {
    width:177px;
    height: 134px;
}
`

export const Button = styled.button`
width:125px;
height: 43px;
font-family: Poppins;
text-align: center;
font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    color:white;
background-color:#8BAA36;
border: 1px solid transparent;
border-radius: 24px 44px;
margin-top:25px;
@media (min-width: 768px) {
    width:141px;
    height: 43px;
    margin-top:40px;
}
@media (min-width: 1280px) {
    width:141px;
height: 43px;
margin-top:40px;
}
`
export const Profile = styled.p`
display:flex;
justify-content: space-between;
font-weight:500;
font-size:14px;
line-height:18px
@media (min-width: 768px) {
 
}
@media (min-width: 1280px) {

}
`