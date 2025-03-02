import styled from "styled-components"
import { theme } from "../theme"
import { Grid2 as Grid} from "@mui/material"

const DescriptionAboutSchool = styled.p`
    color: ${theme.colors.secondary};
    font-size: 20px;
`
const StatNumber = styled.div`
    font-size: 70px;
    font-weight: 600;
    color: ${theme.colors.primary};
    @media (max-width:576px){
        text-align: center;
    }
`
const StatDescription = styled.p`
    font-size: 18px;
    line-height: 28px;
    color: ${theme.colors.secondary};
    opacity: .7;
    @media (max-width:576px){
        text-align: center;
    }
`
function AboutSchool() {
  return (
    <div>
        <DescriptionAboutSchool>
        <b>Robo School</b> – учреждение для формирования кадрового педагогического резерва в сфере робототехникии программирования
        </DescriptionAboutSchool>
        <Grid container spacing={1} >
            <Grid size={{xs: 12, md: 3}}>
                <StatNumber>
                    10
                </StatNumber>
                <StatDescription>
                    УМК по различным направлениям по робототехнике
                </StatDescription>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
                <StatNumber>
                    20
                </StatNumber>
                <StatDescription>
                    Школ, в которых запущена робототехника                
                </StatDescription>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
                <StatNumber>
                    100
                </StatNumber>
                <StatDescription>
                    Обученных детей на базе собственных центров
                </StatDescription>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
                <StatNumber>
                    1000
                </StatNumber>
                <StatDescription>
                    УМК по различным направлениям по робототехнике
                </StatDescription>
            </Grid>
        </Grid>
    </div>
  )
}

export default AboutSchool