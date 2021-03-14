import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import {DirectionsRun, EmojiEvents, Stars} from "@material-ui/icons";
import {ActivityRing} from "../../components/ActivityRings";
import React from "react";
import {useStickyState} from "../../hooks/useStickyState";


export const ActiveRun = (props) => {
  const [active, setActive] = useStickyState(false);
  const [startingSeconds, setStartingSeconds] = useStickyState(0, "startingSeconds");
  const [startingKm, setStartingKm] = useStickyState(0, "startingKm");
  const [startingCoins, setStartingCoins] = useStickyState(0, "startingCoins");

  const currentSeconds = active ? props.seconds - startingSeconds : 0;
  const currentKm = active ? props.km - startingKm : 0;
  const currentCoins = active ? props.coins - startingCoins : 0;

  const startLocal = () => {
    setActive(!active);
    setStartingSeconds(props.seconds);
    setStartingKm(props.km);
    setStartingCoins(props.coins);
  }

  return (
    <Grid container justify="center" alignItems="center" spacing={1} style={{
      margin: 0,
      padding: 0,
      width: '100%',
    }}>
      <Grid item xs={12} style={{textAlign: 'center'}}>
        <Grid item>
          <IconButton aria-label="left page" style={{marginTop: -2, fontSize: 15}}
                      size="small"
          >
            <EmojiEvents fontVariant="caption" fontSize="small"/> #4
          </IconButton>
        </Grid>
      </Grid>
      <Grid item={12} style={{textAlign: 'center'}}>
        <ActivityRing
          size={80}
          active={active}
          seconds={currentSeconds}
          startRun={startLocal}
          screen="ActiveRun"
        />
      </Grid>
      <Grid container item={12} style={{marginTop: -10}}>
        <Grid item={6} style={{flexGrow: 1, textAlign: 'center'}}>
          <IconButton aria-label="left page" style={{fontSize: 18, color: "grey"}}
                      size="medium"
          >
            <DirectionsRun fontVariant="caption" fontSize="small" style={{marginRight: 2}}/>
            {parseFloat(currentKm).toFixed(1)}km
          </IconButton>
        </Grid>
        <Grid item={6} style={{flexGrow: 1, textAlign: 'center'}}>
          <IconButton aria-label="left page" style={{fontSize: 18, color: "grey"}}
                      size="medium"
          >
            <Stars fontVariant="caption" fontSize="small" style={{marginRight: 2}}/> {currentCoins}
          </IconButton>
        </Grid>
        {/*<Grid item={4}>
          <IconButton aria-label="left page" style={{marginTop: 0, fontSize: 13, color: "grey"}}
                      size="small"
          >
            <Schedule fontVariant="caption" fontSize="small"/>
            <TimeElapsed variant="caption" seconds={props.seconds}/>
          </IconButton>
        </Grid>*/}
      </Grid>
    </Grid>
  )
}