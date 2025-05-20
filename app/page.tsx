"use client";
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Main from "./components/main";
import TeamAndCredits from "./components/team-and-credits";
import Footer from "./components/footer";

export default function Component() {
  return (
    <>
    <div className='flex flex-col mx-auto bg-primary'>
        <Header />
        <Home />
        <About />
        <Main />
        <TeamAndCredits />
    </div>
    <Footer />
   </>
  )
}