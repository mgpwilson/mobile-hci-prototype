import Grid from "@material-ui/core/Grid";
import React from "react";
import {Button, Menu, MenuItem} from "@material-ui/core";

export const MainMenuScreen = () => {
  return (
    <Grid container spacing={1} style={{
      margin: 0,
      padding: 0,
      width: '100%',
    }}>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <StartRunMenu/>
      </Grid>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <OpenLeaderBoardMenu/>
      </Grid>
    </Grid>
  )
}

const StartRunMenu = () => {
  const [anchorEl, open] = React.useState(null);
  const handleClick = event => {
    open(event.currentTarget);
  };

  const handleClose = () => {
    open(null);
  };

  return (
    <div>
      <Button
        style={{"marginTop": "5px"}}
        variant="contained"
        size="large"
        color="primary"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}>
        Start run
      </Button>
      <Menu
        id="Menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{"marginTop": "5px"}}
      >
        <MenuItem onClick={handleClose}>Solo</MenuItem>
        <MenuItem onClick={handleClose}>Challenge friends</MenuItem>
      </Menu>
    </div>
  );
}

const OpenLeaderBoardMenu = () => {
  return (
    <>
      <Button color="secondary" size="medium">
        leaderboard
      </Button>
    </>
  )
}