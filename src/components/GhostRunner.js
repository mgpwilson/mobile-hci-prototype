import styled from "styled-components";

import mario_gif from "../assets/mario.gif";

const GhostRunner = () => {
  return <Ghost src={mario_gif} alt="runner" />;
};

export default GhostRunner;

const Ghost = styled.img`
  position: absolute;
  top: 20%;
  left: calc(45% - 4vw);
  width: 8vw;
  opacity: 0.7;
`;
