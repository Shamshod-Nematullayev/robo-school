import styled from "styled-components";
import { theme } from "../theme";
import useIsXS from "../hooks/isXS";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 100px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.white};
  @media (max-width: 576px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
`;
const Copyright = styled.a`
  color: #fff;
  opacity: 0.7;
  font-size: 16px;
`;
function Footer() {
  return (
    <Container>
      <div>
        <Title>ROBO.SCHOOL</Title>
        {!useIsXS() && (
          <Copyright
            href="https://github.com/Shamshod-Nematullayev"
            target="_blank"
          >
            © Shamshod Ne'matullayev
          </Copyright>
        )}
      </div>
      <div>
        <Title>+998 91 187 25 36</Title>
      </div>
      {useIsXS() && (
        <Copyright
          href="https://github.com/Shamshod-Nematullayev"
          target="_blank"
        >
          © Shamshod Ne'matullayev
        </Copyright>
      )}
    </Container>
  );
}

export default Footer;
