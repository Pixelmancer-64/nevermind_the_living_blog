import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import {
  AsideContainer,
  Container,
  Content,
  InnerOl,
  Li,
  OuterOl,
  Summary,
} from "../styled/styled-post";
import { HeadingH1, HeadingH2, P, A } from "../styled/styled-mdx-tags";
// import Highlight, { defaultProps } from "prism-react-renderer";

interface ContentLinkProps {
  children: any;
}

const ContentLink = ({ children }: ContentLinkProps) => {
  return (
    <a id={"ContentLink-" + children} href={"#" + children}>
      <Li>{children}</Li>
    </a>
  );
};

interface AsideProps {
  headings: any[];
  unsorted: any[];
}

const Aside = ({ headings = [], unsorted = [] }: AsideProps) => {
  useEffect(() => {
    if (unsorted.length > 0) {
      let lastOne = 0;
      window.addEventListener("scroll", function () {
        for (let i = unsorted.length - 1; i >= 0; i--) {
          if (
            window.scrollY >
            unsorted[i].offsetTop + unsorted[i].offsetHeight - 100
          ) {
            document
              .getElementById("ContentLink-" + unsorted[i].id)
              ?.classList.add("toggled");
            if (i < lastOne) {
              document
                .getElementById("ContentLink-" + unsorted[lastOne].id)
                ?.classList.remove("toggled");
            }

            lastOne = i;
            break;
          }
        }
      });
    }
  }, [unsorted]);

  return (
    <AsideContainer>
      <Summary>Summary</Summary>
      <OuterOl>
        {headings.map((e, index) => {
          if (Array.isArray(e)) {
            return (
              <InnerOl key={`ol-${index}`}>
                {e.map((el, ind) => {
                  return (
                    <ContentLink key={`${index}-${ind}`}>
                      {el.innerText}
                    </ContentLink>
                  );
                })}
              </InnerOl>
            );
          }
          const num = e.localName;
          return (
            <ContentLink key={`${num}-${index}`}>{e.innerText}</ContentLink>
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
};

interface PostProps<P = any> {
  children: P;
}

const Post = ({ children }: PostProps) => {
  const [headings, setHeadings] = useState<any[]>([]);
  const [unsorted, setUnsorted] = useState<any[]>([]);

  useEffect(() => {
    const elements = [...document.querySelectorAll("h1, h2, h3, h4, h5, h6")];
    setUnsorted(elements);
    let sorted: any[] = [];

    for (let i = 0; i < elements.length; ) {
      if (
        elements[i - 1] != undefined &&
        parseInt(elements[i - 1].localName.slice(-1)) <
          parseInt(elements[i].localName.slice(-1))
      ) {
        let aux = [];
        while (
          i < elements.length - 1 &&
          parseInt(elements[i - 1].localName.slice(-1)) <=
            parseInt(elements[i].localName.slice(-1))
        ) {
          aux.push(elements[i]);
          i++;
        }
        sorted.push(aux);
      } else {
        sorted.push(elements[i]);
        i++;
      }
    }

    setHeadings(sorted);
  }, []);

  return (
    <Container>
      <Content>
        <MDXProvider components={components}>{children}</MDXProvider>
      </Content>
      <Aside headings={headings} unsorted={unsorted}></Aside>
    </Container>
  );
};

export default Post;
