import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useResizeObserver from "../hooks/useResizeObserver";
import { Widgets } from "./Widgets";
import glasses_png from "../assets/glasses.png";

const Glasses = ({ seconds, km, coins }) => {
  const [imageRef, { contentRect }, imageNode] = useResizeObserver();
  const [widthFactor, setWidthFactor] = useState(null);
  const [heightFactor, setHeightFactor] = useState(null);

  useEffect(() => {
    if (imageNode && contentRect) {
      var floorplanImageWidth = imageNode.naturalWidth;
      var floorplanImageHeight = imageNode.naturalHeight;

      setWidthFactor(contentRect.width / floorplanImageWidth);
      setHeightFactor(contentRect.height / floorplanImageHeight);
    }
  }, [contentRect, imageNode]);

  return (
    <Wrapper>
      <GlassesPNG src={glasses_png} ref={imageRef} />
      <Widgets
        widthFactor={widthFactor}
        heightFactor={heightFactor}
        seconds={seconds}
        km={km}
        coins={coins}
      />
    </Wrapper>
  );
};

export default Glasses;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;

const GlassesPNG = styled.img`
  position: absolute;
  top: 40px;
  width: 100%;
  z-index: 6 !important;
  opacity: 0.2; /* Maybe remove this? */
`;
