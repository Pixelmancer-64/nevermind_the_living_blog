import type { NextPage } from "next";
import React from "react";
import styled from "styled-components";
import PostsCell from "../components/PostCell";

const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3vh 3vw;
  background-color: #0e141b;
`;
const Posts = styled.div``;
const Featured = styled.div`
  background-color: #f2eded;
`;

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Posts>
          <PostsCell
            posts={[
              { id: 1, title: "é um titulo tá vendo", author: "EU MESMO" },
              { id: 4, title: "é um titulo tá vendo", author: "EU MESMO" },
              { id: 8, title: "é um titulo tá vendo", author: "EU MESMO" },
              { id: 12, title: "é um titulo tá vendo", author: "EU MESMO" },
            ]}
          />
        </Posts>
        <Featured></Featured>
      </Container>
    </>
  );
};

export default Home;
