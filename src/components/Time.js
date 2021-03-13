import * as React from "react";
import Typography from "@material-ui/core/Typography";


export const Time = (props) => {
  const getTimeNow = () => {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() /*+ ":" + currentDate.getSeconds()*/;
    return (currentTime);
  }

  const [time, setTime] = React.useState(getTimeNow());

  React.useEffect(() => {
    const setCurrentTime = () => setTime(getTimeNow());
    const updateTime = setInterval(setCurrentTime, 1000);
    return function cleanup() {
      clearInterval(updateTime);
    }
  }, [time]);

  return (
    <Typography variant={props.variant}>
      {time}
    </Typography>
  )
}