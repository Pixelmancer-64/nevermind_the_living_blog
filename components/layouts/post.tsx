import { MDXProvider } from "@mdx-js/react";

interface PostProps<P = any> {
  children: P;
  meta: {
    date: string;
  };
}

const Post = ({ children, meta }: PostProps) => {
  return (
    <main>
      <MDXProvider>{children}</MDXProvider>
    </main>
  );
};

export default Post;
