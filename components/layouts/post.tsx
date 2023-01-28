import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
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
import { HeadingH1, HeadingH2, P, A, Img } from "../styled/styled-mdx-tags";
import Head from "next/head";
interface ContentLinkProps {
  children: any;
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
  img: Img,
};

interface PostProps {
  children: any;
  meta: any
}

const Post = ({ meta, children }: PostProps) => {
  const [headings, setHeadings] = useState<any[]>([]);



  useEffect(() => {
    setHeadings([...document.querySelectorAll("h1, h2, h3, h4, h5, h6")]);
  }, []);

  // const file_path = "/path/to/your/file"

  // const ctime = os.path.getctime(file_path)

  // const mtime = os.path.getmtime(file_path)
  
  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <Content>

      <Banner url={meta.banner.url} alt={meta.banner.alt} />

      {/* <Extra_Info
        publishedOn={meta.publishedOn}
        lastUpdatedOn={meta.lastUpdatedOn}
        writtenBy={meta.authors}
      /> */}

        <MDXProvider components={components}>{children}</MDXProvider>

      </Content>

      <Aside headings={headings}></Aside>
      {/* <To_top><img src="/icons/moon.svg"/></To_top> */}
    </Container>
  );
};

export default Post;