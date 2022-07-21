import Link from "next/link";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  flex-grow: 1;
  top: 0;
  max-width: 70em;
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: space-between;
  padding: 2rem;
  color: white;
  font-size: 1.2rem;
  font-family: sans-serif;
  & Link {
    color: inherit;
  }
`;
const LogoWrapper = styled.div``;

const Navbar = styled.nav`
  flex-grow: 1;
  ul {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  background-color: aquamarine;
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
}

const Template = ({ children }: TemplateProps) => {
  return (
    <>
      <Header>
        <LogoWrapper></LogoWrapper>

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
      </Header>
      {children}
      <Footer>
        <Ps>Ps</Ps>
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
