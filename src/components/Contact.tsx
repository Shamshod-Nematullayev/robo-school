import styled from "styled-components"
import { theme } from "../theme"

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    background: ${theme.colors.primary};
    padding: 70px 20px;
    position: relative;
    overflow: hidden;
    @media (max-width: 576px){
        display: block;
    }
`
const LeftContainer = styled.div`
    width: 400px;
    color: ${theme.colors.white};
    padding: 25px 0;
    @media (max-width: 576px){
        width: 100%;
    }
`
const RightContainer = styled.div`
    width: 400px;
    display: flex;
    gap: 5px;
    flex-direction: column;
    @media (max-width: 576px){
        width: 100%;
    }
`
const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    line-height: 130%;
`
const Description = styled.div`
    font-size: 20px;
`
const TextField = styled.input`
    padding: 20px;
    width: 100%;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size 18px;
    @media (max-width: 576px){
        width: 90%;
    }
`
const SubmitButton = styled.div`
    text-align: center;
    padding: 20px;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    font-size 18px;
    width: 100%;
    @media (max-width: 576px){
        width: 90%;
    }
`
const BackgroundProcent = styled.div`
    position: absolute;
    bottom: -40px;
    left: -10px;
    opacity: 0.08;
    color: #fff;
    font-weight: bold;
    font-size: 90px;
`
function Contact() {
  return (
    <Container id="contact">
        <LeftContainer>
          <Title>Запишитесь на курс со скидкой 10%</Title> 
          <Description>Акция действительна до 10 марта 2022 года</Description>
        </LeftContainer>
        <RightContainer>
          <TextField placeholder="Введите ваше имя" type="text" required/>
          <TextField placeholder="Введите ваш телефон" type="tel" />
          <TextField placeholder="Введите ваш email" type="email" />
          <SubmitButton>Отправить заявку</SubmitButton>
        </RightContainer>
        <BackgroundProcent>%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%</BackgroundProcent>
    </Container>
  )
}

export default Contact