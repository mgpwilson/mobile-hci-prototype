import styled from "styled-components";

const Watch = (props) => {
  return (
    <Wrapper>
      <div className="watchScreen">
        <span>Watch Screen</span>
      </div>
    </Wrapper>
  );
};

export default Watch;

const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: 2px solid rgba(63, 192, 182, 0.8);
  border-radius: 8px;
  background-color: rgba(63, 192, 182, 0.2);
  height: 200px;
  width: 200px;
  font-size: calc(5px + 2vmin);
  color: rgba(63, 192, 182, 1);
  text-align: center;
  z-index: 7 !important;
`;
