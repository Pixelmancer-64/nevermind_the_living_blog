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
  const Title = styled.h3`
    font-size: 1.3rem;
    font-weight: 600;
    transition: 200ms;
  `;
  const ReadMore = styled.span`
    font-weight: 600;
    &:after {
      color: ${(props) => props.theme.colors.primary};
    }
  `;

  const Post = styled.article`
    color: ${(props) => props.theme.colors.text};
    font-family: sans-serif;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 1.3rem;

    a {
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    &:hover {
      h3 {
        color: ${(props) => props.theme.colors.primary};
      }
      ${ReadMore}:after {
        content: " 🡆";
      }
    }
  `;

  return (
    <Container>
      {posts.map(({ title, body, slug }) => {
        return (
          <Link href={`/posts/${slug}`} key={slug}>
            <a>
              <Post>
                <Title>{title}</Title>
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
