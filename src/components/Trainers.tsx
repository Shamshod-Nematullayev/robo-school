import styled from "styled-components";
import Heading from "./Heading";
import Photo1 from "../assets/teacher (1).jpg";
import Photo2 from "../assets/teacher (2).jpg";
import Photo3 from "../assets/teacher (3).jpg";
import Photo4 from "../assets/teacher (4).jpg";
import Photo5 from "../assets/teacher (5).jpg";
import { theme } from "../theme";
import { RefObject, useEffect, useRef, useState } from "react";

type Teacher = {
  name: string;
  description: string;
  facebook: string;
  instagram: string;
  telegram: string;
  education: string;
  experience: string;
  awards?: string;
  photo: typeof Photo1;
};
const teachers: Teacher[] = [
  {
    name: "Ирина Лайм",
    description: "преподаватель по робототехнике",
    facebook: "https://www.facebook.com/IrinaLaim",
    instagram: "https://www.instagram.com/irina_laim",
    telegram: "https://t.me/IrinaLaim",
    education: "Факультет экономики и менеджмента",
    experience: "Преподавал на курсах 1 курса",
    awards: "Присуждено звание преподавателем робототехники",
    photo: Photo1,
  },
  {
    name: "Марина Орлова",
    description: "преподаватель по робототехнике",
    facebook: "https://www.facebook.com/MarinaOrlov",
    instagram: "https://www.instagram.com/marina_orlov",
    telegram: "https://t.me/MarinaOrlov",
    education: "Факультет экономики и менеджмента",
    experience: "Преподавал на курсах 1 курса",
    photo: Photo2,
  },
  {
    name: "Максим Петров",
    description: "преподаватель по программированию",
    facebook: "https://www.facebook.com/MaximPetrov",
    instagram: "https://www.instagram.com/maxim_petrov",
    telegram: "https://t.me/MaximPetrov",
    education: "Факультет информатики и вычислительной техники",
    experience: "Преподавал на курсах 1 курса",
    photo: Photo3,
  },
  {
    name: "Константин Назаров",
    description: "преподаватель по робототехнике",
    facebook: "https://www.facebook.com/KonstantinNazarov",
    instagram: "https://www.instagram.com/konstantin_nazarov",
    telegram: "https://t.me/KonstantinNazarov",
    education: "Факультет информатики и вычислительной техники",
    experience: "Преподавал на курсах 1 курса",
    photo: Photo4,
  },
  {
    name: "Лиза Весенняя",
    description: "преподаватель по программированию",
    facebook: "https://www.facebook.com/LizaVesennya",
    instagram: "https://www.instagram.com/liza_vesennya",
    telegram: "https://t.me/LizaVesennya",
    education: "Факультет информатики и вычислительной техники",
    experience: "Преподавал на курсах 1 курса",
    photo: Photo5,
  },
];
const Container = styled.section`
  position: relative;
  padding: 50px 0;
`;
const SliderContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const TeacherPhoto = styled.img`
  width: 360px;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 576px) {
    width: 220px;
    height: 306px;
  }
`;
const TrainerName = styled.h3`
    color: ${theme.colors.secondary};
`
const FakeScrollBar = styled.div`
  position: absolute;
  left: 0;
  width: 500px; /* Scroll uzunligini belgilash */
  height: 5px;
  background: ${theme.colors.secondary};
  border-radius: 10px;
  opacity: 0.7;
  cursor: pointer;
  transition: width 0.2s;
`;
const FakeScrollBarTrack = styled.div`
    background: #ccc;
    width: 50%;
    position: relative;
    height: 5px;
    // transform: scaleX(0.5);
`

function Trainers() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [thumbWidth, setThumbWidth] = useState(100);
  const [scrollPos, setScrollPos] = useState(0);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
        if (!container) return;
        const scrollRatio =
        container.scrollLeft / (container.scrollWidth - container.clientWidth);
      setScrollPos(scrollRatio * (container.clientWidth - thumbWidth));
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [thumbWidth]);
  return (
    <Container>
      <Heading>Профессиональные тренеры</Heading>
      <SliderContainer ref={containerRef}>
        {teachers.map((teacher, i) => (
          <div key={i}>
            <TeacherPhoto src={teacher.photo} />
            <TrainerName>{teacher.name}</TrainerName>
            <p>{teacher.description}</p>
          </div>
        ))}
      </SliderContainer>
      <FakeScrollBarTrack>
      <FakeScrollBar
        style={{
          width: `${thumbWidth}px`,
          left: `${scrollPos}px`,
        }}
      />
      </FakeScrollBarTrack>
    </Container>
  );
}

export default Trainers;
