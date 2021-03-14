import * as React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import {Pause, PlayArrow} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import {TimeElapsed} from "./Time";


export const ActivityRing = (props) => {
  const value = props.km/5*100;

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" value={value} color="secondary" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection='column'
        style={{marginTop: -5}}
      >
        {props.screen === "ActiveRun" ?
          <>
            <IconButton aria-label="left page" style={{margin: 0, padding: 0, fontSize: 15}}
                        size="small"
                        onClick={props.startRun}
            >
              {props.active ?
                <Pause color="secondary" style={{fontSize: 40}}/> : <PlayArrow color="secondary" style={{fontSize: 40}}/>
              }
            </IconButton>
            <TimeElapsed variant="subtitle2" seconds={props.seconds} color="secondary"/>
          </>
          :
          <>
            <Typography variant="h5" component="div" color="textPrimary">{`${Math.round(
              value
            )}%`}</Typography>
            <Typography variant="caption">daily goal</Typography>
          </>
        }
      </Box>
    </Box>
  )
}