import React from 'react'
import styled from "styled-components"
const Container = styled.div`
height:100%;

background:${({theme})=>theme.bg};
padding:30px 30px;
padiing-bottom:50px;
display:flex;
flex-direction:column;
align-items:center;
gap:20px;
@media(max-width:768px){
    padiing:6px 10px;
}
`

const Headline = styled.div`
font-size:34px;
font-weight:500;
color:${({theme})=>theme.text_primary};
display:flex;
align-items:center;
flex-direction:column;
@medai(max-width:600px){
    font-size:22px;
}

`

const Span = styled.div`
font-size:34px;
font-weight:800;
color:${({theme})=>theme.primary};

`
const Home = () => {
  return (
   <Container>

    <Headline>Explore popular posts in community!</Headline>
    <Span>Generated with AI</Span>
   </Container>
  )
}

export default Home