import Grid from "@material-ui/core/Grid";
import React from "react";
import {Button} from "@material-ui/core";
import {PlayArrow, AddOutlined} from "@material-ui/icons";

export const MainMenuScreen = (props) => {

  return (
    <Grid container spacing={1} alignItems="center" justify="center" style={{
      marginTop: 20,
      padding: 0,
      width: '100%',
    }}>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <StartRunMenu setPage={() => props.setPage(4)}/>
      </Grid>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <OpenLeaderBoardMenu setPage={() => props.setPage(3)}/>
      </Grid>
    </Grid>
  )
}

const StartRunMenu = (props) => {
  /*const [anchorEl, open] = React.useState(null);
  const handleClick = event => open(event.currentTarget);
  const handleClose = () => open(null);*/

  return (
    <div>
      <Button
        style={{"marginTop": "5px"}}
        variant="contained"
        size="large"
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        startIcon={<PlayArrow/>}
        /*onClick={handleClick}*/
        onClick={props.setPage}
      >
        start run
      </Button>
      {/*<Menu
        id="Menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ "marginTop": "5px"}}
      >
        <MenuItem onClick={handleClose}>Solo</MenuItem>
        <MenuItem onClick={handleClose}>Challenge friends</MenuItem>
      </Menu>*/}
    </div>
  );
}

const OpenLeaderBoardMenu = (props) => {
  return (
    <>
      <Button
        color="secondary"
        size="large"
        onClick={props.setPage}
        style={{width: '78%'}}
        variant="outlined"
        startIcon={<AddOutlined/>}
      >
        challenge friends
      </Button>
    </>
  )
}