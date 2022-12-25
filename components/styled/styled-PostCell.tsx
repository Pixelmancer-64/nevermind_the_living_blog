import styled from "styled-components";

export const Container = styled.div`
display: flex;
min-height: 100%;
flex-direction: column;
gap: 48px;
`;
export const Banner = styled.img`
  
  max-width: 540px;
`
export const Title = styled.h3`
font-size: 1.3rem;
font-weight: 600;
transition: 200ms;
`;

export const Read_more_wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ReadMore = styled.span`
font-weight: 600;
font-size: .95rem;
&:after {
  color: var(--primary);
}
`;

export const Arrows = styled.div`
  display: none;
  width: 24px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
  filter: var(--primary-filter);
  `

export const Post = styled.article`
color: var(--text);
font-family: sans-serif;
font-weight: 400;
display: flex;
flex-direction: column;
gap: 16px;

&:hover {
  h3 {
    color: var(--primary);
  }
  ${Arrows} {
    display: flex;
  }
}
`;


