// Inside the component
import React from 'react';
import styled from 'styled-components';
import { useNavigate, Link } from 'react-router-dom';

const CardContainer = styled.div`
  // CSS styles for the card container
  text-align: center;
  padding-top: 58px;
  margin-left: 500px;
  background-color: blueviolet;
  width: 300px;
  height: 400px;
  /* padding-left: 100px; */
  margin-top: 77px;
}
}

`;

const ButtonContainer = styled.div`
  /* CSS styles for the button container */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayButton = styled.button`
  margin-bottom: 10px; /* Adjust the margin to create space */
`;

const InstructionButton = styled.button`
  /* Add styles if needed */
`;

const Card = () => {
  // ...rest of the code
  const navigate = useNavigate()
  const handlePlayClick = () => {
    // Code to handle play button click
    console.log('Play button clicked');
    // Add your logic to start playing
    navigate('/main')

  };

  const handleInstructionsClick = () => {
    // Code to handle instructions button click
    console.log('Instructions button clicked');
    // Add your logic to display instructions
    navigate('/instruction')
  };
  return (
    <CardContainer className="card">
      <h2>Game</h2>
      <p>Play game here...</p>

      <ButtonContainer className="button-container">
      <PlayButton onClick={handlePlayClick}>Play</PlayButton>
      <InstructionButton onClick={handleInstructionsClick}>Instructions</InstructionButton>
      </ButtonContainer>
      <br></br>
         <br></br>
         <a href="/">Exit</a>
    </CardContainer>
  );
};

export default Card;
