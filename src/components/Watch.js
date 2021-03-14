import {
  Box,
  createMuiTheme,
  MuiThemeProvider
} from "@material-ui/core";
import React from "react";
import deepPurple from "@material-ui/core/colors/deepPurple";
import 'roboto-fontface';
import Paper from "@material-ui/core/Paper";
import {MainMenuScreen} from "../screens/watch/MainMenuScreen";
import {HomeScreen} from "../screens/watch/Home";
import {grey} from "@material-ui/core/colors";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import {Time} from "./Time";
import {ActiveRun} from "../screens/watch/ActiveRun";
import {LeaderBoardScreen} from "../screens/watch/LeaderBoard";


const Watch = (props) => {
  return (
    <MuiThemeProvider theme={darkTheme}>
      <Paper
        style={{
          position:  'absolute',
          bottom:  '5px',
          right:  '5px',
          height:  '220px',
          width:  '210px',
          zIndex:  '8 !important',
          display:  'flex',
          flexDirection: 'column',
          backgroundColor:  'black',
          border: '2px solid grey',
          borderRadius: '8px',
        }}
      >
        <WatchScreens coins={props.coins} seconds={props.seconds} km={props.km}/>
      </Paper>
    </MuiThemeProvider>
  );
};

const WatchScreens = (props) => {
  const [page, setPage] = React.useState(1);

  const onChange = (event, page) => {
    setPage(page);
  }

  const SCREENS = {
    "1": {component: HomeScreen, title: "Daily Goal", showTime: true},
    "2": {component: MainMenuScreen, title: "Menu", showTime: true},
    "3": {component: LeaderBoardScreen, title: "Leaderboard", showTime: true},
    "4": {component: ActiveRun, title: "Running", showTime: true},
  }

  const Screen = (props) => {
    const CurrentScreen = SCREENS[props.page.toString()].component;
    return <CurrentScreen coins={props.coins} seconds={props.seconds} km={props.km} setPage={(page) => setPage(page)}/>
  }

  const ScreenHeader = (props) => {
    const screen = SCREENS[props.page.toString()];
    return (
      <Grid container>
        <Grid item={9} style={{flexGrow: 1}}>
          <h5 style={{padding: 2, margin: 0}}>{screen.title}</h5>
        </Grid>
        {screen.showTime &&
          <Grid item={3}>
            <Time variant="caption" style={{padding: 3, margin: 0}}/>
          </Grid>
        }
      </Grid>
    )
  }

  return (
    <Grid container style={{
      margin: 0,
      padding: 0,
      width: '100%',
    }}>
      <ScreenHeader page={page}/>
      <Grid item={12}>
        <Box id="watch-screen" style={{maxHeight: 170, width: 210, overflow: 'auto'}}>
          <Screen page={page} coins={props.coins} seconds={props.seconds} km={props.km} setPage={setPage}/>
        </Box>
      </Grid>
      <Grid container item alignItems="center" justify="center" style={{textAlign: 'center'}}>
        <Pagination
          count={3}
          page={page}
          size="small"
          onChange={(event, page) => onChange(event, page)}
          style={{position: 'fixed', bottom: 10}}
        />
      </Grid>
    </Grid>
  )
}

const darkTheme = createMuiTheme({
  /*palette: {
    primary: {
      main: '#ce93d8',
    },
    secondary: {
      main: '#80deea',
    },
  },*/
  palette: {
    type: "dark",
    primary: deepPurple,
    secondary: {
      main: '#26a69a',
    },
    grey: grey,
  },
});

export default Watch;