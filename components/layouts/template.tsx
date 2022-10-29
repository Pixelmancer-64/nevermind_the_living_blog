import Link from "next/link";
import {
  Footer,
  Header,
  LogoWrapper,
  Navbar,
  Ps,
  RandomLinks,
  SocialMediaIcon,
  ThemeSwitcher,
} from "../styled/styled-template";

interface TemplateProps<P = any> {
  children: P;
  toggleDarkMode(): boolean;
}

const Template = ({ children, toggleDarkMode }: TemplateProps) => {
  return (
    <>
      <Header>
        <Link href="/">
          <a>
            <LogoWrapper>
              <img src="/icons/favicon.png" />
              <span>Pixelmancer</span>
            </LogoWrapper>
          </a>
        </Link>

        <Navbar>
          <ul>
            {/* <li>
              <Link href="/">
                <a>latest</a>
              </Link>
            </li> */}
            <li>
              <Link href="/">
                <a>Posts</a>
              </Link>
            </li>
            <li>
              <Link href="https://pixelmancer-64.github.io/animations/">
                <a>Galery</a>
              </Link>
            </li>
          </ul>
        </Navbar>

        <ThemeSwitcher onClick={() => toggleDarkMode()}></ThemeSwitcher>
      </Header>

      {children}
      <Footer>
        <Ps>
          <p>© 2020-present Hugo Billé Martins. All Rights Reserved.</p>
        </Ps>
        <RandomLinks>
          <SocialMediaIcon href="https://github.com/Pixelmancer-64">
            <img src="/icons/github.svg" alt="github icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.instagram.com/_pixelmancer/">
            <img src="/icons/instagram.svg" alt="instagram icon" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/in/hugo-bill%C3%A9-martins-47615222a/">
            <img src="/icons/linkedin.svg" alt="linkedin icon" />
          </SocialMediaIcon>
        </RandomLinks>
      </Footer>
    </>
  );
};

export default Template;
