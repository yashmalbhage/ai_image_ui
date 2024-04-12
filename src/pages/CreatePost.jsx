import React, { useState } from 'react';
import styled from "styled-components";
import Genform from '../components/Genform';
import Generatedimagecard from '../components/Generatedimagecard';
import FileSaver from 'file-saver';
// import { query } from './api'; // Import the query function
import { CircularProgress } from "@mui/material";

const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.bg};
  padding: 30px 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  @media(max-width: 768px) {
    padding: 6px 10px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  width: 100%;
  gap: 8%;
  display: flex;
  justify-content: center;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;
const query = async (data) => {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
    {
      headers: { Authorization: "Bearer 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",
      "Content-Type": "application/json" // Set Content-Type header
    
    },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.blob();
  return result;
};

const CreatePost = () => {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (formData) => {
    setLoading(true);
    try {
      const response = await query(formData); // Call the query function with form data
      setImageData(URL.createObjectURL(response)); // Assuming response is Blob data
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  const downloadImage = (imageData) => {
    FileSaver.saveAs(imageData, `download.jpg`);
  };

  return (
    <Container>
      <Wrapper>
        <Genform fetchData={fetchData} loading={loading} src={imageData}/> {/* Pass fetchData function as prop */}
        <Generatedimagecard src={imageData} loading={loading} error={error} />
     
      </Wrapper>
      {/* <button onClick={downloadImage} disabled={!imageData}>
        Download Image
      </button> */}
    </Container>
  );
}

export default CreatePost;
