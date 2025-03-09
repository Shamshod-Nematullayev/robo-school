import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { Grid2, Tab, Tabs } from "@mui/material";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EducationItem } from "./Trainers";
import useIsXS from "../hooks/isXS";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type TrainerModalProps = {
  photo: string;
  name: string;
  description: string;
  facebook: string;
  instagram: string;
  awards?: string;
  education: EducationItem[];
  experience: string;
  handleCloseModal: () => void
};

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.white};
  padding: 30px;
  border-radius: 20px;
  width: 60%;
  height: 80%;
  z-index: 1000;
  @media (max-width: 576px){
    width: 80%;
  }
`;
const Photo = styled.img`
  width: 100%;
`;
const CloseButton = styled.div`
  font-size: 18px;
  text-align: right;
  cursor: pointer;
`;
const TrainerName = styled.h3`
  color: ${theme.colors.secondary};
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 24px;
  @media (max-width: 576px){
    font-size: 18px;
  }
`;
const TrainerDescription = styled.div`
  color: ${theme.colors.secondary};
  opacity: 0.7;
  font-size: 18px;
  margin-bottom: 10px;
  @media (max-width: 576px){
    font-size: 12px;
  }
`;
const IconButton = styled.a`
  background: ${theme.colors.secondary};
  color: ${theme.colors.white};
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const TabContainer = styled.div`
  flex-grow: 1;
  margin-top: 0px;
  overflow: auto;
  font-size: 20px;
  line-height: 160%;
  box-shadow: inset -10px -10px 10px #fff;
  height: 50%;
  @media (max-width: 576px){
    height: 70%;
  }
`;


const TrainerModal: React.FC<TrainerModalProps> = ({
  photo,
  name,
  description,
  facebook,
  instagram,
  awards,
  education,
  experience,
  handleCloseModal
}) => {
  enum TabOption {
    INFO = "info",
    EXPERIENCE = "experience",
    AWARDS = "awards",
  }
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  })

  const [tab, setTab] = useState<TabOption>(TabOption.INFO);
  return (
    <Container >
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 4, md: 2 }}>
          <Photo src={photo} alt="Trainer" />
        </Grid2>
        <Grid2 size={{ xs: 7, md: 9 }}>
          <TrainerName>{name}</TrainerName>
          <TrainerDescription>{description}</TrainerDescription>
          <div style={{ display: "flex", gap: "5px" }}>
            <IconButton href={facebook} target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </IconButton>
            <IconButton href={instagram} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </IconButton>
          </div>
        </Grid2>
        <Grid2 size={{ xs: 1 }}>
          <CloseButton onClick={() => handleCloseModal()}>{useIsXS() ? <FontAwesomeIcon icon={faXmark}/> : "Закрыть"}</CloseButton>
        </Grid2>
      </Grid2>
      <Tabs
        value={tab}
        onChange={(_, newValue) => setTab(newValue as TabOption)}
        sx={{
          "& .MuiTabs-indicator": {
            backgroundColor: theme.colors.primary,
          },
          "& .Mui-selected": {
            color: theme.colors.primary,
          },
        }}
      >
        <Tab label="Образование" value={TabOption.INFO} />
        <Tab label="Опыт работы" value={TabOption.EXPERIENCE} />
        <Tab label="Награды" value={TabOption.AWARDS} disabled={!awards} />
      </Tabs>
        <TabContainer>
            {tab === TabOption.INFO && (
                <div>
                {education.map(elem => (<>
                    <h4>{elem.title}</h4>
                    <p>{elem.description}</p>
                </>))}
                </div>
            )}
            {tab === TabOption.EXPERIENCE && (
                <div>
                {experience}
                </div>
            )}
            {tab === TabOption.AWARDS && (
                <div>
                {/* Trainer awards */}
                {awards && <>{awards}</>}
                </div>
            )}

        </TabContainer>
    </Container>
  );
};

export default TrainerModal;
