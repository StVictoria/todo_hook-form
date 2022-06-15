import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Loader: React.FC = () => {
  return <LoaderStyled>Loading...</LoaderStyled>;
};

export default Loader;
