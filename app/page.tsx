"use client";
import Header from './components/header';
import Home from './components/home';
import About from './components/about';

export default function Component() {
  return (
   <div className='flex flex-col mx-10 bg-primary'>
      <Header />
      <Home />
      <About />
   </div>
  )
}