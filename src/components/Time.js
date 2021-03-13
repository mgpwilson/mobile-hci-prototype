import * as React from "react";
import Typography from "@material-ui/core/Typography";

export function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}


export const Time = (props) => {
  const getTimeNow = () => {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + pad(currentDate.getMinutes(), 2) /*+ ":" + currentDate.getSeconds()*/;
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
    <Typography variant={props.variant} {...props}>
      {time}
    </Typography>
  )
}

export const Weekday = props => {
  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const now = new Date();
  const weekday = weekdays[now.getDay()];

  return (
    <Typography variant={props.variant} {...props}>
      {weekday}
    </Typography>
  )
}

export const ShortDate = props => {
  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Ded"];
  let current_datetime = new Date();
  let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getDate();
  console.log(formatted_date);

  return (
    <Typography variant={props.variant} {...props}>
      {formatted_date}
    </Typography>
  )
}

export const LongDate = props => {
  const now = new Date();
  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  const weekday = weekdays[now.getDay()];

  const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Ded"];
  let formatted_date = months[now.getMonth()] + " " + now.getDate();

  return (
    <Typography variant={props.variant} {...props}>
      {weekday + " " + formatted_date}
    </Typography>
  )
}