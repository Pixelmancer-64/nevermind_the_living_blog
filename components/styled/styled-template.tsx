import styled from "styled-components";

export const ThemeSwitcher = styled.button`
  /* border: 3px solid var(--text); */
  color: var(--text);
  /* padding: 4px; */
  width: 32px;
  height: 32px;
  background: var(--theme-icon);
  background-repeat: no-repeat;
  background-position: center;
  /* & img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  } */
`;
export const Header = styled.header`
  display: flex;
  width: 100%;
  margin: 16px auto;
  padding: 0 32px;
  align-items: center;
  color: var(--text);

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 24px;

    ul {
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
  gap: 8px;
  color: var(--text);
  font-weight: bold;
  font-size: 1.5rem;
  & img {
    width: 50px;
    filter: var(--inverse);
  }
  & a {
    color: inherit;
  }
`;

export const Navbar = styled.nav`
  flex-grow: 1;
  vertical-align: middle;
  font-size: 1.2rem;
  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
  }
  a {
    color: inherit;
  }
  a:hover {
    color: var(--primary);
  }
  & ul {
  list-style: none;

  }
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-top: 16px;
  padding: 24px 32px;
  background-color: var(--background-secondary);
`;
export const RandomLinks = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: flex-end;
`;
export const Ps = styled.div`
  display: flex;
`;
export const SocialMediaIcon = styled.a`
  img {
    width: 32px;
    filter: var(--inverse);
  }
`;
