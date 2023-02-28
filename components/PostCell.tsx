import Link from "next/link";
import React from "react";
import {
  Container,
  Post,
  ReadMore,
  Title,
  Banner,
  Arrows,
  Read_more_wrapper
} from "./styled/styled-PostCell";

interface Posts {
  posts: Array<any>;
}

export default function PostsCell({ posts }: Posts) {
  return (
    <Container>
      {posts.map(({ title, body, slug }) => {
        return (
          <Link href={`/posts/${slug}`} key={slug}>
            <a>
              <Post>
                <Title>{title}</Title>
                {/* <Banner src={url}/> */}
                <p>{body}</p>
                <Read_more_wrapper>
                  <ReadMore>Read More</ReadMore>
                  <Arrows>
                    <img src="icons/arrow_right.svg"/>
                  </Arrows>
                </Read_more_wrapper>
              </Post>
            </a>
          </Link>
        );
      })}
    </Container>
  );
}
