import styled from "styled-components"
import { theme } from "../theme"
import { Grid2 } from "@mui/material"
import Heading from "./Heading"

const Container = styled.section`
    position: relative;
    padding: 50px 0;
    `
const BackgroudElement = styled.div`
    position: absolute;
    top: 0;
    left: -100vw;
    width: 200vw;
    height: 100%;
    background-color: ${theme.colors.secondary +"1A"};
`
const Heading2 = styled.div`
    font-size: 24px;
    color: ${theme.colors.secondary};   
    font-weight: 600; 
    @media (max-width:576px){
        text-align: center;
    }
`
const Description = styled.p`
    font-size: 18px;
    line-height: 28px;
    color: ${theme.colors.secondary};
    opacity: .7;
    @media (max-width:576px){
        text-align: center;
    }
`
function AboutCourses() {
  return (
    <Container>
        <BackgroudElement />
        <Heading>Что вы получите после курса</Heading>
        <Grid2 container spacing={3} >
            <Grid2 size={{
                xs: 12,
                md: 4
            }}>
                <Heading2>Удостоверение</Heading2>
                <Description>
                    Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях
                </Description>
            </Grid2>
            <Grid2 size={{
                xs: 12,
                md: 4
            }}>
                <Heading2>Знания</Heading2>
                <Description>
                    По основам разработки учебно-методических комплексов
                    по робототехнике и программированию
                </Description>
            </Grid2>
            <Grid2 size={{
                xs: 12,
                md: 4
            }}>
                <Heading2>Практику</Heading2>
                <Description>
                    Возможность пройти практику по преподаванию робототехники на базе R:ED LAB (в оффлайн или онлайн формате)
                </Description>
            </Grid2>
        </Grid2>
    </Container>
)
}

export default AboutCourses