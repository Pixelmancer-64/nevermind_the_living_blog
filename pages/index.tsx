import type { NextPage } from "next";
import React, { useEffect } from "react";
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
      const {meta} = await files(element);
      meta.slug = element.slice(0, -4);
      return meta;
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

        <PopularContent>
          <h2>Projetos</h2>
          <ul>
            <li>
              <Link href="https://www.pixelmancer.com.br/">
                <a>Website</a>
              </Link>
            </li>
            <li>
              <Link href="https://www.pixelmancer.com.br/animations/">
                <a>Animations</a>
              </Link>
            </li>

            <li>
              <Link href="https://pixelmancer.pythonanywhere.com/">
                <a>CEFETalent!</a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Pixelmancer-64/YggdrasilProject">
                <a>Yggdrasil Project</a>
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
