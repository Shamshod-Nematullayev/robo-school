import styled from 'styled-components'
import Heading from './Heading'
import Photo1 from "../assets/teacher (1).jpg"
import Photo2 from "../assets/teacher (2).jpg"
import Photo3 from "../assets/teacher (3).jpg"
import Photo4 from "../assets/teacher (4).jpg"
import Photo5 from "../assets/teacher (5).jpg"

type Teacher = {
    name: string,
    description: string,
    facebook: string,
    instagram: string,
    telegram: string,
    education: string,
    experience: string,
    awards?: string,
    photo: typeof Photo1
}
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
        photo: Photo1
    },
    {
        name: "Марина Орлова",
        description: "преподаватель по робототехнике",
        facebook: "https://www.facebook.com/MarinaOrlov",
        instagram: "https://www.instagram.com/marina_orlov",
        telegram: "https://t.me/MarinaOrlov",
        education: "Факультет экономики и менеджмента",
        experience: "Преподавал на курсах 1 курса",
        photo: Photo2
    },
    {
        name: "Максим Петров",
        description: "преподаватель по программированию",
        facebook: "https://www.facebook.com/MaximPetrov",
        instagram: "https://www.instagram.com/maxim_petrov",
        telegram: "https://t.me/MaximPetrov",
        education: "Факультет информатики и вычислительной техники",
        experience: "Преподавал на курсах 1 курса",
        photo: Photo3
    },
    {
        name: "Константин Назаров",
        description: "преподаватель по робототехнике",
        facebook: "https://www.facebook.com/KonstantinNazarov",
        instagram: "https://www.instagram.com/konstantin_nazarov",
        telegram: "https://t.me/KonstantinNazarov",
        education: "Факультет информатики и вычислительной техники",
        experience: "Преподавал на курсах 1 курса",
        photo: Photo4
    },
    {
        name: "Лиза Весенняя",
        description: "преподаватель по программированию",
        facebook: "https://www.facebook.com/LizaVesennya",
        instagram: "https://www.instagram.com/liza_vesennya",
        telegram: "https://t.me/LizaVesennya",
        education: "Факультет информатики и вычислительной техники",
        experience: "Преподавал на курсах 1 курса",
        photo: Photo5
    },
]
const Container = styled.section`
    padding: 50px 0;
`
const SliderContainer = styled.div`
    display: flex;
    gap: 20px;
    overflow-x: scroll;
`
const TeacherPhoto = styled.img`
    width: 360px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
`
function Trainers() {
  return (
    <Container>
        <Heading>
            Профессиональные тренеры
        </Heading>
        <SliderContainer>
            {teachers.map((teacher, i) => (
                <div key={i}>
                    <TeacherPhoto src={teacher.photo} />
                    <h3>{teacher.name}</h3>
                    <p>{teacher.description}</p>
                </div>
            ))}
        </SliderContainer>
    </Container>
  )
}

export default Trainers