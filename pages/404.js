import { useEffect, useState } from "react";
import styled from "styled-components";
import { start, animate } from "../components/movingEyes";

const TotalDarkness = styled.div.attrs((props) => ({
  style: {
    "--cursorX": props.mouse.x,
    "--cursorY": props.mouse.y,
  },
}))`
  cursor: ${(props) => (props.isSwitchOn ? "none" : "default")};

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: fixed;
    background: ${(props) => (props.isSwitchOn ? `radial-gradient(
      circle 12vmax at var(--cursorX) var(--cursorY),
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 1) 100%
    )` : "black")};

  }
`;
const Container = styled.main`
  background-color: red;
`;

const ReallyCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: black;
`;

const Lighthouse = styled.div`
  position: absolute;
  font-size: var(--font-size-3xl);
  z-index: 99;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    color: white;
  }
  h2 {
    color: white;
  }
`;

const Switch = styled.button`
  img{width: 64px}
`;

const Canvas = ({ start }) => {
  useEffect(start, []);
  return <ReallyCanvas></ReallyCanvas>;
};

const Post = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isSwitchOn, setSwitch] = useState(false);

  useEffect(() => {
    function update(e) {
      const x = `${e.x}px`;
      const y = `${e.y}px`;
      animate({ x: e.x, y: e.y });
      setMouse({ x, y });
    }

    try {
      document.querySelector("header").remove();
      document.querySelector("footer").remove();
    } catch {}

    document.addEventListener("mousemove", update);
  }, []);

  return (
    <TotalDarkness isSwitchOn={isSwitchOn} mouse={mouse}>
      <Container>
        <Canvas start={start}></Canvas>
        {isSwitchOn ? (
          ""
        ) : (
          <Lighthouse>
            <h1>You seen kind of lost</h1>
            <h2>What about a flashlight?</h2>
            <Switch
              onClick={() => {
                setSwitch(true);
              }}
            >
              <img src="/iconmonstr-flashlight-5.svg"/>
            </Switch>
          </Lighthouse>
        )}
      </Container>
    </TotalDarkness>
  );
};

export default Post;
