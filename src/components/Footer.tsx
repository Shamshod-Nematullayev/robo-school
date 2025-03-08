import styled from "styled-components"
import { theme } from "../theme"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 100px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
`
const Title = styled.div`
    font-weight: 700;
    font-size: 30px;
`
const Copyright = styled.a`
    color: #fff;
    opacity: .7;
    font-size: 16px;
`
function Footer() {
  return (
    <Container>
        <div>
            <Title>ROBO.SCHOOL</Title>
            <Copyright href="https://github.com/Shamshod-Nematullayev" target="_blank">
                © Shamshod Ne'matullayev
            </Copyright>
        </div>
        <div>
            <Title>
                +998 91 187 25 36
            </Title>
        </div>
    </Container>
  )
}

export default Footer