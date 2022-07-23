import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1150px;
  margin: 32px auto;
`;

const Content = styled.article`
  flex: 1 1 806.4px;
  max-width: min(806.4px, 100%);
  /* box-shadow: 0 0 0 1px rgba(23,23,23,.1); */
  background-color: #FFFFFF;
  padding: 48px 32px;

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
  font-size: var(--font-size-3xl);
  margin-top: 32px;
  color: ${(props) => props.theme.colors.tertiary};
`;

const H2 = styled.h2`
  color: ${(props) => props.theme.colors.tertiary};
  margin-top: 48px;
  margin-bottom: 32px;
`;

const components = {
  h1: H1,
  h2: H2,
  // …
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
