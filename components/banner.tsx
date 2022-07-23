import styled from "styled-components";

const Image = styled.img`

`

const Banner = ({ url, alt="banner image" }: any) => {
    return (
      <Image src={url} alt={alt} ></Image>
    );
  };

export default Banner