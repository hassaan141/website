import { Navbar } from './componenets/Navbar/Navbar';
import styles from './App.module.css';

function App() {

  return (
      <div className={styles.App}>
        <Navbar/>
        <Home/>
      </div>
   
  )
}

export default App
