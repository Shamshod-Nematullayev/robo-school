import { Grid2 as Grid} from "@mui/material"
import styled from "styled-components"
import { theme } from "../theme"
import studentGirlPhoto from "../assets/student girl.png"
import useIsXS from "../hooks/isXS"

const HeroContainer = styled.div`
    background-color: ${theme.colors.secondary};
    padding:  0 100px 0 200px;
    min-height: calc(100vh - 70px);
    display: flex;
    align-items: center;
    @media (max-width: 576px){
        padding:  15px;
        display: block;
    }
    `
const Heading = styled.h1`
    font-size: 50px;
    font-weight: 600;
    color: ${theme.colors.white};
    @media (max-width: 576px){
        font-size: 30px;
        text-align: center;
    }
`
const Description = styled.p`
    font-size: 20px;
    color: ${theme.colors.white};
    margin-bottom: 60px;
`
const PrimaryButton = styled.a`
    text-decoration: none;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    font-size: 18px;
    padding: 25px 54px;
    border-radius: 5px;
`
const HeroImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const HeroImg = styled.img`
    object-fit: cover;
    height: calc(100vh - 70px);
    @media (max-width: 576px){
        height: 300px;
    }
`

function Hero() {
    const isXS = useIsXS()
  return (
    <HeroContainer>
        <Grid container spacing={1}>
        <Grid size={{xs: 12, md: 6}}>
            <Heading>
                ROBO SCHOOL
            </Heading>
            <Description>
                Курсы повышения квалификации по робототехнике для педагогов начальной школы
            </Description>
            {!isXS && <PrimaryButton>Записаться на курс</PrimaryButton>}
        </Grid>
        <Grid size={{xs: 12, md: 6}}>
            <HeroImgContainer>
                <HeroImg src={studentGirlPhoto} />
            </HeroImgContainer>
            {isXS && 
            <div style={{display: "flex", justifyContent: "center"}}>
                <PrimaryButton>Записаться на курс</PrimaryButton>
            </div>}
        </Grid>
    </Grid>
    </HeroContainer>
  )
}

export default Hero