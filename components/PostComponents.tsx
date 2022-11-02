import styled from "styled-components";

const Image = styled.img`
  border-radius: Max(0px, Min(0.375rem, calc((100vw - 4px - 100%) * 9999))) /
    0.375rem;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  margin: auto;
  min-width: 100%;
  /* max-width: 100%; */
  /* min-height: 100%; */
  max-height: 100%;
  border-radius: 3px;
`;

const Extra_Info_Container = styled.div`
  color: var(--text);
  margin-bottom: 32px;
`;

export const Extra_Info = ({
  publishedOn,
  lastUpdatedOn,
  writtenBy = ["Hugo Billé Martins"],
}: any) => {
  return (
    <Extra_Info_Container>
      <p>
        Published on <span>{publishedOn}</span>
        {lastUpdatedOn && <span> · Updated on {lastUpdatedOn}</span>}
      </p>
      <p>
        Written by -{" "}
        {writtenBy.map((e: string, index: number) => {
          if (writtenBy.length == 1) return e;
          if (index == writtenBy.length - 1) return e;
          if (index == writtenBy.length - 2) return e + " and ";
          return e + ", ";
        })}
      </p>
    </Extra_Info_Container>
  );
};

export const Banner = ({ url, alt = "banner image" }: any) => {
  return <Image src={url} alt={alt}></Image>;
};
