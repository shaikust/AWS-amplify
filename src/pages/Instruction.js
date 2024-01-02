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

const Instruction = () => {
  // ...rest of the code
  const navigate = useNavigate()
  const handlePlayClick = () => {
    // Code to handle play button click
    console.log('Play button clicked');
    // Add your logic to start playing
    navigate('/screen1')

  };

  const handleInstructionsClick = () => {
    // Code to handle instructions button click
    console.log('Instructions button clicked');
    // Add your logic to display instructions
    navigate('/screen1')
  };
  return (
    <CardContainer className="card">
      <h2>Instructions</h2>
      <p>Navigate the T-Rex by jumping over the obstacles that appear on the screen.</p>
      <p>The game speeds up the longer you survive, so be prepared for faster obstacles</p>
      <p>The score increases the farther you run without hitting an obstacle.</p>
      <p>Enjoy the game and challenge yourself to beat your high score!</p>

      <ButtonContainer className="button-container">
      {/* <PlayButton onClick={handlePlayClick}>Play</PlayButton> */}
      <InstructionButton onClick={handleInstructionsClick}>Back</InstructionButton>
      </ButtonContainer>
    </CardContainer>
  );
};

export default Instruction;
