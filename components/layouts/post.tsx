import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";

const Container = styled.main`
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1100px;
`;

const H1 = styled.h1`
  color: red;
`;

const components = {
  h1: H1,
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
      <MDXProvider components={components}>{children}</MDXProvider>
    </Container>
  );
};

export default Post;
