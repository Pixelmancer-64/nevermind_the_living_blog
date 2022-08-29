import styled from "styled-components";

const Image = styled.img`
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const Extra_Info_Container = styled.div`
  color: var(--text);
  margin-bottom: 32px;
`;

export const Extra_Info = ({ publishedOn, lastUpdatedOn }: any) => {
  return (
    <Extra_Info_Container>
      <p>
        Published on <span>{publishedOn}</span>
        {lastUpdatedOn && <span> · Updated on {lastUpdatedOn}</span>}
      </p>
    </Extra_Info_Container>
  );
};

export const Banner = ({ url, alt = "banner image" }: any) => {
  return <Image src={url} alt={alt}></Image>;
};
