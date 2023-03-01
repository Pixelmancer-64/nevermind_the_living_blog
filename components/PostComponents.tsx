import styled from "styled-components";
import authors from "../pages/posts/authors.json";

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

interface Author {
  name: string;
  title: string;
  url: string;
  image_url: string;
}

interface Extra_info {
  created_at: string;
  last_updated_at: string;
  written_by: Array<keyof typeof authors>;
}

export const Extra_Info = ({
  created_at,
  last_updated_at,
  written_by,
}: Extra_info) => {
  return (
    <Extra_Info_Container>
      <p>
        Published on <span>{created_at}</span>
        {last_updated_at && <span> · Updated on {last_updated_at}</span>}
      </p>
      <p>
        Written by -{" "}
        {written_by.map((key, index: number) => {
          const author:Author = authors[key];

          if (written_by.length == 1) return author.name;
          if (index == written_by.length - 1) return author.name;
          if (index == written_by.length - 2) return author.name + " & ";
          return author.name + ", ";
        })}
      </p>
    </Extra_Info_Container>
  );
};

interface Banner {
  url: string;
  alt: string;
}

export const Banner = ({ url, alt = "banner image" }: Banner) => {
  return <Image src={url} alt={alt}></Image>;
};
