import { MDXProvider } from "@mdx-js/react";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  max-width: 1150px;
  margin: 32px auto;
  color: ${(props) => props.theme.colors.text};
`;

const Content = styled.article`
  flex: 1 1 820px;
  max-width: min(820px, 100%);
  /* background-color: ${(props) => props.theme.colors.background.secondary}; */
  padding: 32px;
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;

  @media (min-width: 1100px) {
    margin-left: auto;
  }
`;

const AsideContainer = styled.aside`
  position: sticky;
  top: 32px;
  flex: 0 1 200px;
  max-height: 55vh;
  margin-left: auto;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const OuterOl = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  a {
    color: inherit;
  }
`;
const InnerOl = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 3px;
  li {
    padding-left: 16px;
  }
`;

const Summary = styled.span`
  color: ${(props) => props.theme.colors.tertiary};
`;

const Li = styled.li`
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-light);

  opacity: 0.7;
  transition: opacity 400ms ease 0s;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

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
            unsorted[i].offsetTop + unsorted[i].offsetHeight - 80
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

const H1 = styled.h1`
  font-size: var(--font-size-4xl);
  margin-top: 32px;
  color: ${(props) => props.theme.colors.tertiary};
`;

const H2 = styled.h2`
  font-size: var(--font-size-3xl);
  color: ${(props) => props.theme.colors.tertiary};
  margin-top: 48px;
  margin-bottom: 32px;
`;

const HeadingH1 = ({ children }: any) => {
  return <H1 id={children}>{children}</H1>;
};

const HeadingH2 = ({ children }: any) => {
  return <H2 id={children}>{children}</H2>;
};

const A = ({ href, children }: any) => {
  return (
    <Link href={href}>
      <a>§{children}</a>
    </Link>
  );
};

const P = styled.p`
  font-size: var(--font-size-lg);
`;

const components = {
  h1: HeadingH1,
  h2: HeadingH2,
  p: P,
  a: A,
};

interface PostProps<P = any> {
  children: P;
  meta: {
    date: string;
  };
}

const Post = ({ children, meta }: PostProps) => {
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
