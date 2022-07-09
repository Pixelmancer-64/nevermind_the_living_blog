import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface Posts {
  posts: Array<any>;
}

export default function PostsCell({ posts }: Posts) {
  const Container = styled.div`
    display: flex;
    min-height: 100%;
    flex-direction: column;
    gap: 4vh;
  `;

  const Post = styled.div`
    color: white;
    font-family: sans-serif;
    font-weight: 400;

    a {
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    &:hover {
      h3 {
        color: #d5043c;
      }
    }
  `;

  const Title = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
  `;
  const ReadMore = styled.span`
    font-weight: 600;
  `;

  return (
    <Container>
      {posts.map(({ id, title, body }) => {
        return (
          <Post key={id}>
            <Link href="/">
              <>
                <Title>{title}</Title>
                <span>{body}</span>
                <ReadMore>Read More</ReadMore>
              </>
            </Link>
          </Post>
        );
      })}
    </Container>
  );
}
