import React, {useEffect} from 'react';


export const useMovementKeyPress = (start, duration, target) => {
  //TODO pass this as param
  const [move, setMove] = React.useState({
    targetMovement: target,
    type: null,
    time: null,
    isTargetMovement: false,
    success: false,
  });

  useEffect(() => {
    function onKeyup(e) {
      const MOVEMENTS = {j: 'jump', d: 'duck', h: 'hit'};
      console.log(e.key);
      if(Object.keys(MOVEMENTS).includes(e.key)) {
        setMove({
          targetMovement: target,
          type: MOVEMENTS[e.key],
          time: (new Date()).getTime(),
          isTargetMovement: MOVEMENTS[e.key] === move.targetMovement,
          success: MOVEMENTS[e.key] === move.targetMovement && start != null,
        })
      }
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, [move, start, duration, target]);

  //TODO decide if I want to set feedback message here
  return move;
}

export const useMovementCountdown = (start, duration, lastMovement) => {
  const [countdown, setCountdown] = React.useState({
    start: start,
    end: (start !== null ? start + duration : null),
    now: start,
    remainingSeconds: 0,
    success: false
  });

  const [now, setNow] = React.useState(null);

  useEffect(() => {
    //let now = (new Date()).getTime();
    let end = start !== null ? start + duration : now;
    let remaining = now !== null && now < end ? Math.round((end - now) / 1000) : null;

    const updateCountdown = () => {
      setCountdown({
        start: start,
        end: end,
        now: now,
        remainingSeconds: remaining,
        success: lastMovement.success,
      });
      setNow(now < end + 1000 ? (new Date()).getTime() : null);
    }
    if(now < end) setTimeout(() => updateCountdown(), 500);
    else if(now !== null && now < end + 1000) {
      updateCountdown();
      setNow(null);
    }
  }, [countdown, now, start, duration, lastMovement]);

  return countdown;
}

export const useMovementFeedbackMessage = (move, countdown, target) => {
  const [message, setMessage] = React.useState(null);

  useEffect(() => {
    if(target){
      if(!countdown.success){
        let remaining = countdown.remainingSeconds !== null ? countdown.remainingSeconds : "";
        setMessage(target.toUpperCase() + " in " + remaining + "...");
      }
      else if(countdown.success) setMessage("SUCCESS");
    }
    else if(!target && move.type !== null && !move.success) setMessage("You " + move.type);
  }, [message, move, countdown, target]);

  return message;
}

export const MovementHandler = (props) => {
  const [start, setStart] = React.useState(null);
  const [duration, setDuration] = React.useState(null);
  const [target, setTarget] = React.useState(null);
  const move = useMovementKeyPress(start, duration, target);
  const countdown = useMovementCountdown(start, duration, move);
  const message = useMovementFeedbackMessage(move, countdown, target); //Doesn't listen when countdown not active

  const startMoveCountdown = (targetMovement) => {
    let now = (new Date()).getTime();
    setTarget(targetMovement);
    setStart(now);
    setDuration(5000);
    setTimeout(() => {
      setStart(null);
      setDuration(null);
      setTarget(null);
    }, 7000);
  }

  const childrenWithProps = React.Children.map(
    props.children, (child, i) => {
      return React.cloneElement(child, {
        startCountdown: () => startMoveCountdown("jump"),
        countdown: countdown,
        move: move,
        feedbackMessage: message,
      })
    }
  )

  //TODO children? so that can display whatever inside
  return (
    <div className="movement">
      {childrenWithProps}
    </div>
  )
}

export const Movement = (props) => {
  return (
    <MovementHandler>
      <MovementButton/>
      {/*<MovementDebugging/>*/}
      <MovementFeedback/>
    </MovementHandler>
  )

}

export const MovementButton = (props) => {
  return (
    <button onClick={() => props.startCountdown('jump')}>Movement</button>
  )
}

export const MovementFeedback = (props) => {
  return (
    <div><p>{props.feedbackMessage}</p></div>
  )
}

export const MovementDebugging = (props) => {
  return (
    <div>
      <p>{JSON.stringify(props.countdown)}</p>
      {<p>{JSON.stringify(props.move)}</p>}
    </div>
  )
}