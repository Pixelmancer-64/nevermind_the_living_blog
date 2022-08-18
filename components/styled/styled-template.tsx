import styled from "styled-components";

export const ThemeSwitcher = styled.button`
  border: 3px solid ${(props) => props.theme.colors.text};
  color: ${(props) => props.theme.colors.text};
  padding: 4px;
`
export const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 16px auto;
  padding: 0 32px;
  align-items: center;
  color: ${(props) => props.theme.colors.text};
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);

  @media(max-width: 700px) {
    flex-direction: column;
    gap: 24px;

    ul{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
}
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  & img {
    width: 50px;
    filter: ${(props) => {
      if (props.theme.name == "dark") return "brightness(0) invert(1)";
      return "brightness(0) invert(0)";
    }};
  }
  & span {
    font-size: var(--font-size-3xl);
  }
  
`;

export const Navbar = styled.nav`
  flex-grow: 1;
  vertical-align: middle;
  ul {
    display: flex;
    justify-content: space-around;
  }
  a {
    color: inherit;
  }
  a:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 16px;
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.background.secondary};
`;
export const RandomLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

`;
export const Ps = styled.div`
  display: flex;
`;
export const SocialMediaIcon = styled.a`
  img {
    width: 32px;
  }
`;
