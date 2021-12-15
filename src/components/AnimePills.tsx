import { Link } from "react-router-dom";
import styled from "styled-components";

interface IAnime {
  anime: string;
  color: string;
}

const AnimePill = ({ anime, color }: IAnime) => {
  return (
    <StyledPill style={{ background: color }}>
      <Link to={`/anime/${anime}`}>{anime}</Link>
    </StyledPill>
  );
};
const StyledPill = styled.div`
  border-radius: 999px;
  & a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 1rem 2rem;
  }
`;
export default AnimePill;