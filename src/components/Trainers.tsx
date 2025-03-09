import styled from "styled-components";
import Heading from "./Heading";
import Photo1 from "../assets/teacher (1).jpg";
// import Photo2 from "../assets/teacher (2).jpg";
// import Photo3 from "../assets/teacher (3).jpg";
// import Photo4 from "../assets/teacher (4).jpg";
// import Photo5 from "../assets/teacher (5).jpg";
import { theme } from "../theme";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import useIsXS from "../hooks/isXS";
import TrainerModal from "./TrainerModal";
import { sheetId } from "../contants";

// export type EducationItem = {
//   description: string;
//   title?: string;
// };

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
// const teachers: Teacher[] = [
//   {
//     name: "Ирина Лайм",
//     description: "преподаватель по робототехнике",
//     facebook: "https://www.facebook.com/IrinaLaim",
//     instagram: "https://www.instagram.com/irina_laim",
//     telegram: "https://t.me/IrinaLaim",
//     education: [
//       {
//         description: `Сентябрь 1995 — Июнь 2000
// Санкт-Петербургский политехнический университет Петра Великого
// Факультет: Компьютерных наук и технологий
// Специальность: Математика и компьютерные науки
// Форма обучения: Очная`,
//       },
//       {
//         title: "Курсы и тренинги",
//         description: `
// Ноябрь 2020 — Февраль 2021
// Программа дополнительного образования «3D Моделирование»`,
//       },
//     ],
//     experience: "Преподавал на курсах 1 курса",
//     awards: "Присуждено звание преподавателем робототехники",
//     photo: Photo1,
//   },
//   {
//     name: "Марина Орлова",
//     description: "преподаватель по робототехнике",
//     facebook: "https://www.facebook.com/MarinaOrlov",
//     instagram: "https://www.instagram.com/marina_orlov",
//     telegram: "https://t.me/MarinaOrlov",
//     education: [
//       {
//         description: `Сентябрь 1995 — Июнь 2000
// Санкт-Петербургский политехнический университет Петра Великого
// Факультет: Компьютерных наук и технологий
// Специальность: Математика и компьютерные науки
// Форма обучения: Очная`,
//       },
//       {
//         title: "Курсы и тренинги",
//         description: `
// Ноябрь 2020 — Февраль 2021
// Программа дополнительного образования «3D Моделирование»`,
//       },
//     ],
//     experience: "Преподавал на курсах 1 курса",
//     photo: Photo2,
//   },
//   {
//     name: "Максим Петров",
//     description: "преподаватель по программированию",
//     facebook: "https://www.facebook.com/MaximPetrov",
//     instagram: "https://www.instagram.com/maxim_petrov",
//     telegram: "https://t.me/MaximPetrov",
//     education: [
//       {
//         description: `Сентябрь 1995 — Июнь 2000
// Санкт-Петербургский политехнический университет Петра Великого
// Факультет: Компьютерных наук и технологий
// Специальность: Математика и компьютерные науки
// Форма обучения: Очная`,
//       },
//       {
//         title: "Курсы и тренинги",
//         description: `
// Ноябрь 2020 — Февраль 2021
// Программа дополнительного образования «3D Моделирование»`,
//       },
//     ],
//     experience: "Преподавал на курсах 1 курса",
//     photo: Photo3,
//   },
//   {
//     name: "Константин Назаров",
//     description: "преподаватель по робототехнике",
//     facebook: "https://www.facebook.com/KonstantinNazarov",
//     instagram: "https://www.instagram.com/konstantin_nazarov",
//     telegram: "https://t.me/KonstantinNazarov",
//     education: [
//       {
//         description: `Сентябрь 1995 — Июнь 2000
// Санкт-Петербургский политехнический университет Петра Великого
// Факультет: Компьютерных наук и технологий
// Специальность: Математика и компьютерные науки
// Форма обучения: Очная`,
//       },
//       {
//         title: "Курсы и тренинги",
//         description: `
// Ноябрь 2020 — Февраль 2021
// Программа дополнительного образования «3D Моделирование»`,
//       },
//     ],
//     experience: "Преподавал на курсах 1 курса",
//     photo: Photo4,
//   },
//   {
//     name: "Лиза Весенняя",
//     description: "преподаватель по программированию",
//     facebook: "https://www.facebook.com/LizaVesennya",
//     instagram: "https://www.instagram.com/liza_vesennya",
//     telegram: "https://t.me/LizaVesennya",
//     education: [
//       {
//         description: `Сентябрь 1995 — Июнь 2000
// Санкт-Петербургский политехнический университет Петра Великого
// Факультет: Компьютерных наук и технологий
// Специальность: Математика и компьютерные науки
// Форма обучения: Очная`,
//       },
//       {
//         title: "Курсы и тренинги",
//         description: `
// Ноябрь 2020 — Февраль 2021
// Программа дополнительного образования «3D Моделирование»`,
//       },
//     ],
//     experience: "Преподавал на курсах 1 курса",
//     photo: Photo5,
//   },
// ];
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
  width: 280px;
  height: 300px;
  object-fit: cover;
  border-radius: 20px;
  @media (max-width: 576px) {
    width: 220px;
    height: 306px;
  }
`;
const TrainerName = styled.h3`
  color: ${theme.colors.secondary};
`;
const FakeScrollBar = styled.div`
  position: absolute;
  left: 0;
  width: 500px; /* Scroll uzunligini belgilash */
  height: 5px;
  background: ${theme.colors.secondary};
  border-radius: 10px;
  opacity: 0.7;
  transition: width 0.2s;
`;
const FakeScrollBarTrack = styled.div`
  background: #ccc;
  width: 100%;
  position: relative;
  height: 5px;
  transform: scaleX(0.5);
  transform-origin: left;
  @media (max-width: 576px) {
    transform: none;
  }
`;
const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: ${theme.colors.secondary};
  border-radius: 50%;
  color: ${theme.colors.white};
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.9;
  &:hover {
    color: ${theme.colors.primary};
    opacity: 1;
  }
`;

const MoreButton = styled.div`
  color: ${theme.colors.primary};
  font-size: 18px;
  margin-left: 10px;
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  &:hover {
    background: ${theme.colors.primary + 20};
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
type rowType = {
  c:
    | {
        v: string;
      }[]
    | null[];
};

function Trainers() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const thumbWidth = 100;
  const [scrollPos, setScrollPos] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher>(teachers[0]);
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        const json = JSON.parse(text.substring(47, text.length - 2)); // Google Sheets JSON formatini to'g'irlash
        const rows = json.table.rows.map((row: rowType) =>
          row.c.map((cell) => (cell ? cell.v : ""))
        );

        setTeachers(
          rows.slice(2).map((row: Array<string>) => ({
            name: row[0],
            description: row[1],
            facebook: row[2],
            instagram: row[3],
            telegram: row[4],
            education: row[5],
            experience: row[6],
            awards: row[7],
            photo: row[8],
          }))
        );
      })
      .catch((err) => console.error("Xatolik:", err));
  }, []);
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
  const smoothScroll = (
    element: HTMLElement,
    target: number,
    duration: number
  ) => {
    let start = element.scrollLeft;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      let progress = Math.min((timestamp - startTime) / duration, 1);
      let ease =
        progress < 0.5
          ? 2 * progress ** 2
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      element.scrollLeft = start + (target - start) * ease;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const handleClickLeft = () => {
    if (containerRef.current) {
      smoothScroll(
        containerRef.current,
        containerRef.current.scrollLeft - 200,
        500
      );
    }
  };

  const handleClickRight = () => {
    if (containerRef.current) {
      smoothScroll(
        containerRef.current,
        containerRef.current.scrollLeft + 200,
        500
      );
    }
  };
  const handleClickMoreButton = (trainer: Teacher) => {
    setShowModal(true);
    setSelectedTeacher(trainer);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Container id="trainers">
      {showModal && (
        <>
          <ModalBackdrop />
          <TrainerModal
            handleCloseModal={handleCloseModal}
            {...selectedTeacher}
          />
        </>
      )}
      <Heading>Профессиональные тренеры</Heading>
      <SliderContainer ref={containerRef}>
        {teachers.map((teacher, i) => (
          <div key={i}>
            <TeacherPhoto src={teacher.photo} />
            <TrainerName>{teacher.name}</TrainerName>
            <p>{teacher.description}</p>
            <MoreButton onClick={() => handleClickMoreButton(teacher)}>
              Подробнее
            </MoreButton>
          </div>
        ))}
      </SliderContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FakeScrollBarTrack>
          <FakeScrollBar
            style={{
              width: `${thumbWidth}px`,
              left: `${scrollPos}px`,
            }}
          />
        </FakeScrollBarTrack>
        {!useIsXS() && (
          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <IconButton onClick={handleClickLeft}>
              <FontAwesomeIcon icon={faLessThan} />
            </IconButton>
            <IconButton onClick={handleClickRight}>
              <FontAwesomeIcon icon={faGreaterThan} />
            </IconButton>
          </div>
        )}
      </div>
    </Container>
  );
}

export default Trainers;
