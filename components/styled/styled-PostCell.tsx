import styled from "styled-components";

export const Container = styled.div`
display: flex;
min-height: 100%;
flex-direction: column;
gap: 4vh;
`;
export const Title = styled.h3`
font-size: 1.3rem;
font-weight: 600;
transition: 200ms;
`;
export const ReadMore = styled.span`
font-weight: 600;
&:after {
  color: ${(props) => props.theme.colors.primary};
}
`;

export const Post = styled.article`
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