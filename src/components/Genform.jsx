import React, { useState } from 'react';
import styled from "styled-components";
import TextInput from './textinput';
import Buttonn from './button';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';

const Form = styled.div`
  flex: 1;
  display: flex;
  padding: 16px 20px;
  flex-direction: column;
  gap: 5%;
  justify-content: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
`;

const Action = styled.div`
  display: flex;
  gap: 8px;
`;

const Genform = ({ fetchData, loading, src }) => {
  const [formData, setFormData] = useState({
    name: "",
    prompt: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerate = () => {
    fetchData(formData.prompt); // Call fetchData function with form data
  };

  const handlePost = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/saveImageData', {
        method: 'POST',
        mode:'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: formData.name,
          prompt: formData.prompt,
          imageUrl:src
          // Assuming you have an imageUrl or some other necessary data for image generation
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log('Image data saved successfully');
    } catch (error) {
      console.error('Error saving image data:', error);
    }
  };

  return (
    <Form>
      <Top>
        <Title>Generate Image with Prompt</Title>
        <Desc>Enter your prompt</Desc>
      </Top>
      <Body>
        <TextInput
          placeholder="Enter your name..."
          label="Author"
          name="name"
          value={formData.name}
          handleChange={handleChange}
        />
        <TextInput
          placeholder="Enter the image prompt..."
          label="Image Prompt"
          name="prompt"
          value={formData.prompt}
          handleChange={handleChange}
          textArea
          rows={8}
        />
      </Body>
      <Action>
        <Buttonn text="Generate" leftIcon={<AutoAwesome />} onClick={handleGenerate} />
      </Action>
      {/* <Action>
        <Buttonn text="Post image" flex type="secondary" leftIcon={<CreateRounded />} onClick={handlePost}/>
      </Action> */}
    </Form>
  );
}

export default Genform;
