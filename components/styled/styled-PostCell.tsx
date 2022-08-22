import styled from "styled-components";

export const Container = styled.div`
display: flex;
min-height: 100%;
flex-direction: column;
gap: 4vh;
`;
export const Banner = styled.img`
  
  max-width: 540px;
`
export const Title = styled.h3`
font-size: 1.3rem;
font-weight: 600;
transition: 200ms;
`;
export const ReadMore = styled.span`
font-weight: 600;
&:after {
  color: var(--primary);
}
`;

export const Post = styled.article`
color: var(--text);
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
    color: var(--primary);
  }
  ${ReadMore}:after {
    content: " 🡆";
  }
}
`;