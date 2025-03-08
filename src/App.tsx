import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Header from "./components/Header";
import "./index.css";
import Hero from "./components/Hero";
import AboutSchool from "./components/AboutSchool";
import AboutCourses from "./components/AboutCourses";
import Trainers from "./components/Trainers";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Container = styled.div`
  padding: 50px 180px;
  overflow: hidden;
  @media (max-width: 576px) {
    padding: 30px 20px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Container>
        <AboutSchool />
        <AboutCourses />
        <Trainers />
        <Pricing />
      </Container>
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
