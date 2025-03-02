import styled from "styled-components"
import { theme } from "../theme"
import useIsXS from "../hooks/isXS"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    height: 50px;
`
const Title = styled.h1`
    font-size: 20px;
    color: inherit;
    text-decoration: none;
    @media (max-width: 576px) {
    font-size: 18px;
  }
    `
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 15px;
    color: inherit;
    li:hover{
    color: ${theme.colors.primary};
    cursor: pointer;
    };
    li a{
        text-decoration: none;
        color: inherit;
        &:hover{
            color: ${theme.colors.primary};
        }
    } 
`
const IconButton = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 44px;
color: inherit;

/* Gradient border */
border: 1px solid transparent; /* Border rangini transparent qilish kerak */
border-image-slice: 1; /* Border image-ni kesish uchun */
background: rgba(255, 255, 255, 0.06);
border-radius: 10px;
a{
    color: inherit;
    text-decoration: none;
}
`;
const MobileMenu = styled.div`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white}
`

const MobileNavMenu = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 15px;
    font-size: 30px;
    font-weight: bold;
    li{
        a{
            text-decoration: none;
            color: inherit;
        }
    } 
`
function Header() {
    const isXS = useIsXS();
    const [openMobileMenu, setOpenMobileMenu] = useState(false)
  return (
    <>
    {isXS ? <HeaderContainer>
        {/* Mobile Header */}
        <Title>
            ROBO SCHOOL
        </Title>
        <Nav>
        <IconButton>
            <a href="tel:+998911872536">
                <FontAwesomeIcon icon={faPhone} />
            </a>
        </IconButton>
        <IconButton onClick={() => setOpenMobileMenu(true)}>
            <FontAwesomeIcon icon={faBars}/>
        </IconButton>
        </Nav>
        {openMobileMenu && <MobileMenu>
            <HeaderContainer>
                <div></div>
                <IconButton onClick={() => setOpenMobileMenu(false)}>
                    <FontAwesomeIcon icon={faXmark} />
                </IconButton>
            </HeaderContainer>
            <MobileNavMenu>
                <li onClick={() => setOpenMobileMenu(false)}><a href="#about">О школе</a></li>
                <li onClick={() => setOpenMobileMenu(false)}><a href="#trainers">Тренеры</a></li>
                <li onClick={() => setOpenMobileMenu(false)}><a href="#pricing">Стоимость</a></li>
            </MobileNavMenu>
        </MobileMenu>}
        
    </HeaderContainer> : <HeaderContainer>
        {/* Desktop header */}
        <Title>
            ROBO SCHOOL
        </Title>
        <Nav>
            <li><a href="#about">О школе</a></li>
            <li><a href="#trainers">Тренеры</a></li>
            <li><a href="#pricing">Стоимость</a></li>
        </Nav>
        <Title>
            + 998 91 187 25 36
        </Title>
    </HeaderContainer>}
    </>    
  )
}

export default Header