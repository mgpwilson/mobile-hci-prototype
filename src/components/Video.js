import * as React from "react";
import styled from "styled-components";

const Video = (props) => {
  return (
    <VideoContainer>
      <iframe
        title="RunningVideo"
        src="https://www.youtube.com/embed/K_K_EHDaSew?controls=0&autoplay=1&mute=1"
        frameBorder="0"
        allow="autoplay;"
        allowFullScreen
      ></iframe>
    </VideoContainer>
  );
};

export default Video;

const VideoContainer = styled.div`
  //   position: absolute;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;

  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
