import styled from 'styled-components'
import Heading from './Heading'
import { theme } from '../theme'
import { Grid2 } from '@mui/material'
const PackCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 30px;
`
const Title = styled.h4`
    font-size: 30px;
    text-align: center;
    color: ${theme.colors.secondary};
`
const Price = styled.div`
    font-size: 50px;
    text-align: center;
    font-weight: 600;
    color: ${theme.colors.secondary};
`
const Description = styled.div`
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.secondary};
    margin-bottom: 40px;
`
const PrimaryButton = styled.div`
    width: 90%;
    margin: 20px auto;
    padding: 15px 0;
    text-align: center;
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
`
function Pricing() {
  return (
    <div id='pricing'>
     <Heading>
        Выберите нужный пакет
     </Heading>   
     <Grid2 container spacing={2} alignItems="center">
        <Grid2 size={{xs: 12, md: 4}}>
        <PackCard style={{background: theme.colors.secondary}}>
        <Title style={{color: theme.colors.white}}>– PRO –</Title>
        <Price style={{color: theme.colors.white}}>
            20.000 ₽
        </Price>
        <Description style={{color: theme.colors.white}}>
            УМК по робототетхнике и программированию
        </Description>
        <PrimaryButton>
            Оставить заявку
        </PrimaryButton>
     </PackCard>
        </Grid2>
        <Grid2 size={{xs: 12, md: 4}}>
        <PackCard>
        <Title>– ROBO –</Title>
        <Price>
            15.000 ₽
        </Price>
        <Description>
            УМК по робототетхнике
        </Description>
        <PrimaryButton>
            Оставить заявку
        </PrimaryButton>
     </PackCard>
        </Grid2>
        <Grid2 size={{xs: 12, md: 4}}>
        <PackCard>
        <Title>– PRO –</Title>
        <Price>
            10.000 ₽
        </Price>
        <Description>
            УМК по программированию
        </Description>
        <PrimaryButton>
            Оставить заявку
        </PrimaryButton>
     </PackCard>
        </Grid2>
     </Grid2>
     
    </div>
  )
}

export default Pricing