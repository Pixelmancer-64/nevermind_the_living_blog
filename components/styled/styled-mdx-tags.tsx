import styled from "styled-components";
import Link from "next/link";

export const H1 = styled.h1`
  margin-top: 64px;
  margin-bottom: 12px;
  /* color: var(--tertiary); */
`;

export const H2 = styled.h2`
  /* color: var(--tertiary); */
  margin-top: 32px;
  margin-bottom: 8px;
`;

const Image = styled.img`
  margin: auto;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  border-radius: 3px;
  margin: 12px 0;

`;

export const Img = ({ src, alt }: any) => {
  return (
    <>
      <Image src={src} alt={alt} />
      {/* <span>{alt}</span> */}
    </>
  );
};

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
  padding: 8px 0;
`;
