import styled from "styled-components";

export const Container = styled.main`
display: grid;
grid-template-columns: 2fr 1fr;
padding: 3vh 3vw;
background-color: ${(props) => props.theme.colors.background.secondary};
column-gap: 12rem;
`;
export const Posts = styled.div``;
export const Featured = styled.div`
display: flex;
flex-direction: column;
gap: 4rem;
`;
export const TopCategories = styled.div`
color: ${(props) => props.theme.colors.text};
`;
export const PopularContent = styled.div`
color: ${(props) => props.theme.colors.text};
flex-grow: 1;
`;
export const CategoryList = styled.ul`
display: flex;
flex-wrap: wrap;
`;

export const Category = styled.li`
& a {
  color: inherit;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  padding: 3px 12px;
  font-size: 13px;
  margin-right: 8px;
  margin-bottom: 8px;
  display: inline-block;
  text-decoration: none;
}
`;