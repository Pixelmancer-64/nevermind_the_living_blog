import Link from "next/link";
import React from "react";
import { Container, Post, ReadMore, Title, Banner } from "./styled/styled-PostCell";

interface Posts {
  posts: Array<any>;
}

export default function PostsCell({ posts }: Posts) {
  return (
    <Container>
      {posts.map(({ title, body, slug, url }) => {
        return (
          <Link href={`/posts/${slug}`} key={slug}>
            <a>
              <Post>
                <Title>{title}</Title>
                {/* <Banner src={url}/> */}
                <p>{body}</p>
                <ReadMore>Read More</ReadMore>
              </Post>
            </a>
          </Link>
        );
      })}
    </Container>
  );
}
