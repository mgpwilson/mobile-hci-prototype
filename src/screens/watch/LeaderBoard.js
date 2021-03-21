import Grid from "@material-ui/core/Grid";
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import {
  EmojiEvents,
  DirectionsRun,
  Schedule,
  Stars,
} from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { grey } from "@material-ui/core/colors";

import { aaron, alan, emily, jamie, stephan } from "../../assets/avatars";

export const LeaderBoardScreen = (props) => {
  const users = [
    { name: "Emily", avatar: emily },
    { name: "Jamie", avatar: jamie },
    { name: "Stephan", avatar: stephan },
    { name: "Alan", avatar: alan },
    { name: "Aaron", avatar: aaron },
  ];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      spacing={2}
      style={{
        margin: 3,
        paddingRight: 5,
        width: "97%",
      }}
    >
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ marginBottom: 5 }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <EmojiEvents fontVariant="caption" color="secondary" />
          <Typography variant="h5" color="secondary">
            Leaderboard
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            weekly scores
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {users.map((user, index) => {
          const scoreMultiplier = 4 - index;
          return (
            <Paper
              style={{
                margin: 5,
                marginLeft: 10,
                backgroundColor: grey["900"],
              }}
            >
              <Grid container item>
                <Grid container item>
                  <Grid item={2} style={{ padding: 6 }}>
                    <Typography variant="body2" color="textSecondary">
                      #{index + 1}
                    </Typography>
                  </Grid>
                  <Grid item={2}>
                    <Avatar
                      style={{
                        height: 30,
                        width: 30,
                        marginRight: 6,
                        marginTop: 6,
                      }}
                      src={user.avatar}
                    />
                  </Grid>
                  <Grid container item xs={8} alignItems="center" spacing={1}>
                    <Grid item={8} style={{ flexGrow: 1 }}>
                      <Typography variant="h6" style={{ fontSize: 18 }}>
                        {user.name}
                      </Typography>
                    </Grid>
                    <Grid item={4}>
                      <IconButton
                        aria-label="left page"
                        style={{ paddingLeft: 3, fontSize: 13 }}
                        size="small"
                        color="secondary"
                      >
                        <Stars
                          fontVariant="caption"
                          fontSize="small"
                          style={{ fontSize: 15 }}
                        />
                        {scoreMultiplier * 86}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container item>
                  <Grid item={4} style={{ flexGrow: 1 }} />
                  <Grid
                    container
                    item
                    xs={8}
                    style={{ flexGrow: 1, marginLeft: 5 }}
                    alignItems="flex-start"
                    justify="flex-start"
                  >
                    <Grid item={4} style={{ marginLeft: 0 }}>
                      {/*
                    <Typography variant="caption" color="textSecondary">{(scoreMultiplier * 1.1).toFixed(1)} km</Typography>
*/}
                      <DirectionsRun
                        fontVariant="caption"
                        style={{
                          fontSize: 14,
                          marginBottom: -2,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{ marginTop: -2 }}
                      >
                        {(scoreMultiplier * 1.1).toFixed(1)} km
                      </Typography>
                    </Grid>
                    <Grid item={4} style={{ flexGrow: 1, textAlign: "center" }}>
                      <Schedule
                        fontVariant="caption"
                        style={{
                          fontSize: 14,
                          marginBottom: -2,
                          marginRight: 2,
                        }}
                      />
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        style={{ marginTop: -2 }}
                      >
                        {Math.round(scoreMultiplier * 10)} min
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          );
        })}
      </Grid>
    </Grid>
  );
};
