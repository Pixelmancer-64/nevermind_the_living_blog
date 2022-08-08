import Link from "next/link";
import {
  Footer,
  Header,
  LogoWrapper,
  Navbar,
  Ps,
  RandomLinks,
  SocialMediaIcon,
} from "../styled/styled-template";

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

        <button onClick={() => toggleDarkMode()}>TEMA</button>
      </Header>
      
      {children}
      <Footer>
        <Ps><p>Footer</p></Ps>
        <RandomLinks>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="github icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="instagram icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="/">
            <img src="/favicon.png" alt="personal website icon" />
          </SocialMediaIcon>
        </RandomLinks>
      </Footer>
    </>
  );
};

export default Template;
