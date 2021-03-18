import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import mario_gif from "../assets/ghost.gif";

const GhostRunner = (props) => {
  return (
    <Grid>
      {props.isChallenging ? <Grid alignItems="center" justify="center" style={{position: 'absolute', top: '20%',left:'47%', zIndex:  '999 !important'}}>Challenging {props.challenger}</Grid> : <Grid alignItems="center" justify="center" style={{position: 'absolute', top: '20%',left:'47%', zIndex:  '999 !important'}}> {props.challenger}</Grid>}
      <Ghost src={mario_gif} alt="runner" />
    </Grid>
  );
};

export default GhostRunner;

const Ghost = styled.img`
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40vw;
  opacity: 0.7;
`;
