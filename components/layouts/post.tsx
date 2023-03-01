import { MDXProvider } from "@mdx-js/react";
import React, { ReactElement, useEffect, useState } from "react";
import {
  AsideContainer,
  Container,
  Content,
  Li,
  OuterOl,
  Summary,
  Content_link_wrapper,
} from "../styled/styled-post";
import { Banner, Extra_Info } from "../PostComponents";
import {
  HeadingH1,
  HeadingH2,
  HeadingH3,
  P,
  A,
  Img,
} from "../styled/styled-mdx-tags";
import Head from "next/head";
import authors from "../../pages/posts/authors.json";

interface ContentLinkProps {
  children: ReactElement;
  padding: number;
}

const ContentLink = ({ children, padding }: ContentLinkProps) => {
  return (
    <Content_link_wrapper>
      <a id={"ContentLink-" + children} href={"#" + children}>
        <Li padding={padding}>{children}</Li>
      </a>
    </Content_link_wrapper>
  );
};

export interface Meta {
  slug: string;
  title: string;
  authors: Array<keyof typeof authors>;
  body: string;
  banner: {
    url: string;
    alt: string;
  };
}

export interface Post_Interface extends Meta {
  created_at: string;
  last_updated_at: string;
}

interface AsideProps {
  headings: Array<HTMLElement>;
}

const Aside = ({ headings = [] }: AsideProps) => {
  useEffect(() => {
    if (headings.length > 0) {
      window.addEventListener("scroll", function () {
        for (let i = headings.length - 1; i >= 0; i--) {
          if (window.scrollY > headings[i].offsetTop - 10) {
            document
              .getElementById("ContentLink-" + headings[i].id)
              ?.classList.add("toggled");
          } else {
            document
              .getElementById("ContentLink-" + headings[i].id)
              ?.classList.remove("toggled");
          }
        }
      });
    }
  }, [headings]);

  return (
    <AsideContainer>
      <Summary>Summary</Summary>
      <OuterOl>
        {headings.map((e, index) => {
          return (
            <ContentLink
              padding={parseInt(e.localName.charAt(1))}
              key={`${e.localName}-${index}`}
            >
              <p>{e.innerText}</p>
            </ContentLink>
          );
        })}
      </OuterOl>
    </AsideContainer>
  );
};

const components = {
  h1: HeadingH1,
  h2: HeadingH2,
  h3: HeadingH3,
  p: P,
  a: A,
  img: Img,
};

interface PostProps {
  children: ReactElement;
  meta: Post_Interface;
}

const Post = ({ meta, children }: PostProps) => {
  const [headings, setHeadings] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    setHeadings([...headingElements] as Array<HTMLElement>);
  }, []);

  const created_at = meta.created_at;
  const last_updated_at = meta.last_updated_at;

  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <Content>
        <Banner url={meta.banner.url} alt={meta.banner.alt} />

        <Extra_Info
          created_at={created_at}
          last_updated_at={last_updated_at}
          written_by={meta.authors}
        />

        {/* @ts-ignore */}
        <MDXProvider components={components}>{children}</MDXProvider>

      </Content>

      <Aside headings={headings}></Aside>
      {/* <To_top><img src="/icons/moon.svg"/></To_top> */}
    </Container>
  );
};

export default Post;
