import styles from './App.module.css';
import { Navbar } from './componenets/Navbar/Navbar';
import { Hero } from './componenets/Hero/Hero';
import { About } from './componenets/About/About';
import { Experience } from './componenets/Experience/Experience';
import { Projects } from './componenets/Projects/Projects';
import { Contact } from './componenets/Contact/Contact';

function App() {

  return (
      <div className={styles.App}>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
   
  )
}

export default App;
