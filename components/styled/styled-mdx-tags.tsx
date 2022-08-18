import styled from "styled-components";
import Link from "next/link";

export const H1 = styled.h1`
  font-size: var(--font-size-4xl);
  margin-top: 32px;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const H2 = styled.h2`
  font-size: var(--font-size-3xl);
  color: ${(props) => props.theme.colors.tertiary};
  margin-top: 48px;
  margin-bottom: 32px;
`;

export const HeadingH1 = ({ children }: any) => {
  return <H1 id={children}>{children}</H1>;
};

export const HeadingH2 = ({ children }: any) => {
  return <H2 id={children}>{children}</H2>;
};

export const A = ({ href, children }: any) => {
  return (
    <Link href={href}>
      <a>§{children}</a>
    </Link>
  );
};

export const P = styled.p`
  font-size: var(--font-size-lg);
`;