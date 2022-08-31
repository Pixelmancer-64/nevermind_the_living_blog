import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-width: 1150px;
  margin: 32px auto;
  color: var(--text);
`;

export const Content = styled.article`
  flex: 1 1 720px;
  max-width: min(720px, 100%);
  padding: 32px;
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;

  @media (min-width: 1100px) {
    margin-left: auto;
  }
`;

export const AsideContainer = styled.aside`
  position: sticky;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 0px;
  padding: 32px;
  flex: 0 1 250px;
  max-height: 55vh;
  margin-left: auto;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const OuterOl = styled.ol`
  display: flex;
  flex-direction: column;
  li {
    line-height: 1.1rem;
  }
  gap: 8px;
  a {
    color: inherit;
  }
`;

export const Summary = styled.span`
  color: var(--tertiary);
  font-size: var(--font-size-2xl);
`;

interface LiProps {
  padding: number;
}

export const Li = styled.li<LiProps>`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-light);
  padding-left: ${(p) => `${(p.padding - 1) * 16}px`};
  opacity: 0.7;
  transition: opacity 400ms ease 0s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;
