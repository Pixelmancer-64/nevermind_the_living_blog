import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1150px;
  margin: 32px auto;
  color: ${(props) => props.theme.colors.text};
`;

const Content = styled.article`
  flex: 1 1 820px;
  max-width: min(820px, 100%);
  background-color: ${(props) => props.theme.colors.backgroundPost};
  padding: 32px;
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;
`;

const Aside = styled.aside`
  flex: 0 1 250px;
  max-height: calc(55vh);
  margin-left: auto;
  background-color: lightblue;
`;

const H1 = styled.h1`
  font-size: var(--font-size-4xl);
  margin-top: 32px;
  color: ${(props) => props.theme.colors.tertiary};
`;

const H2 = styled.h2`
  font-size: var(--font-size-3xl);
  color: ${(props) => props.theme.colors.tertiary};
  margin-top: 48px;
  margin-bottom: 32px;
`;

const A = ({ href, children }: any) => {
  return (
    <Link href={href} className="anchor-link">
      <a>§ {children} </a>
    </Link>
  );
};

const P = styled.p`
  font-size: var(--font-size-lg);
`;

const components = {
  h1: H1,
  h2: H2,
  p: P,
  a: A,
};

interface PostProps<P = any> {
  children: P;
  meta: {
    date: string;
  };
}

const Post = ({ children, meta }: PostProps) => {
  return (
    <Container>
      <Content>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Content>
      <Aside></Aside>
    </Container>
  );
};

export default Post;
