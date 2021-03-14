import Grid from "@material-ui/core/Grid";
import React from "react";
import {LongDate, TimeElapsed} from "../../components/Time";
import {ActivityRing} from "../../components/ActivityRings";
import {EmojiEvents, DirectionsRun, Schedule, Stars} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export const HomeScreen = (props) => {
  const km=4.8;
  const seconds=1140;
  const coins=970;

  return (
    <Grid container justify="center" alignItems="center" spacing={1} style={{
      margin: 0,
      padding: 0,
      width: '100%',
    }}>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <Grid item>
          <LongDate variant="caption" color="textSecondary"/>
        </Grid>
        <Grid item>
          <IconButton aria-label="left page" style={{marginTop: -2, fontSize: 15}}
                      size="small"
                      color="secondary"
          >
            <EmojiEvents fontVariant="caption" fontSize="small"/> #4
          </IconButton>
        </Grid>
      </Grid>
      <Grid container item={12} alignItems="center" justify="center">
        <Grid item={6} style={{textAlign: 'center'}}>
          <ActivityRing size={80} color="primary" km={km} seconds={seconds}/>
        </Grid>
        <Grid item={4} style={{textAlign: 'center', marginLeft: 10}}>
          <Grid item>
            <IconButton aria-label="left page" style={{marginTop: 0, fontSize: 15, color: "grey"}}
                        size="small"
            >
              <DirectionsRun fontVariant="caption" fontSize="small"/> {km}km
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="left page" style={{marginTop: 0, fontSize: 13, color: "grey"}}
                        size="small"
            >
              <Schedule fontVariant="caption" fontSize="small"/>
              <TimeElapsed variant="caption" seconds={seconds}/>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton aria-label="left page" style={{marginTop: 0, fontSize: 15, color: "grey"}}
                        size="small"
            >
              <Stars fontVariant="caption" fontSize="small"/> {coins}
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}