import Grid from "@material-ui/core/Grid";
import React from "react";
import {LongDate} from "../../components/Time";
import {ActivityRing} from "../../components/ActivityRings";
import {EmojiEvents, DirectionsRun, Schedule, Stars} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export const HomeScreen = (props) => {
  return (
    <Grid container justify="center" alignItems="center" spacing={1} style={{
      margin: 0,
      padding: 0,
      width: '100%',
    }}>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        {/*<Weekday variant="caption" color="textSecondary"/>
        <ShortDate color="secondary"/>*/}
        <Grid item>
          <LongDate variant="caption" color="textSecondary"/>
        </Grid>
        <Grid item>
          <IconButton aria-label="left page" style={{marginTop: -2, fontSize: 15}}
                      onClick={() => props.navigate('Home')}
                      color="secondary"
                      size="small"
          >
            <EmojiEvents fontVariant="caption" fontSize="small"/> #3
          </IconButton>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        {/*TODO make update progress*/}
        <ActivityRing size={80} color="primary"/>
      </Grid>
      <Grid container item={12} style={{marginTop: -10}}>
        <Grid item={4} style={{flexGrow: 1}}>
          <IconButton aria-label="left page" style={{marginTop: -2, fontSize: 15, color: "grey"}}
                      onClick={() => props.navigate('Home')}
                      color="disabled"
                      size="small"
          >
            <DirectionsRun fontVariant="caption" fontSize="small"/> 12km
          </IconButton>
        </Grid>
        <Grid item={4} style={{flexGrow: 1}}>
          <IconButton aria-label="left page" style={{marginTop: 0, fontSize: 15, color: "grey"}}
                      onClick={() => props.navigate('Home')}
                      size="small"
          >
            <Stars fontVariant="caption" fontSize="small"/> 50
          </IconButton>
        </Grid>
        <Grid item={4}>
          <IconButton aria-label="left page" style={{marginTop: 0, padding: 0, fontSize: 13, color: "grey"}}
                      onClick={() => props.navigate('Home')}
                      color="info"
                      size="small"
          >
            <Schedule fontVariant="caption" fontSize="small"/> 24min
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  )
}