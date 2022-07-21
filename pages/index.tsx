import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import PostsCell from "../components/PostCell";
import Link from "next/link";

export async function getStaticProps() {
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
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3vh 3vw;
  background-color: #0e141b;
  column-gap: 12rem;
`;
const Posts = styled.div``;
const Featured = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
const TopCategories = styled.div`
  color: ${(props) => props.theme.colors.text};
`;
const PopularContent = styled.div`
  color: ${(props) => props.theme.colors.text};
  flex-grow: 1;
`;
const CategoryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Category = styled.li`
  & a {
    color: inherit;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 15px;
    padding: 3px 12px;
    font-size: 13px;
    margin-right: 8px;
    margin-bottom: 8px;
    display: inline-block;
    text-decoration: none;
  }
`;

const Home: NextPage = ({ posts }) => {
  return (
    <Container>
      <Posts>
        <PostsCell posts={posts} />
      </Posts>
      <Featured>
        <TopCategories>
          <h2>Top Categories</h2>
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
        </TopCategories>
        <PopularContent>
          <h2>Popular content</h2>
          <ul>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
            <li>React</li>
          </ul>
        </PopularContent>
      </Featured>
    </Container>
  );
};

export default Home;
