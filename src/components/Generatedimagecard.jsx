import React from 'react'
import styled from 'styled-components'
import CircularProgress from '@mui/material/CircularProgress';
const Container = styled.div`
  flex:1;
  padding:16px;
  border:2px dashed ${({theme})=>theme.yellow};
  color:${({theme})=>theme.arrow + 80};
  border-radius:20px;

  
  `
  const Image = styled.div`
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:24px;
  background:${({theme})=>theme.black + 50};
  
  `


const Generatedimagecard = ({src, loading}) => {

  return (
    <Container>
        {
            loading ? <>Generating image using unconditional GAN...                 <CircularProgress style={{color:'inherit', width:'24px', height:'34px'}}/>
            </>:(
                <>
                    {
                        src ? <Image ><img src={src} alt="" style={{width:'100%'}}/></Image>:<>Write a prompt to generate the image</>
                    }
                
                </>
            )
        }
    </Container>
    
  )
}

export default Generatedimagecard