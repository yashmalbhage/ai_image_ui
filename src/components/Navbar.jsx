import React from 'react'
import Buttonn from './button'
import styled from 'styled-components'
import {AddRounded } from "@mui/icons-material"
import {useNavigate} from "react-router-dom";


const Container = styled.div`
flex:1;
background:${({theme})=>theme.Navbar};
color:${({theme})=>theme.tex_primary};
font-weight:bold;
fonr-size:22px;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 0 10px rgba(0,0,0,0.15);

`;

const Navbar = () => {
    const navigate = useNavigate();

  return (
    <Container>
        GAN-AI
        <Buttonn text= " Create Post" leftIcon={<AddRounded/>} onClick={()=>navigate('/Create')}/>
    </Container>
  )
}

export default Navbar