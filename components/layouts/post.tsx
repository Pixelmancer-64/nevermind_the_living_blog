import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import {
  AsideContainer,
  Container,
  Content,
  Li,
  OuterOl,
  Summary,
} from "../styled/styled-post";
import { HeadingH1, HeadingH2, P, A, Img } from "../styled/styled-mdx-tags";

interface ContentLinkProps {
  children: any;
  padding: number;
}

const ContentLink = ({ children, padding }: ContentLinkProps) => {
  return (
    <a id={"ContentLink-" + children} href={"#" + children}>
      <Li padding={padding}>{children}</Li>
    </a>
  );
};

interface AsideProps {
  headings: any[];
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
              {e.innerText}
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
  p: P,
  a: A,
  img: Img
};

interface PostProps<P = any> {
  children: P;
}

const Post = ({ children }: PostProps) => {
  const [headings, setHeadings] = useState<any[]>([]);

  useEffect(() => {
    setHeadings([...document.querySelectorAll("h1, h2, h3, h4, h5, h6")]);
  }, []);

  return (
    <Container>
      <Content>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Content>
      <Aside headings={headings}></Aside>
    </Container>
  );
};

export default Post;
