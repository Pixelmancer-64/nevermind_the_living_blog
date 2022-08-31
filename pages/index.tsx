import type { NextPage } from "next";
import React from "react";
import PostsCell from "../components/PostCell";
import Link from "next/link";
import {
  Category,
  CategoryList,
  Container,
  Featured,
  PopularContent,
  Posts,
  TopCategories,
} from "../components/styled/styled-index";

const getStaticProps = async () => {
  const files = require.context("./posts/", false, /.mdx$/);
  const posts = await Promise.all(
    files.keys().map(async (element: string) => {
      const importMDX = await files(element);
      importMDX.meta.slug = element.slice(0, -4);
      return importMDX.meta;
    })
  );
  return {
    props: { posts },
  };
};

const Home: NextPage = ({ posts }: any) => {
  return (
    <Container>
      <Posts>
        <PostsCell posts={posts} />
      </Posts>
      <Featured>
        {/* <TopCategories>
          <h2>Projetos</h2>
          <CategoryList>
            <Category>
              <Link href="/">React</Link>
            </Category>
            <Category>
              <Link href="/">React</Link>
            </Category>
            <Category>
              <Link href="/">React</Link>
            </Category>
            <Category>
              <Link href="/">React</Link>
            </Category>
            <Category>
              <Link href="/">React</Link>
            </Category>
          </CategoryList>
        </TopCategories> */}
        <PopularContent>
          <h2>Projetos</h2>
          <ul>
            <li>
              <Link href="https://sotiris64.github.io/">
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link href="https://sotiris64.github.io/animations/">
                <a>Animations</a>
              </Link>
            </li>
            <li>
              <Link href="https://word-vault.herokuapp.com/">
                <a>WordVault</a>
              </Link>
            </li>
          </ul>
        </PopularContent>
      </Featured>
    </Container>
  );
};

export { getStaticProps };
export default Home;
