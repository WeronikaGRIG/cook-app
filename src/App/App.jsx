

import Nav from '../Component/Nav/Nav'
import Header from '../Component/Header/Header'
import style from './App.module.scss'

function App() {



  return (
    <>
      <div className={style.app}>
        <Nav />
        <Header />
      </div>
    </>
  )
}

export default App
