import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {EmojiEvents, DirectionsRun, Schedule, Stars} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import {grey} from "@material-ui/core/colors";
import {Button} from "@material-ui/core";

const LeaderBoardGlasses = (props) => {
  const users = ["Emily", "Jamie", "Stephan", "Alan", "Aaron"];
  const [isShown1,setIsShown1] = useState(false);
  const [isShown2,setIsShown2] = useState(false);
  const [isShown3,setIsShown3] = useState(false);
  const [isShown4,setIsShown4] = useState(false);
  const [isShown5,setIsShown5] = useState(false);

  const buttonStates = [[isShown1,setIsShown1],[isShown2,setIsShown2],[isShown3,setIsShown3],[isShown4,setIsShown4],[isShown5,setIsShown5]];

  return (
    <Grid container justify="center" alignItems="center" spacing={2} style={{
    margin: 3,
    paddingRight: 5,
    paddingTop: 200,
    width: '97%',
    zIndex: 999,
    }}>
      <Grid container alignItems="center" justify="center" style={{marginBottom: 5, zIndex: 999 }}>
        <Grid item xs={12} style={{textAlign: 'center'}}>
          <EmojiEvents fontVariant="caption" color="secondary"/>
          <Typography variant="h5" color="secondary">Leaderboard</Typography>
          <Typography variant="subtitle2" color="secondary">Latest Score</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {users.map(value => {
          const scoreMultiplier = 4 - users.indexOf(value);
          const avatarPath = "/avatars/Avatar" + value + ".png";
          const buttonState = buttonStates[users.indexOf(value)][0]
          const setButtonState = buttonStates[users.indexOf(value)][1]
          return (
            <Button style={{margin: 10, marginLeft: 40, backgroundColor: grey['400'], width: '100%', zIndex: 999,}}onMouseEnter={() => setButtonState(true)}
            onMouseLeave={() => setButtonState(false)}
            onClick={function(){props.setShowLeaderboard(false);}}>
              <Grid container item >
                <Grid container alignItems="center" justify="center" item>
                  <Grid item={2} style={{padding: 6}}>
                    <Typography variant="body2" color="textSecondary">#{users.indexOf(value) +1}</Typography>
                  </Grid>
                  <Grid item={2}>
                    <Avatar style={{height: 30, width: 30, marginRight: 6, marginTop: 6}} src={avatarPath}/>
                  </Grid>
                  <Grid container item xs={8} alignItems="center" spacing={1}>
                    <Grid item={8} style={{flexGrow: 1}}>
                      <Typography variant="h6" style={{fontSize: 18}}>
                        {buttonState ? "CHALLENGE" : ""} {value}
                      </Typography>
                    </Grid>
                    <Grid item={4}>
                      <IconButton aria-label="left page" style={{paddingLeft: 3, fontSize: 13}}
                                  size="small"
                                  color="secondary"
                      >
                        <Stars fontVariant="caption" fontSize="small" style={{fontSize: 15}}/>{(scoreMultiplier * 86)}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid item={4} style={{flexGrow: 1}}/>
                  <Grid container item xs={8} style={{flexGrow: 1, marginLeft: 5}} alignItems="flex-start" justify="flex-start">
                    <Grid item={4} style={{marginLeft: 0}}>
                      {/*
                    <Typography variant="caption" color="textSecondary">{(scoreMultiplier * 1.1).toFixed(1)} km</Typography>
*/}
                      <DirectionsRun fontVariant="caption" style={{fontSize: 14, marginBottom: -2, marginRight: 2}}/>
                      <Typography variant="caption" color="textSecondary" style={{marginTop: -2}}>
                        {(scoreMultiplier * 1.1).toFixed(1)} km
                      </Typography>
                    </Grid>
                    <Grid item={4} style={{flexGrow: 1, textAlign: 'center'}}>
                      <Schedule fontVariant="caption" style={{fontSize: 14, marginBottom: -2, marginRight: 2}}/>
                      <Typography variant="caption" color="textSecondary" style={{marginTop: -2}}>{Math.round(scoreMultiplier * 10)} min</Typography>
                    </Grid>
                  </Grid>

                </Grid>
              </Grid>
            </Button>
          )
        })}
      </Grid>
    </Grid>
  )
  
}

export default LeaderBoardGlasses;