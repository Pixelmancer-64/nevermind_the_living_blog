import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  function toggle() {
    setValue((value: boolean) => !value);
  }

  return [value, toggle];
}

const Header = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  margin: 16px auto;
  padding: 0 32px;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
`;
const LogoWrapper = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  gap: 8px;
  & img {
    filter: ${(props) => {
      if (props.theme.name == "dark") return "brightness(0) invert(1)";
      return "brightness(0) invert(0)";
    }};
  }
  & span {
    font-size: var(--font-size-3xl);
  }
`;

const Navbar = styled.nav`
  flex-grow: 1;
  vertical-align: middle;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: inherit;
  }
  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 16px 0;
  padding: 0 32px;
  color: ${(props) => props.theme.colors.text};
`;
const RandomLinks = styled.div`
  display: flex;
  justify-content: center;
`;
const Ps = styled.div``;
const SocialMediaIcon = styled.a`
  img {
    width: 4rem;
  }
`;

interface TemplateProps<P = any> {
  children: P;
  toggleDarkMode(): boolean;
}

const Template = ({ children, toggleDarkMode }: TemplateProps) => {
  return (
    <>
      <Header>
        <LogoWrapper>
          <img src="/favicon.png"></img>
          <span>Lorem</span>
        </LogoWrapper>

        <Navbar>
          <ul>
            <li>
              <Link href="/">
                <a>latest</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Galery</a>
              </Link>
            </li>
          </ul>
        </Navbar>
        <button onClick={() => toggleDarkMode()}>BORA</button>
      </Header>
      {children}
      <Footer>
        <Ps>Footer</Ps>
        <RandomLinks>
          <SocialMediaIcon href="/">
            <img src="/vercel.svg" alt="github icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/vercel.svg" alt="instagram icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/vercel.svg" alt="personal website icon" />
          </SocialMediaIcon>
        </RandomLinks>
      </Footer>
    </>
  );
};

export default Template;
