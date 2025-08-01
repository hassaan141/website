import styles from './App.module.css';
import { Navbar } from './componenets/Navbar/Navbar';
import { Hero } from './componenets/Hero/Hero';
import { About } from './componenets/About/About';
import { Experience } from './componenets/Experience/Experience';
import { Projects } from './componenets/Projects/Projects';
import { Contact } from './componenets/Contact/Contact';
import {Languages} from './componenets/Skills/Languages';
import {NewExp} from './componenets/newExp/newExp';
import { NewProj } from './componenets/newProjects/newProjects';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {

  return (
      <div className={styles.App}>
        <AnimatedBackground
          animationName="cosmicDust"
          blendMode="normal"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            zIndex: -1,
          }}
        />
        <Navbar/>
        <Hero/>
        {/* <About/> */}
        <NewProj/>
        <Languages/>
        <NewExp/>
        {/* <Experience/> */}
        {/* <Projects/> */}
        <Contact/>
      </div>
   
  )
}

export default App;
