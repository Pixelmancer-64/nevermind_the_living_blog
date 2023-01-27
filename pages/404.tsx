import { useEffect, useState } from "react";
import styled from "styled-components";
import { start, animate } from "../components/movingEyes";

interface TotalDarknessProps {
  mouse: {
    x: string;
    y: string;
  };
  isSwitchOn: boolean;

}

interface Canvas_interface {
  start: () => void;
}

const TotalDarkness = styled.div.attrs((props: TotalDarknessProps) => ({
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
    background: ${(props: TotalDarknessProps) =>
      props.isSwitchOn
        ? `radial-gradient(
      circle 12vmax at var(--cursorX) var(--cursorY),
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.5) 80%,
      rgba(0, 0, 0, 1) 100%
    )`
        : "black"};
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
  img {
    width: 64px;
  }

  @keyframes slidein {
    25% {
      transform: rotate(-15deg)
    }

    50% {
      transform: rotate(15deg)

    }

    100% {
      transform: rotate(0deg)
    }
  }

  &:hover {
    animation: 4s infinite ease slidein;
  }
`;



const Canvas = ({ start }: Canvas_interface) => {
  useEffect(start, []);
  return <ReallyCanvas></ReallyCanvas>;
};

const Post = () => {
  const [mouse, setMouse] = useState({ x: '', y: '' });
  const [isSwitchOn, setSwitch] = useState(false);

  useEffect(() => {
    function update(e:{x: number; y: number}) {
      const x = `${e.x}px`;
      const y = `${e.y}px`;
      animate({ x: e.x, y: e.y });
      setMouse({ x, y });
    }

    const header = document.querySelector("header") 
    const footer = document.querySelector("footer")

    if(header && footer) {
      header.remove()
      footer.remove()
    }


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
              <img src="/icons/flashlight.svg" />
            </Switch>
          </Lighthouse>
        )}
      </Container>
    </TotalDarkness>
  );
};

export default Post;
